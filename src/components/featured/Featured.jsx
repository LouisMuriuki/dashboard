import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"


function Featured() {
  return (
    <div className='featured '>
        <div className="top">
            <h1 className="title">Total Revenue
            <MoreVertIcon fontsize="small" />
            </h1>
        </div>
        <div className="bottom">
            <div className="featuredChart">
<CircularProgressbar value={70} text={"70%"}strokewidth={5}/>
            </div>
        </div>

    </div>
  )
}

export default Featured
