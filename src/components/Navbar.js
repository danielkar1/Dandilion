import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import { observer, inject } from 'mobx-react';

@inject(`StartPageStore`)
@observer
class Navbar extends Component {
  locationChange = e => {
    console.log(e.targt)
    this.props.StartPageStore.updateLocation(e)
  }
  render() {
    return (
      <div className="navbar">
        <Link to="/profile">Profile</Link>
        <Link to="/login" onClick={this.locationChange}>Log-in</Link>
        <Link to="/signup" onClick={this.locationChange}>Sign-up</Link>
      </div>
    );
  }
}

export default Navbar