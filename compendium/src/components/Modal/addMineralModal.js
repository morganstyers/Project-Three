import React from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './style.css';
class AddModal extends React.Component {
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
            <ModalHeader toggle={this.toggle}>New Mineral</ModalHeader>
            <ModalBody>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelectMulti">Select Multiple</Label>
                    <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
        </FormText>
                </FormGroup>
                <FormGroup tag="fieldset">
                    <legend>Radio Buttons</legend>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            Option one is this and that—be sure to include why it's great
          </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            Option two can be something else and selecting it will deselect option one
          </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                        <Label check>
                            <Input type="radio" name="radio1" disabled />{' '}
                            Option three is disabled
          </Label>
                    </FormGroup>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Check me out
        </Label>
                </FormGroup>
                <Button>Submit</Button>                <Button>Close</Button>

            </Form>
</ModalBody>
</Modal>
</div>
        )
    }
}
export default AddModal;