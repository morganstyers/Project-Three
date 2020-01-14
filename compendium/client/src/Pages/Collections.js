import React from "react";
import Typography from '@material-ui/core/Typography';
import AddMineral from "../components/Modal/addMineralModal";
import RocksModal from "../components/Modal/RocksModal";
import CoinsModal from "../components/Modal/CoinsModal";
import AddCoinModal from '../components/Modal/addCoinModal';


import { Link } from "react-router-dom";

import './hStyle.css';
import {
    Card, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";



const collections = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">Compendium</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/Home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/Collections">Collections<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/About">About Us </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Account">Account </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <br />
            <h2>Your Collections</h2>
            <span>
                <CardGroup>
                    <Card>
                        <CardImg top width="100%" src="../images/limestone.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Rocks</CardTitle>
                            <CardSubtitle>Here's all my rocks</CardSubtitle>
                            <CardText>These are some really cool rocks.</CardText>
                            <ButtonToolbar>
                            <AddMineral id="rocks" buttonLabel="Add Rock" />
                            <br />
                            <RocksModal buttonLabel="Gallery"></RocksModal>
                            </ButtonToolbar>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="../images/rocks3.jpg" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>
Minerals                        </CardTitle>
                            <CardSubtitle>Here's all my minerals</CardSubtitle>
                            <CardText>Here's all my minerals.  What are minerals anyway?</CardText>
                            <ButtonToolbar>
                            <AddMineral id="rocks" buttonLabel="Add Mineral" />
                            <br />
                            <RocksModal buttonLabel="Gallery"></RocksModal>
                            </ButtonToolbar>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="../images/2centfront.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle> 
Coins                            </CardTitle>
                            <CardSubtitle>Here's all my coins</CardSubtitle>
                            <CardText>Here's some old money.  I don't know if it still works.</CardText>
                            <ButtonToolbar>
                                <AddCoinModal id="coins" buttonLabel="Add Coin" />
                                <CoinsModal buttonLabel="Gallery"></CoinsModal></ButtonToolbar>
                        </CardBody>
                    </Card>
                </CardGroup>
             
            </span>
            <br />
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

export default collections;
