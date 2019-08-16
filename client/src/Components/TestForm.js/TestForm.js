import React from "react";
import useForm from "../../Utils/useForm";
import "./form.css";

const TestForm = () => {
  const submitForm = e => {
    e.preventDefault();
    console.log(inputs);
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
  const { inputs, handleInputChange, handleSubmit } = useForm();

  return (
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
          onChange={uploadFile(img)}
        />
        <progress id="uploader" value="0" max="100">0%</progress>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
export default TestForm;
