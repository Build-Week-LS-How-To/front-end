import React from 'react';

import {
    Form,
    Input,
    FormGroup,
    Button,
    Label,
} from 'reactstrap'
import NewHackStep from './NewHackStep';

const NewHackForm = () => {
    
    return(
        <div>
            <h2>New Life Hack</h2>
            <Form>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" name="title" />
                </FormGroup>

                <FormGroup>
                    <Label for="description">Short Description</Label>
                    <Input type="textarea" name="description" />
                </FormGroup>
                <NewHackStep />
                {/* <Button onClick={addStep}>Add A Step</Button> */}
                <Button block>Submit</Button>
            </Form>
        </div>
    )
}

export default NewHackForm