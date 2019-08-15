import React, { useState, useEffect } from "react";

class MyPosts extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            response: null
        }
    }

    fetchPosts = () => {
        fetch(`http://localhost:3030/api/user/${this.props.userId}`)
        .then(res => res.json())
        .then(res => {
            this.setState({response: res})
            console.log(res)
            console.log(this.state.response[0])})
        .catch(err => console.log(err))
    }

    componentWillMount(){
        this.fetchPosts()
    }
    
    
    
    render(){

        return (
            <div>
                <h1>data will go here</h1>
                {this.state.response === null ? null : this.state.response[0].posts.map(post => {
                    return (
                        <div>
                            <h2>{post.dogBreed}</h2>
                            <h2>{post.reward}</h2>
                            <h2>{post.notes}</h2>
                        </div>
                    )
                })}
            </div>
        )

    }



}






export default MyPosts;
