import React from "react";
import useForm from "../../Utils/useForm";
import Geolocation from '../location';
import "./form.css";

const TestForm = (props) => {
  const submitForm = e => {
    e.preventDefault();
    const location = localStorage.getItem('myLocation')
    inputs.location = location;
    inputs.user = props.userId;
    console.log(inputs);
    const url = localStorage.getItem("img");
    inputs.img = url;
    const options = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(inputs)
    };
    fetch("http://localhost:3030/api/lostDogs", options)
      .then(res => res.json())
      .catch(err => console.log("request failed" + err));

    //relocate window
   window.location.href = "/Lost";
  };
  const { inputs, handleInputChange, handleSubmit, uploadFile } = useForm();

  return (
    <div>
    <form className="submitForm" onSubmit={submitForm}>
      <div>
        <label>Dog Breed</label>
        <input
          type="text"
          name="dogBreed"
          onChange={handleInputChange}
          value={inputs.dogBreed}
          required
        />
        <label>Contact Name</label>
        <input
          type="text"
          name="contactName"
          onChange={handleInputChange}
          value={inputs.contactName}
          required
        />
      </div>
      <div>
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          value={inputs.email}
          required
        />
      </div>
      <div>
        <label>Dog Size</label>
        <input
          type="text"
          name="dogSize"
          onChange={handleInputChange}
          value={inputs.dogSize}
          required
        />
      </div>
      <div>
        <label>Reward</label>
        <input
          type="text"
          name="reward"
          onChange={handleInputChange}
          value={inputs.reward}
          required
        />
      </div>
      <div>
        <label>Additonal Notes</label>
        <input
          type="text"
          name="notes"
          onChange={handleInputChange}
          value={inputs.notes}
          required
        />
      </div>
      <div>
        <label>Dog Color</label>
        <input
          type="text"
          name="dogColor"
          onChange={handleInputChange}
          value={inputs.dogColor}
          required
        />
      </div>
      <div>
        <input
          type="file"
          name="img"
          onChange={uploadFile}
        />
      </div>
      <h2>Mark your pets last seen location below</h2>
      <Geolocation />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};
export default TestForm;
