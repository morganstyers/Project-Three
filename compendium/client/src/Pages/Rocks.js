import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/FormTwo";

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
        this.setState({ rocks: res.data, name: "", quantity: "",condition: "", description: "", image: "" })
      )
      .catch(err => console.log(err));
  };

  deleteRock = id => {
    API.deleteRock(id)
      .then(res => this.loadRocks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name) {
      API.saveRock({
        name: this.state.name,
        description: this.state.description
      })
        .then(res => this.loadRocks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>The Rocks ?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="name (required)"
              />
              {/* <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              /> */}
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.name)}
                onClick={this.handleFormSubmit}
              >
                Submit Item
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Rocks On My List</h1>
            </Jumbotron>
            {this.state.rocks.length ? (
              <List>
                {this.state.rocks.map(rock => (
                  <ListItem key={rock._id}>
                    <Link to={"/Rocks/" + rock._id}>
                      <strong>
                        {rock.name} 
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteRock(rock._id)} />
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
