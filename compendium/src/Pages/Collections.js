import React from "react";
import Typography from '@material-ui/core/Typography';
import RocksModal from "../components/Modal/RocksModal";
import CoinsModal from "../components/Modal/CoinsModal";
import AddModal from '../components/Modal/addModal'
import { Link } from "react-router-dom";
import './hStyle.css';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';

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
            <h2>these will be our collections</h2>
            <span>
                <CardGroup>
                    <Card>
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="../images/rocks3.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Minerals</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                            <AddModal id="rocks" buttonLabel="Add Mineral" />
                            <RocksModal buttonLabel="View Collection"></RocksModal>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="../images/2centfront.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Coins</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                            <AddModal id="coins" buttonLabel="Add Coin" />
                            <CoinsModal buttonLabel="View Collection"></CoinsModal>

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