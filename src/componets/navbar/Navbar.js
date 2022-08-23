import './Navbar.css'
import avatar from '../../assets/avatar.png'
import { FaHome } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';

const Navbar = ({ sidebarOpen, openSidebar }) => {
return (
    <nav className="navbar">
        <div className="nav-icon" onClick={() => openSidebar()}>
            <FaHome />
        </div>

            <div className="navbar-left">
                <a href="#">Produtos</a>
                <a href="#">Usuários</a>
                <a href="#" className="active-link">Admin</a>
            </div>
            <div className="navbar-right">
            <a href="#">
            <FaSearch style={{ color: 'white' }} />
            </a>

            <a href="#">
            <FaClock 
            style={{ color: 'white' , }} />
            </a>

            <a href="#">
                <img width="30" src={avatar} alt="avatar" />
            </a>
            </div>  
    </nav>
)
}

export default Navbar;