import './widget.css'
import data from './widgetData.js'

export default function Widget(){
    const card =data.map((item)=>{
        return(
        <span className="widget-card">
            hiea
        </span>
        )
    })
    console.log(card)
    return(
        <div className="widget-container">
            {card}
        </div>
    )
}