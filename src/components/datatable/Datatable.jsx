import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from '../../datatablesource'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase';

function Datatable() {
  const [data, setData] = useState([])

  useEffect(() => {
    //NOT REAL TIME
    // const fetchData = async () => {
    //   let list = []
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({id: doc.id,...doc.data()})
    //     });
    //     setData(list)
    //   } catch (err) {
    //   }
    // }
    // fetchData()

    //REAL TIME
    const unsub = onSnapshot(collection(db, "users"), (snapShot) => {
      let list = []
      snapShot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() })
      })
      setData(list)
    },
      (err) => {
        console.log(err)
      }
    )
    return()=>{
      unsub( )
    }
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
    } catch (err) {
      console.log(err)
    }
    setData(data.filter(item => item.id !== id))
  }

  const actionColumn = [
    {
      field: "action", headerName: "Action", width: 200, renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/Users/test" style={{ textDecoration: "none" }} className="link">
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>

          </div>
        )

      }
    }]
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add New User
        <Link to="/Users/new" style={{ textDecoration: "none" }} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable