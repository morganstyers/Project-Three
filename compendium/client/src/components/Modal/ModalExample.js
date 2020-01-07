import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import './style.css'
import AddCollection from "./addCollection";

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
<<<<<<< HEAD:compendium/client/src/components/Modal/ModalExample.js
This will be our input form
<form>
        <p>Enter Category:</p>
      <input
        type='text'
        name='category'
      />
      <p>Enter item:</p>
      <input
        type='text'
        name='item'
      />
      <p>Enter quantity:</p>
      <input
        type='num'
        name='quantity'
      />
      <p>Enter condition:</p>
      <input
        type='text'
        name='condition'
      />
      {/* <select >
        <option value="Excellent">Excellent</option>
        <option value="Good">Good</option>
        <option value="Fair">Fair</option>
        <option value="Poor">Poor</option>
      </select> */}
      <p>Enter description:</p>
      <textarea value={this.state.description} />
      <p>Image Upload:</p>
        <input type="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
          </ModalBody>
=======
         
</ModalBody>
>>>>>>> cb53453e3b76da6e93c34b55e51b11ce92dd38c4:compendium/src/components/Modal/ModalExample.js
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
