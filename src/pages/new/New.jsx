import React, { useEffect, useState } from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined"
import './new.scss'
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db, storage } from '../../firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { create } from '@mui/material/styles/createTransitions'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
 
function New({ inputs, title }) {

  const [file, setFile] = useState("");
  const [data, setData] = useState({})
  const [per, setPer]=useState(null)

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on('state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setPer(progress)
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img:downloadURL}))
          });
        }
      );
    }
    file && uploadFile();

  }, [file])

  const handleInput = (e) => {
    const id = e.target.id
    const value = e.target.value

    setData({ ...data, [id]: value })
  }

  console.log(file)

  const onChange = (e) => {
    setFile(e.target.files[0])
  }
  const handleAdd = async (e) => {
    e.preventDefault()
    try {
      const res = await createUserWithEmailAndPassword(
        auth, data.email, data.password
      )
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
    } catch (err) {
      console.log(err)
    }


  }

  return (
    <div className="New">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img className="img"
              src={
                file ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>
              <div className="formInput">
                <label htmlFor='file'>Add Image:<DriveFolderUploadOutlinedIcon className="icon" /></label>
                <input type="file" id="file" onChange={onChange} style={{ display: "none" }} />
              </div>
              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleInput} />
                  </div>
                )
              })}
              <button disabled={per!=null && per<100 } type='submit' >Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New