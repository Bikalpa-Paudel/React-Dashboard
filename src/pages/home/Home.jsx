import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import { useState } from "react";


export default function Home(){
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
            </div>
        </div>
    )
}