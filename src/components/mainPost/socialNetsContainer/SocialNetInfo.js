import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import CurrentPost from '../CurrentPost';

@inject(`MainPostPageStore`)
@observer
class SocialNetInfo extends Component {
  getInfo = () => {
    const currentPost = this.props.MainPostPageStore.currentMainPost
    const socialNetsLoc = this.props.MainPostPageStore.Postlist2[currentPost].SocialNets
    const socialNetsArr = Object.keys(socialNetsLoc)
    return socialNetsArr.map((socialNet, index) => {
      return (
        <div key={index} className="social-analytics-table" id={socialNet}>
          <div> 
            <i className={this.props.MainPostPageStore.socialNetImg[socialNet]}></i>
            </div>
          <div className="ingament-info">Likes: {socialNetsLoc[socialNet].Likes}</div>
          <div className="ingament-info">Shares: {socialNetsLoc[socialNet].Shares}</div>
          <div>Comments: {socialNetsLoc[socialNet].comments.length}</div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="social-colums-container">
        {this.getInfo()}
      </div>
    )
  }
}

export default SocialNetInfo