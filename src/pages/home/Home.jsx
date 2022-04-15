import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'
import Widget from '../../components/Widgets/Widget'
import Featured from '../../components/featured/Featured'
import Charts from '../../components/charts/Charts'
import Table from '../../components/table/Table'

function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured/>
          <Charts aspect={2/1} title="last 6 Months (Revenue)"/>
        </div>
        <div className="listContainer">
        <div className="listContainer">
          Latest Transcations
        </div>
        <Table/>
        </div>
      </div>
    </div>
  )
}

export default Home