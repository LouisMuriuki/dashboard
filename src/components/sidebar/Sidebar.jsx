import React from 'react'
import './sidebar.scss'
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">Kinglui</span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <li><span>Dashboard</span></li>
            </ul>
            <ul>
                <li><span>Dashboard</span></li>
            </ul>
            <ul>
                <li><span>Dashboard</span></li>
            </ul>
            <ul>
                <li><span>Dashboard</span></li>
            </ul>
        </div>
        <div className="bottom"></div>
        </div>
  )
}

export default Sidebar