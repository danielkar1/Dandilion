import React, { Component } from 'react';
import { observer } from 'mobx-react'
import SocialNetsImg from './SocialNetsImg'

@observer
class SocialNetsContainer extends Component {
    
    render() {
      return (
        <div className="social-nets-container">
            <SocialNetsImg />
        </div>
      )
    }
  }

  export default SocialNetsContainer