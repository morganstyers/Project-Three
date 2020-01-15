import Modal from 'react-bootstrap/Modal';
import {Button} from 'reactstrap';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import VerticalLinearStepper from '../Form/stepper'
import React from 'react';
import './addCollection.css';

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
           Add New Collection
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
<VerticalLinearStepper>
  
</VerticalLinearStepper>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  function AddCollection() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <ButtonToolbar>
        <Button id="add" className="w3-hide-medium w3-hide-small" onClick={() => setModalShow(true)}>
     Start New Collection
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ButtonToolbar>
    );
  }
  


  export default AddCollection;