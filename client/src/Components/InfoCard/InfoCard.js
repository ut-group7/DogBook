import  React, { useState, useEffect } from 'react';
import  Card  from 'react-bootstrap/Card';

const InfoCard = function() {
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    const fetchData = async () => {
      setisLoading(true);
      const response = await fetch("/api/lostDogs");
      const json = await response.json();
      setData(json);
      setisLoading(false);
    };
  
    useEffect(() => {
      fetchData(data);
    }, []);



    const rowStyle = {
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'scroll',
    };

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
    <div style={rowStyle}>
    {data.map(post => {
        return (
            <Card style={{ minWidth: '18rem', marginLeft: '2rem', marginRight: '2rem', marginBottom: '1rem', display: 'flex' }}>
                <Card.Body>
                    <Card.Img variant='top' style={{ height: '200px', width: '200px', display: 'flex' }} src={post.img}></Card.Img>
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
        )})}
    </div>
    
    )
} 

export default InfoCard;