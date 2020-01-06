import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom"
import Bio from '../components/Card/bio';

const aboutUs = () => {
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
                        <li class="nav-item">
                            <a class="nav-link" href="/Collections">Collections</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/About">About Us <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Account">Account </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <br/>
            <h2>We are compendium or whatever</h2>
            <hr/>
            <Bio/>
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