import React from 'react'

// COMPONENTS
import CreateAccountForm from './CreateAccountForm'
import CreateAccountInformation from './CreateAccountInformation'
import {
    Container,
    Row,
    Col
} from 'reactstrap'



const CreateAccount = () => {

    return(
        <Container className="signup-container">
            <Row>
                <Col className="signup-information-container">
                    <CreateAccountInformation />
                </Col>

                <Col className="signup-form-container">
                    <CreateAccountForm />
                </Col>
            </Row>
        </Container>
    )

}

export default CreateAccount