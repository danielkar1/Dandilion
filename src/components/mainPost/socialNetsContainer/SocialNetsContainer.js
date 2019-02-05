import React, { Component } from 'react';
import { observer } from 'mobx-react'
import SocialNetsImg from './SocialNetsImg'
import SocialNetInfo from './SocialNetInfo'

@observer
class SocialNetsContainer extends Component {
    
    render() {
      return (
        <div className="social-nets-container">
            <SocialNetsImg />
            <SocialNetInfo />
        </div>
      )
    }
  }

  export default SocialNetsContainer