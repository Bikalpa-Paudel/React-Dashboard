import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import "./home.css";
import { useState } from "react";
import data from './widgetData.js'
import Chart from "../../components/chart/Chart";
import Graph from "../../components/graph/Graph";
import Transaction from "../../components/transaction/Transaction";

export default function Home(){
    //widget data fetching
    const widget = data.map(items =>{
        return <Widget title={items.title} 
        number={items.number} 
        percent={items.percent} 
        icon={items.icon} 
        view={items.view}/>
    })

    const [theme, setTheme] = useState(true)
    function toggleLight(){
        setTheme(true)
    }
    function toggleDark(){
        setTheme(false)
    }
    return(
        <div className="home"
        style={{
            backgroundColor: theme ? 'white' : '#111111',
            color: theme? 'black' : '#F0FFFF'
          }}
    
        >
            <Sidebar toggleDark={toggleDark} toggleLight={toggleLight}/>
            <div className="main-container">
                <Navbar />
                <hr />
            <div className="widgets">
                {widget}
            </div>
            <div className="charts">
                <Chart />
                <Graph />
            </div>
            <div className="transaction">
                <Transaction />
            </div>
            </div>
        </div>
    )
}