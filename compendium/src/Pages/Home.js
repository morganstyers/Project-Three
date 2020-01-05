import React from "react";
import Jumbotron from "../components/Jumbotron/index"
import Input from "../components/Input/index";
import './hStyle.css';
import { Divider } from "@material-ui/core";
import ModalExample from "../components/Modal/ModalExample";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom"

const Home = () => {

    const styles = {
        fontFamily: "sans-serif",
        textAlign: "center"
      };
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
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Manage Collections</a>
          <a class="dropdown-item" href="#">Account Permissions</a>
          <a class="dropdown-item" href="#">Delete Account</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
        <Jumbotron />
        <h2>You have no collections. Would you like to create a one?</h2>
        <br/>
      
      <div style={styles}>
      <ModalExample buttonLabel="Create Collection" />
      </div>
      <Input />
      <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
      Compendium
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
        </div>
    )
}

export default Home;