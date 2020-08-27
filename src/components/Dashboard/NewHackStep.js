import React from 'react';

import {
    Input,
    FormGroup,
    Button,
    Label,
    FormText
} from 'reactstrap'

const NewHackStep = () => {

    return(
        <FormGroup className="stepTwo">
            <Label for="step2">Step 2</Label>
            <Input type="textarea" name="step2" />

            <Label for="image">Upload Image</Label>
            <Input type="file" name="image" />
            <FormText color="muted">
                Add an image to this step!
            </FormText>
        </FormGroup>
    )
}

export default NewHackStep
