import React from "react"
import chatImage from "../assets/chat.png"
import SignupNavbar from "../Navbar/SignupNavbar.jsx"
import './Signup.css'

function Signup() {
    return (
    <div>
        <SignupNavbar />
        <div className="formContainer">
            <div className="formWrapper">
                <a href="/" className="title"><img className="img" src={chatImage} alt="chatImage" />EchoSage</a>
                <span className="signup">Sign Up</span>

                <form>
                    <input type="name" placeholder="User Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="button">Sign Up</button>
                </form>
                <p> Already have an account? <a href="/Login">Login</a></p>
            </div>
        </div>
    </div>
    );
}

export default Signup;
