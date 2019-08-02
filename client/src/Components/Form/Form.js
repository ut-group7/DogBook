import React from "react";
import { connect } from "react-redux";
import {users} from "../../reducers/users"
import actions from "../../actions";
import { getRandomDog } from "../../store";

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
