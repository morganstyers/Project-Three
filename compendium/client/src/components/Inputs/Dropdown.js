import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
function SelectACollection( ) {
    return (
            <FormGroup>
                <Form >
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                    <option placeholder='select'></option>
                        <option className="Art">Art</option>
                        <option className='Species'>Species</option>
                        <option className="Music">Music</option>
                        <option className="Books">Books</option>
                        <option className="Inventory">Inventory</option>
                    </Input>
                </Form>
            </FormGroup>
    )
}
export default SelectACollection;