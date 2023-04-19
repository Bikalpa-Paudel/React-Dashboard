import "./sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="top">
                <span className="logo">Admin</span>
            </div>
            <hr />
            <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li><DashboardIcon className="icons"/><span>Dashboard</span></li>
                <p className="title">Lists</p>
                <li><PersonOutlinedIcon className="icons"/><span>Users</span></li>
                <li><ProductionQuantityLimitsIcon className="icons"/><span>Proucts</span></li>
                <li><CreditCardIcon className="icons"/><span>Orders</span></li>
                <li><LocalShippingIcon className="icons"/><span>Delivery</span></li>
                <p className="title">Useful</p>
                <li><QueryStatsIcon className="icons"/><span>Stats</span></li>
                <li><NotificationsNoneIcon className="icons"/><span>Notification</span></li>
                <p className="title">System</p>
                <li><SettingsIcon className="icons"/><span>Setting</span></li>
                <p className="title">User</p>
                <li><AccountCircleIcon className="icons"/><span>Profile</span></li>
                <li><LogoutIcon className="icons"/><span>Logout</span></li>
            </ul>
            </div>
            <div className="bottom">
                <div className="theme">THEME</div>
                <div className="theme-container">
                    <div className="light"></div>
                    <div className="dark"></div>
                </div>
            </div>

        </div>
    )
}