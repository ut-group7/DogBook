import React from 'react';

const Login = () => {


    const handleClick = (e) => {
        e.preventDefault()
        console.log('handleClick fired')
        fetch('/auth/google')
    }


    return(
        <div>
            <button className='btn btn-danger' onClick={(e) => handleClick(e)}>Login</button>
        </div>
    )
}

export default Login