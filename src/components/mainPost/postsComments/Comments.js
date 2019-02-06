import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'

@inject(`MainPostPageStore`) 
@observer
class Comments extends Component {
  getComments =() => {
    const currentPost = this.props.MainPostPageStore.currentMainPost
    const socialNetsLoc = this.props.MainPostPageStore.Postlist2[currentPost].SocialNets
    // const socialNetsArr = Object.keys(socialNetsLoc)
    for (let socialNet in socialNetsLoc) {
      let socialNetArr =[]
      socialNetArr.push(socialNet)
      console.log(socialNetArr)
      let commentsLoc = socialNetsLoc[socialNet].comments
      for (let comment of commentsLoc) {
        let commentsArr = []
        commentsArr.push(comment)
        console.log(commentsArr)
        // console.log(socialNetsLoc[socialNet].comments[comment].text)
      }
    }
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