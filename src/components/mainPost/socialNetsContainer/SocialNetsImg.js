import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'

@inject(`MainPostPageStore`) 
@observer
class SocialNetsImg extends Component {
    
    render() {
      return (
        <div className="social-net-img">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
        </div>
      )
    }
  }

  export default SocialNetsImg