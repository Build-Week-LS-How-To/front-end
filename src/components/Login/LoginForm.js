import React from 'react'
import {Form ,Button} from 'reactstrap';

export default function LoginForm() {
    return (
        <div>
            <Form className='form'>
            <input placeholder='user name' type='text' />
            <input placeholder='password' type='text' />
            <Button color="primary">Login!</Button>
            <div className="link"><a href="#">Forgot Password</a></div>
            </Form>
        </div>
    )
}
