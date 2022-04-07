import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Featured() {
  return (
    <div className='featured '>
      <div className="top">
        <h1 className="title">Total Revenue
        </h1>
        <MoreVertIcon fontsize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokewidth={5} />
        </div>
        <p className="title">Total</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">
            Target
            </div>
            <div className="itemResult negative">
            <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">34.9K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">
           Last Week
            </div>
            <div className="itemResult positive">
            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">54.9K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">
            Last Month
            </div>
            <div className="itemResult positive">
            <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">334.9K</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Featured
