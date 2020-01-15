import React from "react";
import Image from 'react-bootstrap/Image';
import "./style.css";
import 'typeface-roboto';
import { Button } from 'reactstrap';
import AddCollection from '../Modal/addCollection';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'


function Jumbotron() {
    return (

        <div className="main">
            <header id="header" className="w3-display-container w3-content w3-center">
                <Image id="img" className="w3-image" src="../images/collections.JPG" alt="Me" />
                <div id="box" className="w3-display-middle w3-padding-large w3-border w3-wide w3-text-light-grey w3-center">
                    <h1 className="w3-hide-medium w3-hide-small w3-xxxlarge">COMPENDIUM</h1>
                    <h5 className="w3-hide-large" >COMPENDIUM</h5>
                    <h3 className="w3-hide-medium w3-hide-small">Your collections at your fingertips</h3>
                    <hr/>
                    <br />
                    <h4> See your existing collections or create a new one.</h4>

                        <ButtonToolbar>
                            <Button style={{ margin: 2 }} href='/Collections'>View Your Collections</Button>
                            <AddCollection id="button2"  id="cc" buttonLabel="Create Collection" />
                        </ButtonToolbar>

                    </div>
            </header>
        </div>
            );
        }
        
        export default Jumbotron;
