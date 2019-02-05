import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'

@inject(`MainPostPageStore`) 
@observer
class Comments extends Component {
  getComments =() => {
    const currentPost = this.props.MainPostPageStore.currentMainPost
    const socialNetsLoc = this.props.MainPostPageStore.Postlist2[currentPost].SocialNets
    const socialNetsArr = Object.keys(socialNetsLoc)
    console.log(currentPost)
    console.log(socialNetsArr)
  }  
  render() {
    this.getComments()
    return (
      <div className="comments">   
      </div>
    )
  }
}

export default Comments