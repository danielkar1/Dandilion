import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'



class Navbar extends Component {
    render() {
      return (
        <div className="navbar">
            <Link to="/post">Post</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/startPage">Log-in</Link>
        </div>
      );
    }
  }
  
  export default Navbar