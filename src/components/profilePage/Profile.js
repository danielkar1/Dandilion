import React, { Component } from 'react';
import SocialNetLoginButton from './SocialNetLoginButton';
import { inject, observer } from 'mobx-react'

@inject(`MainPostPageStore`, `StartPageStore`)
@observer
class Profile extends Component {
  socialNetworks = () => {
    let networks = [`facebook`, `twitter`, `instagram`, `linkedin`]
    return networks.map((network, index) => {
      return (
        <div key={index}>
          <i className={this.props.MainPostPageStore.socialNetImg[network]} />
          <SocialNetLoginButton network={network} />
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