import React from 'react';
import { Button } from "reactstrap";
import { Image } from "react-bootstrap";

import './about.css';

function About() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">Compendium</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/Home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Collections">Collections</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/About">About Us</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/Account" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Account        </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="page-wrapper">
                <div id='aside'>
                    <h1> About Us</h1>
                    <h4 id="break">__________________________</h4>
                    <br />

                    <p id='bio'> Compendium is an app designed to allow the user to organize, update, itemize and otherwise keep track of their collections. No matter what someone collects, it is often extraordinarily hard for them to organize and display it in a way that allows for sharing or documentation. We have designed a simple, user friendly solution.

In the future, we aim to add social media aspects, e-commerce and mobile-phone app aspects that allow the user to sell, share or send their passions right from their devices. </p>
                </div>
                <div id='article'>
                    <div id="author">
                        <p id='ugh'>Compendium- (noun) </p><p id='ugh'>a collection of concise but detailed information about a particular subject, especially in a book or other publication</p>
                    </div>

                    <div id="image">
                        <img src="../images/col2.jpg" />
                    </div>
                    <div id="text"><div>
                        <div className="w3-container w3-padding-64 w3-center" id="team">
                            <h2>OUR TEAM</h2>
                        
                            <div id="t" className="w3-quarter">
                                <Image src="../images/rach.jpg" />
                                <h6>Rachel Mitchell</h6>
                                <a href="https://github.com/racheldoran"><ion-icon name="logo-github"></ion-icon></a>

                                </div>
                         

                     
                            <div id="t" className="w3-quarter">
                                <Image src="../images/bry.jpg" />
                                <h6>Brian Yeager</h6>
                                <a href="https://github.com/byeager999"><ion-icon name="logo-github"></ion-icon></a>

                            </div>
                            <div id="tm" className="w3-quarter">
                                <Image src="../images/mosi.jpg" />
                                <h6>Morgan Styers</h6>
                                <a href="https://github.com/morganstyers"><ion-icon name="logo-github"></ion-icon></a>
                            </div>
                       
                            </div>
                        <div>
                            <div className="w3-container w3-padding-64 w3-center" id="contact">
                                <h2 id='ct'>CONTACT US</h2>
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

                            </form>

                            <Button className="send-link" href="/sent">Send </Button>

                        </div>
                    </div>
                </div>
</div>
            </div>
        </div>
    )
}
export default About;