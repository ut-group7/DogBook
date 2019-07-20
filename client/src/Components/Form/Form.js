import React, { useState } from "react";

const Form = function Form() {
  const [name, setname] = useState("");

  const handleTaskSubmit = event => {
    event.preventDefault();
    // axios call to api
    alert(`${name}`);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setname(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <form>
        <p>Dog Information: {name}</p>
        <input
          type="text"
          placeholder="Dog"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <button onClick={event => handleTaskSubmit(event)}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
