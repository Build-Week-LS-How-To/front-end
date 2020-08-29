import React from 'react'
//STYLES
import '../../styles/edithack.scss'
import {
    Form,
    Input,
    FormGroup,
    Button,
    Label,
} from 'reactstrap'

export default function EditHackForm() {
    return (
        <div>
            <Form>
                <FormGroup>
                    <Label>Title</Label>
                    <Input className='editinput' type="text" name="title" />
                </FormGroup>
                <FormGroup>
                    <Label>Description</Label>
                    <Input className='editinput' type="text" name="description" />
                </FormGroup>
                <Button>Save</Button>
            </Form>
        </div>
    )
}
