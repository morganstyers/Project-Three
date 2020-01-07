import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import './style.css';

class CoinsModal extends React.Component {
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
                    <ModalHeader toggle={this.toggle}>
                        Coins</ModalHeader>
                    <ModalBody>

                    </ModalBody>
                    <ModalFooter>
                    <Button id="submit" color="primary" onClick={this.toggle}>
                            Submit </Button>
                        <Button id="close" color="secondary" onClick={this.toggle}>
                            Close </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default CoinsModal;
