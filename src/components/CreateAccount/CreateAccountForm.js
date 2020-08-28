import React from 'react'
import { useHistory } from 'react-router-dom'

// REDUX
import { connect } from 'react-redux'
import {
    onFirstNameChange,
    onLastNameChange,
    onEmailChange,
    onUserNameChange,
    onPasswordChange,
    createUser
,
 } from '../../actions/createUser'

// COMPONENTS
import {
    Form,
    FormGroup,
    Input,
    Label,
    Card,
    Button
} from 'reactstrap';



const CreateAccountForm = ({
    values,
    onFirstNameChange,
    onLastNameChange,
    onEmailChange,
    onUserNameChange,
    onPasswordChange,
    createUser,
}) => {

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(values);
        history.push('/login')
    }

    return(
        <Card className="signup-form-card">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input
                        required
                        type="text"
                        name="firstName"
                        value={values.firstName}
                        onChange={ onFirstNameChange }
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input
                        type="text"
                        name="lastName"
                        value={ values.lastName }
                        onChange={ onLastNameChange }
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email Address</Label>
                    <Input
                        required
                        type="email"
                        name="email"
                        value={ values.email }
                        onChange={ onEmailChange }
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="firstName">Username</Label>
                    <Input
                        required
                        type="text"
                        name="username"
                        value={ values.username }
                        onChange={ onUserNameChange }
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        required
                        type="password"
                        name="password"
                        value={ values.password }
                        onChange={ onPasswordChange }
                    />
                </FormGroup>

                <Button block>Sign Up</Button>
            </Form>
        </Card>
    )
}

const mapStateToProps = (state) => {
    console.log(state.createUserReducer.formValues)
    return {
        values: state.createUserReducer.formValues,
    }
}

export default connect(
    mapStateToProps,
    {         
        onFirstNameChange,
        onLastNameChange,
        onEmailChange,
        onUserNameChange,
        onPasswordChange,
        createUser
    }
)(CreateAccountForm)