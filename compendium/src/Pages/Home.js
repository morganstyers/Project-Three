import React from "react";
import Jumbotron from "../components/Jumbotron/index"
import Input from "../components/ItemForm/index"
import { Divider } from "@material-ui/core";
const Home = () => {
    return (
        <div>
        <Jumbotron />
        <h2>Here is where we can enter in our collections</h2>
        <Input />
        </div>
    )
}

export default Home;