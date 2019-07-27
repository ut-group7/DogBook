import React, {useState, useEffect} from "react";
import Form from "../../Components/Form/Form";


const SeenPost = function SeenPost () {

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
        fetch("http://localhost:3030/api/seen/data", options)
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

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await fetch(
    //         "http://localhost:3030/api/data"
    //         )
    //     const json = await result.json();
    //     console.log(json);
    //     setData(json);
    //     };
    //     fetchData();
    // }, []);

    const fetchData = async () => {
        const response = await fetch(`http://localhost:3030/api/seen/data`)
        const json = await response.json();
        setData(json);
      };
      
      useEffect( () => { fetchData(data) }, [ data ] );

    return (
      <div>
        <Form change={handleInputChange} submit={handleSubmit} />
        <div>
          <h2>Seen Dogs</h2>
          <ul>
            {data.map(item => (
              <li>{item.dogBreed}</li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default SeenPost;