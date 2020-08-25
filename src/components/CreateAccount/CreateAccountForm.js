import React from 'react'

import {
    Form,
    FormGroup,
    Input,
    Label,
    Card,
    Button
} from 'reactstrap';



const CreateAccountForm = () => {

    return(
        <Card className="signup-form-card">
            <Form>
                <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input type="text" name="firstName" />
                </FormGroup>

                <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input type="text" name="lastName" />
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email Address</Label>
                    <Input type="email" name="email" />
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" />
                </FormGroup>

                <Button block>Sign Up</Button>
            </Form>
        </Card>
    )

}

export default CreateAccountForm