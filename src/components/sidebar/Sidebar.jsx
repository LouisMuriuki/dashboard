import React from 'react'
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
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">Kinglui</span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">Main</p>
                <li><DashboardIcon/><span>Dashboard</span></li>
                <p className="title">Lists</p>
                <li><AccountCircleOutlinedIcon/><span>Users</span></li>    
                <li><CategoryOutlinedIcon/><span>Products</span></li>
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
            <div className="colorOptions"></div>
            <div className="colorOptions"></div> 
        </div>
        </div>
  )
}

export default Sidebar