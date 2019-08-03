import React from "react";
import { connect } from "react-redux";
import { users } from "../../reducers/users";
import actions from "../../actions";
import { getRandomDog } from "../../store";

const Form = props => {
  return (
    <form>
      <div>
        <label>Dog Breed</label>
        <input
          type="text"
          placeholder="Dog breed or physical description"
          name="dogBreed"
          value={props.dogBreed}
          onChange={props.change}
          size="40"
          required
        />
      </div>
      <div>
        <label>Contact Name</label>
        <input
          type="text"
          placeholder="Your Name"
          name="contactName"
          value={props.contactName}
          onChange={props.change}
          required
        />
      </div>
      <div>
        <label>Your Phone Number</label>
        <input
          type="tel"
          placeholder="Your Phone Number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          name="contactNumber"
          value={props.contactNumber}
          onChange={props.change}
          required
        />
      </div>
      <div>
        <label>Dog Weight/Size</label>
        <select
          placeholder="Dog Size"
          name="dogSize"
          value={props.dogSize}
          onChange={props.change}
        >
          <option>0-20lbs</option>
          <option>20-40lbs</option>
          <option>40-60lbs</option>
          <option>60-90lbs</option>
        </select>
      </div>
      <div>
        <label>Dog Color</label>
        <input 
        type="text"
        placeholder="Dog Color"
        name="dogColor"
        value={props.dogColor}
        change={props.change}
        />
      </div>
      <div>
        <label>Reward</label>
        <input
          type="text"
          placeholder="Reward (optional)"
          name="reward"
          value={props.reward}
          onChange={props.change}
        />
      </div>
      <div>
        <label>Notes</label>
        <input
          type="text"
          placeholder="Additional Notes"
          name="notes"
          value={props.notes}
          onChange={props.change}
        />
      </div>
      <button type="submit" onClick={props.submit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
