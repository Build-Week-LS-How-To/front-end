import React from 'react'
import {
    Form,
    Button,
    Card,
    Input
} from 'reactstrap';

export default function LoginForm() {
    return (
        <Card className="loginForm-card">
            <Form>
                <Input placeholder='user name' type='text' />
                <Input placeholder='password' type='text' />
                <Button block color="primary">Login!</Button>
                <div className="link"><a href="#">Forgot Password</a></div>
            </Form>
        </Card>
    )
}
