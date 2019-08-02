import React, { useState } from "react";
import Form from "../../Components/Form/Form";


const Post = function Post() {
  const [dogBreed, setDogBreed] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [dogSize, setDogSize] = useState("");


  const [data, setData] = useState([]);


  const handleSubmit = event => {
    event.preventDefault();
    const input = { dogBreed: dogBreed, contactName: contactName, contactNumber: contactNumber, dogSize: dogSize };
    const options = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(input)
    };
    fetch("http://localhost:3030/api/data", options)
      .then(res => res.json())
      .then(res => setData([...data, res]))
      .catch(err => console.log("request failed" + err));
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case "dogBreed":
        setDogBreed(value);
        break;
      case "contactName":
        setContactName(value);
        break;
        case "contactNumber":
        setContactNumber(value);
        break;
        case "dogSize":
        setDogSize(value);
        break;
      default:
        break;
    }
  };




  return (
    <div>
      <div>
        <h2>Lost Dogs</h2>
        <Form change={handleInputChange} submit={handleSubmit} /> 
        <a href="/Lost">Back to lost dogs</a>
      </div>
    </div>
  );
};

export default Post;
