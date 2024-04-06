import React from "react"
import chatImage from "../assets/chat.png"
import LoginNavbar from "../Navbar/LoginNavbar.jsx"
import './Login.css'

function Login() {
    return (
    <div>
        <LoginNavbar />
        <div className="formContainer">
            <div className="formWrapper">
                <a href="/" className="title" ><img className="img" src={chatImage} alt="chatImage" />EchoSage</a>
                <span className="login">Login</span>
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="button">Login</button>
                </form>
                <p> Don't have an account? <a href="/Signup">Sign Up</a></p>

            </div>
        </div>
    </div>
    );
}

export default Login;
