import React, { Component } from 'react';
import io from 'socket.io-client'
import  { observer, inject } from 'mobx-react';
import TwitterButton from './TwitterButton';


const API_URL = 'http://127.0.0.1:8080'
const socket = io(API_URL)

@observer
class Profile extends Component {
 
  render() {
    
    return (
      <div className="profile">
        <TwitterButton />
      </div>
    );
  }
}

export default Profile;