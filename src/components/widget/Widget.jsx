import './widget.css'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import data from './widgetData.js'

export default function Widget(){
    // const card =data.map((item)=>{
    //     return(
    //     <span className="widget-card">
    //         <div className="wid-icon">{item.icon}</div>
    //         <div className="wid-text">{item.stats}</div>
    //     </span>
    //     )
    // })
    return(
        <div className="widget">
            <div className="left">
                <span className='wid-title'>title</span>
                <span className='wid-number'>100</span>
                <span className='view'>view</span>
            </div>
            <div className="right">
                <span className='wid-per'>-20%</span>
                <PersonOutlineOutlinedIcon className='wid-icon'/>
            </div>
        </div>
    )
}