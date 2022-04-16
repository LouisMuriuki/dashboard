import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SystemSecurityUpdateWarningOutlinedIcon from '@mui/icons-material/SystemSecurityUpdateWarningOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from "react-router-dom"
import { DarkModeContext } from '../../context/darkModeContext';
function Sidebar() {
    const {dispatch}=useContext(DarkModeContext)
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">Kinglui</span>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">Main</p>
                <Link to="/" style={{textDecoration:"none"}}>
                <li><DashboardIcon/><span>Dashboard</span></li>
                </Link>
                <p className="title">Lists</p>
                <Link to="/Users" style={{textDecoration:"none"}}>
                <li><AccountCircleOutlinedIcon/><span>Users</span></li>  
                </Link>  
                <Link to="/Products" style={{textDecoration:"none"}}>
                <li><CategoryOutlinedIcon/><span>Products</span></li>
                </Link>
                <li><LocalShippingOutlinedIcon/><span>Delivery</span></li>
                <p className="title">Useful</p>
                <li><EqualizerOutlinedIcon/><span>Stats</span></li>
                <li><NotificationsActiveOutlinedIcon/><span>Notifications</span></li>
                <li><SystemSecurityUpdateWarningOutlinedIcon/><span>System Health</span></li>
                <li><PsychologyOutlinedIcon/><span>Logs</span></li>
                <li><SettingsOutlinedIcon/><span>Settings</span></li>
                <p className="title">User</p>
                <li><AccountBoxOutlinedIcon/><span>Profile</span></li>
                <li><LogoutOutlinedIcon/><span>Log Out</span></li>
                </ul>
        </div>
        <div className="bottom">
            <div className="colorOptions" onClick={()=>dispatch({type:"LIGHT"})}></div>
            <div className="colorOptions" onClick={()=>dispatch({type:"DARK"})} ></div> 
        </div>
        </div>
  )
}

export default Sidebar