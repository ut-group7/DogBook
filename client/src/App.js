import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./Components/Nav/Navbar";
import Footer from "./Components/Nav/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Main from "./Pages/Main/Main";
import Main from "./Pages/Main/Main";
//import Post from "./Pages/Post/Post";
import SeenPost from "./Pages/Post/SeenPost";
import Wrapper from "./Components/Wrapper/Wrapper";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LostDogs from "./Pages/LostDogs/LostDogs";
import Profile from "./Pages/Profile/profile";
import PostPage from "./Pages/Post/PostPage";
import TestForm from "./Components/TestForm.js/TestForm";

import {connect} from 'react-redux';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Wrapper>
          <Route exact path="/" component={Main} />
          <Route exact path="/postLost" component={PostPage} />
          <Route exact path="/postSeen" component={SeenPost} />
          <Route exact path="/Lost" component={LostDogs} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/testForm" component={TestForm} />
          </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

const mapStateToProps = ({users}) => ({
  users,
});

export default connect(mapStateToProps)(App);
