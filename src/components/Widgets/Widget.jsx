import React, { useEffect, useState } from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../../firebase"
function Widget({ type }) {
  const [amount,setAmount]=useState(null)
  const [diff,setDiff]=useState(null)
  let data;


  switch (type) {
    case "user":
      data = {
        title: 'USERS',
        isMoney: false,
        link: "see all users",
        icon:( <PersonOutlineIcon 
        className="icon"
        style={{
          color:"crimson",
          backgroundColor:"rgba(255,0,0,0.2)",
        }} />)
      }
      break;
      case "order":
        data = {
          title: 'ORDERS',
          isMoney: false,
          link: "view all orders",
          icon: (<ShoppingCartIcon
             className="icon"
             style={{
              color:"goldenrod",
              backgroundColor:"rgba(218,165,32,0.2)",
            }}
              />)
        }
        break;
        case "earning":
          data = {
            title: 'EARNINGS',
            isMoney: true,
            link: "view net earnings ",
            icon: (<MonetizationOnIcon
             className="icon"
             style={{
              color:"green",
              backgroundColor:"rgba(0,128,0,0.2)",
            }}
              />)
          }
          break;
          case "balance":
            data = {
              title: 'BALANCE',
              isMoney: true,
              link: "see details",
              icon: (<AccountBalanceWalletIcon 
              className="icon" 
              style={{
                color:"purple",
                backgroundColor:"rgba(128, 0, 128, 0.2)",
              }}
              />
              )
            }
            break;
      default:
        break;  
  }
  useEffect(()=>{
    const fetch=async()=>{
      const today=new Date()
      const lastMonth=new Date(new Date().setMonth(today.getMonth()-1))
      const prevMonth= new Date(new Date().setMonth(today.getMonth()-2))

      const userRef = collection(db, "users");

const lastMonthQuery = query(userRef, where("timeStamp", "<=", today), where("timeStamp", ">",lastMonth));

const prevMonthQuery = query(userRef, where("timeStamp", "<=", lastMonth), where("timeStamp", ">",prevMonth));

      const lastMonthData=await getDocs(lastMonthQuery)
      const prevMonthData=await getDocs(prevMonthQuery)

      setAmount(lastMonthData.docs.length)
      setDiff((lastMonthData.docs.length-prevMonthData.docs.length)/(prevMonthData.docs.length)*100)
    }
    fetch()
  })

  return (
    <div className='widget'>
      <div className="left">
        <span className='title'>{data.title}</span>
        <span className='counter'>
          {data.isMoney && "$"} {amount}
        </span>
        <span className='link'> {data.link} </span>
      </div>
      <div className="right">
        <div className='percentage positive'>
          <KeyboardArrowUpIcon />
         {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget