import React from "react";
import logo from '../Nav/logo.png';
import { connect } from "react-redux";
import Login from '../LoginButton/login';



const Navbar = props => {

  const divStyle = {
    width: '30%',
    height: '1px',
    paddingTop: '1px'
  }

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
            <a className="nav-link text-uppercase ml-5" href="/Lost">Lost Dogs</a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-uppercase ml-5" href="/postSeen">Seen Dogs</a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-uppercase ml-5" href="/profile">Profile</a>
        </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
        </form>
        <div style={divStyle}></div>
    </div>
    </nav>
  );
};

export default connect(state=>({ name: state.users.name}))(Navbar);
