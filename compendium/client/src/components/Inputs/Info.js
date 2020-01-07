import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React from 'react';
function CollectionInfo() {
    return (
        <Form>
            <FormGroup>
                <p>What should we call your first specimen?</p>
                <Label for="specimenName">Name</Label>
                <Input type="name" name="specimenName" id="specimenName" placeholder="Tacos" />
            </FormGroup>
            <FormGroup>
                <p>Add a photo!</p>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                </FormText>
                <FormGroup>
                    <p>Where'd ya find it?</p>
                    <Label for="specimenName">Location</Label>
                    <Input type="name" name="specimenName" id="specimenName" placeholder="The Moon" />
                </FormGroup>
                <FormGroup>
                    <p>Is it super rare or just to you?</p>
                    <Label for="specimenName">Rarity</Label>
                    <Input type="name" name="specimenName" id="specimenName" placeholder="Hella Rare" />
                </FormGroup>
                <FormGroup tag="fieldset">

                    <Label for="condition">Condition</Label>
                    <FormGroup tag="fieldset">
                        <legend><p>What kind of condition is it in?</p></legend>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Excellent            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                Very Good          </Label>
                        </FormGroup>
                        <FormGroup check >
                            <Label check>
                                <Input type="radio" name="radio1" disabled />{' '}
                                Good          </Label>
                        </FormGroup>
                        <FormGroup check >
                            <Label check>
                                <Input type="radio" name="radio1" disabled />{' '}
                                Fair          </Label>
                        </FormGroup>
                        <FormGroup check >
                            <Label check>
                                <Input type="radio" name="radio1" disabled />{' '}
                                Poor          </Label>
                        </FormGroup>
                    </FormGroup>

                </FormGroup>
            </FormGroup>

        </Form>
    )
}
export default CollectionInfo;