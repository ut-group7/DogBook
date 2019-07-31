import React, {useState, useEffect} from "react";
import Form from "../../Components/Form/Form";


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

    // const deleteDog = event => {
    //     event.preventDefault();
    //     const input = this.id;
    //     fetch("http://localhost:3030/api/data/:id")
    // }

  

    const fetchData = async () => {
        const response = await fetch(`http://localhost:3030/api/data`)
        const json = await response.json();
        setData(json);
      };
      
      useEffect( () => { fetchData(data) }, [] );

    return (
      <div>
          
        <Form change={handleInputChange} submit={handleSubmit} />
        <div>
          <h2>Lost Dogs</h2>
          <ul>
            {data.map(item => (
              <li key={item._id} id={item._id}>{item.dogBreed}<button>Remove {item.dogBreed} </button></li>
            ))}
          </ul>
          
        </div>
      </div>
      
    );
};

export default Post;