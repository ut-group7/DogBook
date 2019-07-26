import React from "react";

const Form = props => {
  return (
    <form>
      <input
        type="text"
        placeholder="Dog breed or physical description"
        name="dogBreed"
        value={props.dogBreed}
        onChange={props.change}
      />
      <button type="submit" onClick={props.submit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
