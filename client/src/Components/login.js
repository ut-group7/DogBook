import React from 'react';
require('./login.css');

const Login = () => {

    return(
        <div>
            <a className="button" href='http://localhost:3030/api/auth/google'>Login</a>
        </div>
    )
}

export default Login