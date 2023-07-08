import './navbar.scss'
import { Link } from "react-router-dom"
const NavBar = () => {
    return (
        <div className="navbar" style={{
            display: 'flex',
            justifyContent: 'center',
            height: '100%',
            width: '20%'
        }}>
            <ul>
                <li><Link to="/">Dashbord</Link></li>
                <li><Link to="/question">Question</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/login">LogIn</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>

        </div >
    )
}

export default NavBar