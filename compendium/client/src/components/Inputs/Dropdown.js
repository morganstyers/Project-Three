import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import TextField from '@material-ui/core/TextField';

function SelectACollection() {
    return (
        <FormGroup>
            <Form >
            <Input type="name" name="specimenName" id="specimenName" placeholder="Tortilla foods" />
            </Form>
            </FormGroup >
    )
}
export default SelectACollection;