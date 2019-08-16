import React from 'react';

const Login = () => {

    return(
        <div>
            <a type='button' className="btn btn-success" href='/api/auth/google'>login</a>
            {/*<a type='button' className="btn btn-primary" href='/api/auth/testauth'>access</a>*/}
        </div>
    )
}

export default Login