import React from 'react';
import Login from '../../Components/LoginButton/login';
import MyPosts from '../../Components/MyPosts/myPosts';
import LoginBox from '../../Components/LoginBox/LoginBox';
import TestForm from '../../Components/TestForm.js/TestForm';
require('./profile.css');

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: null,
            response: null,
            isLoading: true
        }
    };

    authTest = () => {
        fetch('http://localhost:3030/api/auth/testauth', {credentials: 'include', mode: 'cors'})
        .then(res => res.json())
        .then(res => {res ? console.log(res) : console.log('no res')
            this.setState({isLoading: false, response: res})
        });
    };

    componentDidMount(){
        this.setState({response: null})
        this.authTest();
    };

    responseHandler() {
        if(this.state.response.error){
            return(<LoginBox/>)
        }else{
            return(
                <div className="col profile">
                    <img className="avatar" src={'https://png.pngtree.com/svg/20161230/fc951b209c.svg'} alt="avatar"></img>
                    <h1>{`Welcome, ${this.state.response.name}!`}</h1>
                    <a className="logout" href='http://localhost:3030/api/auth/logout'>Logout</a>
                    <TestForm userId={this.state.response._id}></TestForm>
                    <div className="myPosts">
                        <h1>MY POSTS</h1>
                        <MyPosts userId={this.state.response._id} />
                    </div>
                    
                </div>
            )
        }
    };
    
    
    render(){

        return(
            <div>
                { this.state.isLoading ? <h1>Loading</h1> : null }
                { this.state.response === null ? <Login></Login> : this.responseHandler() }
            </div>
        )
    }
}

export default Profile;