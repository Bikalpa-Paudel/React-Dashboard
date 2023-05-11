import './widget.css'

export default function Widget(props){

    return(
        <div className="widget">
            <div className="left">
                <span className='wid-title'>{props.title}</span>
                <span className='wid-number'>{props.number}</span>
                <span className='view'>{props.view}</span>
            </div>
            <div className="right">
                <span className='wid-per'>{props.percent}</span>
                {props.icon}
            </div>
        </div>
    )
}