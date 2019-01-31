import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TwitterButton from './TwitterButton';

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