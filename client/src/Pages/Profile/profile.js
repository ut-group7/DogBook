import React from 'react';

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: null,
            response: null,
            isLoading: false
        }
    };

    loadPosts = () => {
        fetch('http://localhost:3030/api/auth/testauth', {credentials: 'include', mode: 'cors'})
        .then(res => res.json())
        .then(res => {res ? console.log(res) : console.log('no res')
            this.setState({data: 'post1', response: res})
        });
    };
    
    
    
    render(){
        return(
            <div>
                <button className="btn btn-primary" onClick={this.loadPosts}>Hey THERE</button>
                { this.state.response === null ? <h1>Loading</h1> : <h1>{this.state.response._id}</h1>}
            </div>
        )
    }
}

export default Profile;