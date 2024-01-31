import React from 'react' 
import LSstyle from './LoginSignUp.module.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div class={LSstyle.loginpage}>
            <div class={LSstyle.wrapper}>
                <div class={LSstyle.loginbox}>
                    <div class={LSstyle.loginheader}>
                        <span>Login</span>
                    </div>
                    <div class={LSstyle.inputbox}>
                        <input type="text" placeholder="Username" required></input>
                        <i class="bx bx-user icon"></i>
                    </div>
                    <div class={LSstyle.inputbox}>
                        <input type="password" placeholder="Password" required></input>
                        <i class="bx bx-lock-alt icon"></i>
                    </div>
                    <button type="submit" class={LSstyle.loginbtn}>Login</button>
                    <div class={LSstyle.register}>
                        <span>Don't have an account yet? <Link to="/signup">Signup</Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login