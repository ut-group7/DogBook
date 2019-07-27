import React, {useState, useEffect} from "react";
import Form from "../../Components/Form/Form";


const Post = function Post () {

    const [dogBreed, setDogBreed] = useState("");

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
        .then(res => console.log(res))
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
    
    return(

        <Form
        change={handleInputChange}
        submit={handleSubmit}
         />
    )
};

export default Post;