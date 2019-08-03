import React, {useState, useEffect} from "react";
import Form from "../../Components/Form/Form";
import DeleteBtn from "../../Components/DeleteBtn/DeleteBtn";
import imageUrl from '../Content/lost-dog.jpg';
import './SeenPost.css';

const Post = function Post () {

    const [dogBreed, setDogBreed] = useState("");
    const [data, setData] = useState( [] );

    const handleSubmit = event => {
        event.preventDefault();
        const input = {dogBreed: dogBreed };
        const options = {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify(input)
        };
        fetch("http://localhost:3030/api/data", options)
        .then(res => res.json())
        .then(res => setData([...data, res]))
        .catch(err=> console.log("request failed" + err));
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        switch (name) {
          case "dogBreed":
            setDogBreed(value);
            break;
          default:
            break;
        }
    } 


    const deleteDog = id => {
        const options = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        };
        fetch("http://localhost:3030/api/data/" + id, options)
          .then(res => res.json()
          .then(fetchData(data))
          .then(res => console.log(res)))
          .catch(err => {
            console.log("request failed" + err);
          });
      };

  

    const fetchData = async () => {
        const response = await fetch(`http://localhost:3030/api/data`)
        const json = await response.json();
        setData(json);
      };
      
      useEffect( () => { fetchData(data) }, [] );

    return (
      <div className='Seen-page' style={{backgroundImage: `url(${imageUrl})` }}>
        <div className="App-content">
          <Form change={handleInputChange} submit={handleSubmit} />
          <div>
            <h2>Lost Dogs</h2>
            <ul>
              {data.map(item => (
                <li key={item._id} id={item._id}>{item.dogBreed}
                <DeleteBtn onClick={()=> deleteDog(item._id)}/>
                </li>
              ))}
           </ul>
          </div>
          </div>
        </div>
      
    );
};

export default Post;