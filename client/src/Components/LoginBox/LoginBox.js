import React from 'react';
import Login from '../LoginButton/login';
require('./loginBox.css');

const LoginBox = () => {

    
    
    
    
    return (
        <div className="container-fluid loginWrapper">
            <div className="col loginBox">
                <h1>Welcome, Login with Google!</h1>
                <Login></Login>
            </div>
        </div>

    )


}

export default LoginBox;