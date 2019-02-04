import React, { Component } from 'react';
import { observer } from 'mobx-react';
import SocialNetLoginButton from './SocialNetLoginButton';

@observer
class Profile extends Component {
  socialNetworks=()=>{
    let networks = [`facebook`,`twitter`]
    return networks.map(network=>{
      return(
        <SocialNetLoginButton network={network}/>
      )
    })
  }
  render() {
    return (
      <div className="profile">
        {this.socialNetworks()}
      </div>
    );
  }
}

export default Profile;