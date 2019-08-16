import React from 'react';
import Login from '../LoginButton/login';
import GoogleButton from '../../assets/btn_google_signin_dark_normal_web.png';
require('./loginBox.css');

const LoginBox = () => {

    
    
    
    
    return (
        <div className="container-fluid loginWrapper">
            <div className="col loginBox">
                <h1>Welcome,</h1>
                <h3> Sign in with Google below to make a post</h3>
                <div className="divider"></div>
                <Login></Login>
                <a><img src={GoogleButton}></img></a>
            </div>
        </div>

    )


}

export default LoginBox;