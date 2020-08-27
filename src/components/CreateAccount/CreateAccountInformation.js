import React from 'react';

// STYLES
import '../../styles/createAccount.scss';

// IMAGES
import LightBulb from '../../images/LightBulb_White.svg'

const CreateAccountInformation = () => {

    return(
        <div>
            <h1>Get Started</h1>
            <p>Create your account by filling out the form. Once you have created an account you can write and submit your very own articles</p>
            <img src={ LightBulb } className="signup-logo" alt="lightbulb icon with brain" />
        </div>
    )
}

export default CreateAccountInformation