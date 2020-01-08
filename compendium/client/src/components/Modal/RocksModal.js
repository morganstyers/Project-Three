import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import RockGallery from '../Carousel/RocksGallery'// import './style.css'

class RocksModal extends React.Component {
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
      <Button style={{marginLeft: 15}} color="warning" onClick={this.toggle}>
        {this.props.buttonLabel}
      </Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Minerals</ModalHeader>
        <ModalBody>
<RockGallery/>
          </ModalBody>
          <ModalFooter>
            <Button id="close" color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        </div>
    );
  }
}

export default RocksModal;
