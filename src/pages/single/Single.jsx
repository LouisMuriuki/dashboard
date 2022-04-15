import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Chart from '../../components/charts/Charts'
import List from '../../components/table/Table'
import './single.scss'

function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src= "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Jane Doe </h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">janedoe@gmail.com</span>      
                </div>
                <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">+25442342424</span>      
                </div>
                <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">63 Kibwes</span>      
                </div>
                <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">Kenya</span>      
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="User Spending ( last 6 Months )"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single