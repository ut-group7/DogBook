import React, { useEffect } from 'react';
import GoogleButton from '../../assets/btn_google_signin_dark_normal_web.png';
require('./login.css');

const Login = () => {
        
    return(
        <div>
            <a className="google" href='/api/auth/google'><img src={GoogleButton}></img></a>  
        </div>
    )
}

export default Login