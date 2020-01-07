import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import './style.css'

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
      <Button color="warning" onClick={this.toggle}>
        {this.props.buttonLabel}
      </Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Create One</ModalHeader>
        <ModalBody>
         
</ModalBody>
          <ModalFooter>
            <Button id="submit" color="warning" onClick={this.toggle}>
              Add to Collection
            </Button>{" "}

            <Button id="close" color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        </div>
    );
  }
}

export default ModalExample;
