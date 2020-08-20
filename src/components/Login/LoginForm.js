import React from 'react'

export default function LoginForm() {
    return (
        <div>
            <form>
            <input placeholder='user name' type='text' />
            <input placeholder='password' type='text' />
            <button>Login</button>
            <p>Forgot Password</p> | <p>Create Account</p>
            </form>
        </div>
    )
}
