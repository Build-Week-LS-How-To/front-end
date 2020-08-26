import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axiosWithAuth from '../../utils/axiosWithAuth';

import {
    Form,
    Button,
    Card,
    Input
} from 'reactstrap';

const LoginForm = (props) => {

    let history = useHistory();

    const [login, setLogin] = useState ({
        username: '',
        password: ''
    })

    const handleChanges = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/users/login', login)
            .then( res => {
                console.log(res)
                localStorage.setItem('token', res.data.token)
                history.push('/dashboard')
            })
            .catch( err => {
                console.error('There was an error logging in ', err.message)
            })

            setLogin({
                username: '',
                password: ''
            })
    }

    return (
        <Card className="loginForm-card">
            <Form onSubmit={ handleLogin }
>
                <Input
                    placeholder='Username'
                    type='text'
                    name='username'
                    value={ login.username }
                    onChange={ handleChanges }
                />
                <Input
                    placeholder='Password'
                    type='password'
                    name='password'
                    value={ login.password }
                    onChange={ handleChanges }
                />
                <Button
                    block
                >Login!</Button>

                <div className="link"><a href="#">Create An Account</a></div>
            </Form>
        </Card>
    )
}

export default LoginForm;
