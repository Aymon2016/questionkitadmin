import logo from '../../../assets/logo.jpeg'
import { Link } from "react-router-dom"
import "./logoBar.scss"
const LogoBar = () => {
    return (
        <div className="logobar">
            <div className="logo">
                <img src={logo} alt="logo.png" />
            </div>
            <div className="name">Question Kit</div>
            <div className="btn"><Link to="/logout">Logout</Link></div>
            {/* <div className="btn"><Link to="/login">Sign Out</Link></div> */}
        </div>
    )
}

export default LogoBar