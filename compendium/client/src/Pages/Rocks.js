import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Button from "../components/Button";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";



class Rocks extends Component {
  // Setting our component's initial state
  state = {
    rocks: [],
    category: "",
    name: "",
    quantity: "",
    condition: "",
    description: "",
    image: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadRocks();
  }

  // Loads all books  and sets them to this.state.books
  loadRocks = () => {
    API.getRocks()
      .then(res =>
        this.setState({ rocks: res.data, category: "", name: "", quantity: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteRock = id => {
    API.deleteRock(id)
      .then(res => this.loadRocks())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.quantity) {
      API.saveRock({
        category: this.state.category,
        name: this.state.name,
        quantity: this.state.quantity
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
              <h1>Collections</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="Name"
                placeholder="Name (required)"
              />
              <Input
                value={this.state.quantity}
                onChange={this.handleInputChange}
                name="quantity"
                placeholder="Quantity (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (Optional)"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.quantity)}
                onClick={this.handleFormSubmit}
              >
                Submit Collections
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            {/* <Jumbotron>
              <h1>Collections List</h1>
            </Jumbotron> */}
            {this.state.rocks.length ? (
              <List>
                {this.state.rocks.map(rocks => {
                  return (
                    <ListItem key={rocks._id}>
                      <a href={"/rocks/" + rocks._id}>
                        <strong>
                          {rocks.name} by {rocks.quantity}
                        </strong>
                      </a>
                      <Button onClick={() => this.deleteRock(rocks._id)} />
                    </ListItem>
                  );
                })}
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
