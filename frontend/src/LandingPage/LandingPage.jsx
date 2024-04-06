import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import './LandingPage.css';
import LandingPageNavbar from '../Navbar/LandingPageNavbar.jsx'


function LandingPage() {
    

    return (
    <div>
        <LandingPageNavbar />
            {/* Jumbotron */}
            <section className="jumbotron">
                <div className="container">
                    <h1>Welcome to EchoSage</h1>
                    <p>Your Cool Virtual Assistant</p>
                    <Button className='button' component={Link} to='/Login' color='inherit' >Try EchoSage</Button>
                </div>
            </section>

{/* Features Section */}
<section id="features" className="features">
    <div className="container">
        <h2>Features</h2>
            <div className="row">
                <div className="card feature-item">
                    <div className="card-body">
                        <h3 className="card-title">24/7 Availability</h3>
                        <p className="card-text">Get assistance anytime, anywhere.</p>
                    </div>
                </div>
                <div className="card feature-item">
                    <div className="card-body">
                        <h3 className="card-title">Intelligent Responses</h3>
                        <p className="card-text">Receive personalized and accurate responses.</p>
                    </div>
                </div>
                <div className="card feature-item">
                    <div className="card-body">
                        <h3 className="card-title">Southern Accent</h3>
                        <p className="card-text">EchoSage is here to talk in a cool southern accent.</p>
                    </div>
                </div>
                <div className="card feature-item">
                    <div className="card-body">
                        <h3 className="card-title">Entertaining Conversations</h3>
                        <p className="card-text">Engage in entertaining conversations with EchoSage.</p>
                    </div>
                </div>
                <div className="card feature-item">
                    <div className="card-body">
                        <h3 className="card-title">Personalized Assistance</h3>
                        <p className="card-text">Receive tailored assistance according to your needs.</p>
                    </div>
                </div>
                <div className="card feature-item">
                    <div className="card-body">
                        <h3 className="card-title">Efficient Task Management</h3>
                        <p className="card-text">Efficiently manage your tasks with EchoSage's help.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


            {/* About Section */}
            <section id="about" className="about">
                <div className="container">
                    <h2>About EchoSage</h2>
                    <div className="about-section">
                    <p>Hey there! EchoSage is like a really helpful friend who uses super cool technology to help you get stuff done faster and easier. He's not just any old helper though - he's got this awesome southern accent that makes talking to him a blast!</p>
                    <p>So, whether you need to plan your day or tackle big projects, EchoSage has your back. Plus, he's great at telling jokes and sharing interesting stories to keep things fun while you work.</p>
                    <p>At EchoSage, we believe that being productive doesn't have to be boring. That's why we've made EchoSage so charming and funny. He'll make your work feel like a breeze!</p>
                    <p>Come join the many happy people who've already teamed up with EchoSage. Let him show you how much easier and more enjoyable work can be - with a touch of southern flair!</p>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer>
                <div className="container">
                    <p>&copy; 2024 EchoSage. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;