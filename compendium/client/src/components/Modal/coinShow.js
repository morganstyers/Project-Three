import React from "react";
import { Button, Card, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
//import Image from 'react-bootstrap/Image';// import './style.css';

class CoinCollection extends React.Component {
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
                <Button style={{marginLeft: 15}} onClick={this.toggle}>
                    {this.props.buttonLabel}
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>
                        Coins</ModalHeader>
                    <ModalBody>
                    <Card.Body>
                        </Card.Body>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default CoinCollection;
