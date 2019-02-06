import React, { Component } from 'react';
import SocialNetLoginButton from './SocialNetLoginButton';
import { inject, observer } from 'mobx-react'

@inject(`MainPostPageStore`)
@observer
class Profile extends Component {
  socialNetworks=()=>{
    let networks = [`facebook`,`twitter`, `instagram`, `linkdin`]
    return networks.map((network, index)=>{
      return(
        <div key={index}>
          <SocialNetLoginButton network={network}/>
          <i className={this.props.MainPostPageStore.socialNetImg[network]}></i>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="profile">
        <div>{this.socialNetworks()}</div>
      </div>
    );
  }
}

export default Profile;