import React, { useState } from "react";
import Form from "../../Components/Form/Form";
import Geolocation from '../../Components/location';
import imageUrl from "../Content/lost-dog.jpg";
import "./SeenPost.css";

const Post = function Post(props) {
  const [dogBreed, setDogBreed] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [dogSize, setDogSize] = useState("");
  const [reward, setReward] = useState("");
  const [notes, setNotes] = useState("");
  const [dogColor, setDogColor] = useState("");
  const [location, setLocation] = useState([]);

  const [data, setData] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    const input = {
      dogBreed: dogBreed,
      contactName: contactName,
      contactNumber: contactNumber,
      dogSize: dogSize,
      reward: reward,
      notes: notes,
      dogColor: dogColor,
      user: props.userId,
      location: JSON.parse(localStorage.getItem('myLocation'))
    };
    const options = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(input)
    };
    fetch("http://localhost:3030/api/lostDogs", options)
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
      case "dogColor":
        setDogColor(value);
        break;
      case "reward":
        setReward(value);
        break;
      case "notes":
        setNotes(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="Lost-page">
      <div className="App-content">
        <h2>Post Lost Dog</h2>
        <Form change={handleInputChange} submit={handleSubmit} />
        <Geolocation />
        <a href="/Lost">Back to lost dogs</a>
      </div>
    </div>
  );
};

export default Post;
