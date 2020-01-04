import React from "react";
import Jumbotron from "../components/Jumbotron/index"
import Input from "../components/Input/index"
import { Divider } from "@material-ui/core";
import { DataList, DataListItem } from "./components/RecipeList";

const Home = () => {
    return (
        <div>
            <RecipeList />
        <Jumbotron />
        <h2>Here is where we can enter in our collections</h2>
        <Input />
        </div>

        
    )
}

export default Home;