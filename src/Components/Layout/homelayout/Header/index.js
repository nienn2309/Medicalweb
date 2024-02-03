import { Link } from 'react-router-dom';
import './styleHeader.css'

function Header() {
    return (
        <header class="header">
            <a href="#" class="logo"><i class="fas fa-heartbeat"></i>AuspexCare</a>
            <nav class ="header-navbar">
                <Link to="#home">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="#doctorList">Doctors</Link>
                <Link to="#bookApp">Booking</Link>
                <Link to="/login">Login/Signup</Link>
            </nav>
        </header>
    );
}

export default Header;