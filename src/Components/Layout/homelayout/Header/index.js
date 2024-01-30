import './style.css'

function Header() {
    return (
        <header class="header">
            <a href="#" class="logo"><i class="fas fa-heartbeat"></i>AuspexCare</a>
            <nav class ="navbar">
                <a href="#home">Home</a>
                <a href="#service">Services</a>
                <a href="#about">About</a>
                <a href="login.html">Login/Signup</a>
            </nav>
        </header>
    );
}

export default Header;