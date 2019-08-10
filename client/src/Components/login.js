import React from 'react';

const Login = () => {

    return(
        <div>
            <a type='button' className="btn btn-success" href='http://localhost:3030/api/auth/google'>login</a>
            {/*<a type='button' className="btn btn-primary" href='http://localhost:3030/api/auth/testauth'>access</a>*/}
        </div>
    )
}

export default Login