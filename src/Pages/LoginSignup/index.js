import React from 'react' 
import './LoginSignUp.css'

const Login = () => {
    return (
        <div class="login-page">
            <div class="wrapper">
                <div class="login-box">
                    <div class="login-header">
                        <span>Login</span>
                    </div>
                    <div class="input-box">
                        <input type="text" placeholder="Username" required></input>
                        <i class="bx bx-user icon"></i>
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="Password" required></input>
                        <i class="bx bx-lock-alt icon"></i>
                    </div>
                    <button type="submit" class="login-btn">Login</button>
                    <div class="register">
                        <span>Don't have an account yet? <a href="signup.html">Sign up here</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login