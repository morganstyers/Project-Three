import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
function SelectACollection( ) {
    return (
            <FormGroup>
                <Form >
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                    <option placeholder='select'></option>
                        <option className="art">Art</option>
                        <option className='species'>Species</option>
                        <option className="music">Music</option>
                        <option className="books">Books</option>
                        <option className="inventory">Inventory</option>
                    </Input>
                </Form>
            </FormGroup>
    )
}
export default SelectACollection;