import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';

class MyPosts extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            response: null
        }
    }

    fetchPosts = () => {
        fetch(`/api/user/${this.props.userId}`)
        .then(res => res.json())
        .then(res => {
            this.setState({response: res})
            console.log(res)
            //console.log(this.state.response[0])
        })
        .catch(err => console.log(err))
    }

    componentWillMount(){
        this.fetchPosts()
    }
    
    
    
    render(){

        return (
            <div>
                {this.state.response === null ? null : this.state.response[0].posts.map(post => {
                    return (
                        <div>
                            <Card style={{ width: '18rem', marginLeft: '2rem', marginRight: '2rem', display: 'flex', marginBottom: '20px' }}>
                                <Card.Body>
                                    <Card.Title>Breed: {post.dogBreed}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Color: {post.dogColor}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">Size: {post.dogSize}</Card.Subtitle>
                                    <Card.Text>
                                        Notes: {post.notes}
                                    </Card.Text>
                                    <Card.Text>
                                        Reward: {post.reward}
                                    </Card.Text>
                                    <Card.Text>
                                        Contact: {post.email}
                                    </Card.Text>                                    
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </div>
        )

    }



}






export default MyPosts;
