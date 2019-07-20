import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Post from "./Pages/Post/Post";
import Wrapper from "./Components/Wrapper/Wrapper";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
          <Wrapper>
          <Route exact path="/" component={Main} />
          <Route exact path="/postLost" component={Post} />
          </Wrapper>
      </div>
    </Router>
  );
}

export default App;
