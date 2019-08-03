import React from "react";
import logo from '../Nav/logo.png';
import { connect } from "react-redux";
import Login from '../login';



const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
       <div>
          <img src={logo} className='App-logo' width="45" height="45" alt='logo' />
       </div>
    <a className="navbar-brand ml-5 font-weight-bold" href="#">Canine Connection</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span>
          <i className="fas fa-bars" style={{ color: '#fff' }} />
        </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
        <li className="nav-item active">
            <a className="nav-link text-uppercase ml-5" href="/">Home&nbsp;<i className="fas fa-home"></i> <span className="sr-only">(current)</span></a>     
        </li>
        <li className="nav-item">
            <a className="nav-link text-uppercase ml-5" href="/postLost">Lost Dogs</a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-uppercase ml-5" href="/postSeen">Seen Dogs</a>
        </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light my- my-sm-0" type="submit">Search </button>
        <Login></Login>
        </form>
    </div>
    </nav>
  );
};

export default connect(state=>({ name: state.users.name}))(Navbar);
