import React from 'react';
import Post from './Post';
import LoginBox from '../../Components/LoginBox/LoginBox';

class PostPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            response: null,
            isLoading: true
        }
    }
    
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
            return(<LoginBox />)
        }else{
            const userProp = this.state.response._id ? this.state.response._id : 'none';
            return(
                <Post userId={userProp}></Post>
            )
        }
    };
    
    
    render(){

        return(
            <div>
                { this.state.isLoading ? <h1>Loading</h1> : null }
                { this.state.response === null ? <LoginBox /> : this.responseHandler() }
            </div>
        )
    }
}

export default PostPage;