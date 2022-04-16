import React, { useState } from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined"
import './new.scss'

function New({ inputs, title }) {

  const [file, setFile] = useState("");

  console.log(file)

  const onChange = (e) => {
    setFile(e.target.files[0])
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
            <form>
              <div className="formInput">
                <label htmlFor='file'>Add Image:<DriveFolderUploadOutlinedIcon className="icon" /></label>
                <input type="file" id="file" onChange={onChange} style={{ display: "none" }} />
              </div>
              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                )
              })}
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New