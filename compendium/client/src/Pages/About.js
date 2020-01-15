import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom"
import "./about.css";

const aboutUs = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Compendium</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/Home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Collections">Collections</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/About">About Us <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Account">Account </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <br />
            <div className="w3-display-container w3-animate-opacity">
                <img id="mainimg" src="./images/col2.jpg" alt="boat" />
         <div id="info">

            <div id="work" className="w3-quarter">
                <h2>Our Work</h2>
<p>Compendium- (noun) a collection of concise but detailed information about a particular subject, especially in a book or other publication.

Compendium is an app designed to allow the user to organize, update, itemize and otherwise keep track of their collections. No matter what someone collects, it is often extraordinarily hard for them to organize and display it in a way that allows for sharing or documentation. We have designed a simple, user friendly solution.

In the future, we aim to add social media aspects, e-commerce and mobile-phone app aspects that allow the user to sell, share or send their passions right from their devices.

<br/>
Compendium is a React App from head to toe, styled with CSS and reactstrap, hosted on Heroku, served by Node.js and datalogged with MongoDB. Compendium was made by:
</p>
</div>

            <div className="w3-container w3-padding-64 w3-center" id="team">
                <h2>OUR TEAM</h2>
                <p>Meet the team - our office rats:</p>
            </div>
         
            <div className="w3-row">
                <br />
                <div id="t" className="w3-quarter">
                    <img id="team" src="" alt="Boss" className="w3-circle w3-hover-opacity" />
                    <h3>Brian Yeager</h3>
                    <p>Web Developer, Back End</p>
                </div>

                <div id="t" className="w3-quarter">
                    <img id="team" src="" alt="Boss" className="w3-circle w3-hover-opacity" />
                    <h3>Morgan Styers</h3>
                    <p>Web Developer, Front End</p>
                </div>

                <div id="t" className="w3-quarter">
                    <img src="" alt="Boss" className="w3-circle w3-hover-opacity" />
                    <h3>Rachel Mitchell</h3>
                    <p>Web Developer, Back End</p>
                </div>
            </div>
            <hr />
            <div className="w3-container w3-padding-64 w3-theme-l5" >
                <div id="contact" className="w3-row">
                    <div className="w3-col m5">
                        <div className="w3-padding-16"><span className="w3-xlarge w3-border-teal w3-bottombar">Contact Us</span></div>
                        <h3>Address</h3>
                        <p>Swing by for a cup of coffee, or whatever.</p>
                        <p><i className="fa fa-map-marker w3-text-teal w3-xlarge"></i>  Charlotte, NC</p>
                        <p><i className="fa fa-phone w3-text-teal w3-xlarge"></i>  +00 1515151515</p>
                        <p><i className="fa fa-envelope-o w3-text-teal w3-xlarge"></i>  compendium@gmail.com</p>
                    </div>
                </div>
         
                <form id="addy" className="w3-container w3-card-4 w3-padding-16 w3-white" action="/action_page.php" target="_blank">
                    <div className="w3-section">
                        <label>Name</label>
                        <input className="w3-input" type="text" name="Name" required />
                    </div>
                    <div className="w3-section">
                        <label>Email</label>
                        <input className="w3-input" type="text" name="Email" required />
                    </div>
                    <div className="w3-section">
                        <label>Message</label>
                        <input className="w3-input" type="text" name="Message" required />    

                    </div>
                    <ul className="button">
                            <a className="send-link" href="/sent">Send </a>
                        </ul>
                </form>
</div>
            <img src="" className="w3-image w3-greyscale-min" />

            <footer className="w3-container w3-padding-32 w3-theme-d1 w3-center">
                <h4>Follow Us</h4>
                <a className="w3-button w3-large w3-teal" href="javascript:void(0)" title="Facebook"><i className="fa fa-facebook"></i></a>
                <a className="w3-button w3-large w3-teal" href="javascript:void(0)" title="Twitter"><i className="fa fa-twitter"></i></a>
                <a className="w3-button w3-large w3-teal" href="javascript:void(0)" title="Google +"><i className="fa fa-google-plus"></i></a>
                <a className="w3-button w3-large w3-teal" href="javascript:void(0)" title="Google +"><i className="fa fa-instagram"></i></a>
                <a className="w3-button w3-large w3-teal w3-hide-small" href="javascript:void(0)" title="Linkedin"><i className="fa fa-linkedin"></i></a>

                <div className="w3-tooltip w3-right">
                    <span className="w3-text w3-padding w3-teal w3-hide-small">Go To Top</span>
                    <a className="w3-button w3-theme" href="#myPage"><span className="w3-xlarge">
                        <i className="fa fa-chevron-circle-up"></i></span></a>
                </div>
            </footer>
            </div>
            </div>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit">
                    Compendium
                                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    );
};

export default aboutUs;