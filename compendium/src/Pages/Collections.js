import React from "react";
import Typography from '@material-ui/core/Typography';
import RocksModal from "../components/Modal/RocksModal";
import CoinsModal from "../components/Modal/CoinsModal";
import { Link } from "react-router-dom";
import './hStyle.css';

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
            <br/>
            <h2>these will be our collections</h2>
            <span>
                <RocksModal id="rocks" buttonLabel="Rocks" />
                <br />
                <CoinsModal id="coins" buttonLabel="Coins" />
            </span>
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
