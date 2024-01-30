import { Link } from 'react-router-dom';
import './style.css'

function Header() {
    return (
        <header class="header">
            <a href="#" class="logo"><i class="fas fa-heartbeat"></i>AuspexCare</a>
            <nav class ="navbar">
                <Link to="#home">Home</Link>
                <Link to="#service">Services</Link>
                <Link to="#about">About</Link>
                <Link to="/login">Login/Signup</Link>
            </nav>
        </header>
    );
}

export default Header;