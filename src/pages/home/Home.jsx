import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

export default function Home(){
    return(
        <div className="home">
            <Sidebar />
            <div className="main-container">
                <Navbar />
                <hr />
            </div>
        </div>
    )
}