import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import axiosWithAuth from '../../utils/axiosWithAuth';

import {
    Form,
    Button,
    Card,
    Input
} from 'reactstrap';

const LoginForm = () => {

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

    let history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/users/login', login)
            .then( res => {
                localStorage.setItem('token', res.data.token)
                history.push('/dashboard')
                window.location.reload()
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
                    required
                />
                <Input
                    placeholder='Password'
                    type='password'
                    name='password'
                    value={ login.password }
                    onChange={ handleChanges }
                    required
                />
                <Button
                    block
                    type="submit"
                >Login!</Button>

                <div className="link">
                    <Link to="/create-account">Create An Account</Link>
                </div>

            </Form>
        </Card>
    )
}

export default LoginForm;
