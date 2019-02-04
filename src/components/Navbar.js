import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import { observer, inject } from 'mobx-react';


@inject(`StartPageStore`)
@observer
class Navbar extends Component {
  locationChange = e => {
    this.props.StartPageStore.updateLocation(e)
  }
  render() {
    return (
      <div className="navbar">
        <Link to="/profile">Profile</Link>
        <Link to="/startPage" onClick={this.locationChange}>Log-in</Link>
      </div>
    );
  }
}

export default Navbar