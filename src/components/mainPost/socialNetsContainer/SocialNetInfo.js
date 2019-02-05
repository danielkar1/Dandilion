import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'

@inject(`MainPostPageStore`) 
@observer
class SocialNetInfo extends Component {
    
    getInfo =() => {
      const currentPost = this.props.MainPostPageStore.currentMainPost
      const socialNetsLoc = this.props.MainPostPageStore.Postlist2[currentPost].SocialNets
      const socialNetsArr = Object.keys(socialNetsLoc)
  
      return socialNetsArr.map((socialNet, index)=> {
        return (
          <div key={index} className={socialNet}>
            <i className={this.props.MainPostPageStore.socialNetImg[socialNet]}></i>
            <div className="likes">Likes: {socialNetsLoc[socialNet].Likes}</div>
            <div className="shares">Shares: {socialNetsLoc[socialNet].Shares}</div>
            <div>Comments: { socialNetsLoc[socialNet].comments.length}</div>
          </div>
        )
      })
    }
    render() {
      return (
        <div className="social-net-info">
            {this.getInfo()}
        </div>
      )
    }
  }

  export default SocialNetInfo