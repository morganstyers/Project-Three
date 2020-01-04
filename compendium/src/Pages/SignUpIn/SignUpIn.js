import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Input from "../../components/Input";
import Button from "../../components/Button";
import API from "../../utils/API";
//import { DataList, DataListItem } from "../../components/RecipeList";
import { Container, Row, Col } from "../../components/Grid";

class SignUpIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.email || !this.state.password) {
      alert("Fill out your email addresss and password please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.email}`
      );
    } else {
      alert(`Hello ${this.state.email}`);
    }

    this.setState({
      email: "",
      password: ""
    });
  };
  render() {
    return (
      <div>
        {/* <Nav /> */}
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="email"
                        value={this.state.handleInputChange}
                        type="email"
                        onChange={this.handleInputChange}
                        placeholder="email address"
                      />
                      <Input
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        type="password"
                        placeholder="password"
                      />
                    </Col>
                    
                  </Row>
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Login
                      </Button>

                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Register
                      </Button>
                </Container>
              </form>
            </Col>
          </Row>
          {/* <Row>
            <Col size="xs-12">
              {!this.state.data.length ? (
                <h1 className="text-center">No data to Display</h1>
              ) : (
                <DataList>
                  {this.state.data.map(recipe => {
                    return (
                      <DataListItem
                        key={recipe.title}
                        title={recipe.title}
                        href={recipe.href}
                        ingredients={recipe.ingredients}
                        thumbnail={recipe.thumbnail}
                      />
                    );
                  })}
                </DataList>
              )}
            </Col>
          </Row> */}
        </Container>
      </div>
    );
  }
}

export default SignUpIn;
