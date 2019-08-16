import React from "react";
import Post from "./Post";
import Login from "../../Components/login";
import TestForm from "../../Components/TestForm.js/TestForm";

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
      isLoading: true
    };
  }

  authTest = () => {
    fetch("/api/auth/testauth", {
      credentials: "include",
      mode: "cors"
    })
      .then(res => res.json())
      .then(res => {
        res ? console.log(res) : console.log("no res");
        this.setState({ isLoading: false, response: res });
      });
  };

  componentDidMount() {
    this.setState({ response: null });
    this.authTest();
  }

  responseHandler() {
    if (this.state.response.error) {
      return <Login />;
    } else {
      const userProp = this.state.response._id
        ? this.state.response._id
        : "none";
      return (
        // <Post userId={userProp}></Post>
        <TestForm userId={userProp} />
      );
    }
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? <h1>Loading</h1> : null}
        {this.state.response === null ? <Login /> : this.responseHandler()}
      </div>
    );
  }
}

export default PostPage;
