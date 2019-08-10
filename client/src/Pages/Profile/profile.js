import React from 'react';
import Login from '../../Components/login';

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
                <div>
                    <h1>{this.state.response._id}</h1>
                    <a type='button' className="btn btn-danger" href='http://localhost:3030/api/auth/logout'>logout</a>
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