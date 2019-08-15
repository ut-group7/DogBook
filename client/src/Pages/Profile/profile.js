import React from 'react';
import Login from '../../Components/login';
import Post from '../Post/Post';
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
            return(<Login></Login>)
        }else{
            return(
                <div className="col profile">
                    <img className="avatar" src={'https://png.pngtree.com/svg/20161230/fc951b209c.svg'} alt="avatar"></img>
                    <h1>{`Welcome, ${this.state.response.name}!`}</h1>
                    <a className="logout" href='http://localhost:3030/api/auth/logout'>Logout</a>
                    <div className="row myPosts">
                        <Post userId={this.state.response._id}></Post>
                        <h1>My Posts</h1> {/* this will need to be a component that renders any posting made by user*/}
                    </div>
                    
                </div>
            )
        }
    };
    
    
    render(){

        return(
            <div>
                {/*<button className="btn btn-primary" onClick={this.authTest}>Test Auth</button>*/}
                { this.state.isLoading ? <h1>Loading</h1> : null }
                { this.state.response === null ? <Login></Login> : this.responseHandler() }
            </div>
        )
    }
}

export default Profile;