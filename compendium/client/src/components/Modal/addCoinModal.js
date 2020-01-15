import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React from 'react';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Coin
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup> */}
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
          {/* <FormGroup>
            <Label for="exampleSelectMulti">Select Multiple</Label>
            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup> */}
          <FormGroup>
            <Label for="exampleText">Additional Comments</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              Choose an image to upload
        </FormText>
         

          </FormGroup>
      
                <FormGroup tag="fieldset">
                    <legend>Condition</legend>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                           Excellent
          </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            Very Good
          </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                        <Label check>
                            <Input type="radio" name="radio1" disabled />{' '}
                           Good
          </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                        <Label check>
                            <Input type="radio" name="radio1" disabled />{' '}
                           Fair
          </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                        <Label check>
                            <Input type="radio" name="radio1" disabled />{' '}
                           Poor
          </Label>
          
                    </FormGroup>
                </FormGroup>
              
            
          <Button>Submit</Button>

        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function AddCoinModel() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <Button style={{ marginLeft: 100 }} variant="warning" onClick={() => setModalShow(true)}>
        Add New Coin
        </Button>


      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}



export default AddCoinModel;