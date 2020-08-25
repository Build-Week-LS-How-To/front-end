import React from 'react';

// STYLES
import '../../styles/Login.scss'

// COMPONENTS
import LoginForm from './LoginForm';
import {
    Container,
    Row,
    Col
} from 'reactstrap'

// IMAGES
import Logo from '../../images/HowToLogoMain_White.svg'



const Login = () => {
 
    return(
       <Container className="login-container">
            <img className="login-logo" src={ Logo } alt="logo" />
            <LoginForm />
        </Container>
    )

}

export default Login