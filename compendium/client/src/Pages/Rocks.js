import React, { Component } from "react";
/*import DeleteBtn from "../components/DeleteBtn";*/
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Rocks extends Component {
    state = {
        rocks: [],
        name: "",
        quantity: "",
        condition: "",
        description: "",
        image: ""
    };

    componentDidMount() {
        this.loadRocks();
    }

    loadRocks = () => {
        API.getRocks()
            .then(res =>
                this.setState({ rocks: res.data })
            )
            .catch(err => console.log(err));
    };





    render() {
        return (
            <Container fluid>
                <Row>

                    <Col size="md-6 sm-12">
                        <h1>Rocks On My List</h1>
                        {this.state.rocks.length ? (
                            <List>

                                {this.state.rocks.map(rock => (
                                    <ListItem key={rock._id}>
                                        <Link to={"/Rocks/" + rock._id}>
                                            <strong>
                                                {rock.name}
                                            </strong>
                                        </Link>
                                    </ListItem>
                                ))}


                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Rocks;
