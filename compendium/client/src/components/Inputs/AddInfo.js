import React from 'react';
import {Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import TextField from '@material-ui/core/TextField';

function AddInfo() {
return(
    <Form>
<FormGroup>
    <Label >How many of these ones do ya have?</Label>
    <br/>
    <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
</FormGroup>
<FormGroup>
<Label for="exampleFile">Additional Information</Label>
<Input type="test" name="test" id="exampleText" />
<FormText color="muted">
You can say anything you want! I don't care! Do a swear if you really need to!
</FormText>
</FormGroup>
</Form>
)}
export default AddInfo;