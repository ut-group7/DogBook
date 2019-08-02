import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Post from "./Pages/Post/Post";
import SeenPost from "./Pages/Post/SeenPost";
import Wrapper from "./Components/Wrapper/Wrapper";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Nav/Navbar";
import Footer from "./Components/Nav/Footer";

import {connect} from 'react-redux';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Wrapper>
          <Route exact path="/" component={Main} />
          <Route exact path="/postLost" component={Post} />
          <Route exact path="/postSeen" component={SeenPost} />
          </Wrapper>
        <br />
         
        <br />
        <Footer />
      </div>
    </Router>
  );
}

const mapStateToProps = ({users}) => ({
  users,
});

export default connect(mapStateToProps)(App);
