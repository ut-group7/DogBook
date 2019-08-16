import React, { useState, useEffect } from "react";
import DeleteBtn from "../../Components/DeleteBtn/DeleteBtn";
import Moment from "react-moment";
import "./LostDogs.css";

const LostDogs = function Post() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("/api/lostDogs");
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    fetchData(data);
  }, []);

  const deleteDog = id => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("/api/lostDogs/" + id, options)
      .then(res =>
        res
          .json()
          .then(fetchData(data))
          .then(res => console.log(res))
      )
      .catch(err => {
        console.log("request failed" + err);
      });
  };
  return (
    <div className="container">
      <a className="postLink" href="/postLost">
        Post Lost Dog
      </a>
      {data.map(item => (
        <table key={item._id} className="dogTable">
          <thead>
            <th>Post date:</th>
            <th>
              <Moment format="YYYY/MM/DD">{item.createdAt}</Moment>
            </th>
          </thead>
          <tbody>
            <tr>
              <div className="styleRow">
                <th>Dog Breed: </th>
                <td>{item.dogBreed}</td>
              </div>
              <div className="styleRow">
                <th>Contact Name: </th>
                <td>{item.contactName}</td>
              </div>

              <div className="styleRow">
                <th>Contact Number: </th>
                <td>{item.contactNumber}</td>
              </div>

              <div className="styleRow">
                <th>Approximate Dog Size: </th>
                <td>{item.dogSize}</td>
              </div>

              <div className="styleRow">
                <th>Dog Color: </th>
                <td>{item.dogColor}</td>
              </div>

              <div className="styleRow">
                <th>Reward: </th>
                <td>{item.reward}</td>
              </div>

              <div className="styleRow">
                <th>Notes: </th>
                <td>{item.notes}</td>
              </div>
            </tr>
          </tbody>
          {/* <DeleteBtn key={item._id} onClick={() => deleteDog(item._id)} /> */}
        </table>
      ))}
    </div>
  );
};

export default LostDogs;
