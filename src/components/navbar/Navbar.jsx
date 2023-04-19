import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="nav-container">
                <div className="search">
                    <input type="text" className="search-bar" placeholder='Search' />
                    <SearchIcon className='search-icon'/>
                </div>
                <div className="nav-items">
                    <NotificationsNoneIcon className='nav-icon'/>
                    <ChatBubbleOutlineIcon className='nav-icon'/>
                    DN
                    pro
                    <SettingsIcon className='nav-icon'/>

                </div>
            </div>
        </div>
    )
}