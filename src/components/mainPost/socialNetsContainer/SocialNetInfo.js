import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'

@inject(`MainPostPageStore`) 
@observer
class SocialNetInfo extends Component {
    // getInfo =() => {
    //    const socialData = Object.keys(this.props.MainPostPageStore.Postlist2)
      //  .map((socialnet, index) => {
      //     return (
      //       <div key={index}>
      //         <div>Likes: {</div>
      //       </div>
      //     )
        // })
    // }
    getInfo =() => {
      const currentPost = this.props.MainPostPageStore.currentMainPost
      const socialNets = Object.keys(this.props.MainPostPageStore.Postlist2[currentPost].SocialNets)
      console.log(socialNets)
      console.log(currentPost)
      console.log(this.props.MainPostPageStore.Postlist2[currentPost].SocialNets.facebook.Likes)
      // console.log(this.props.MainPostPageStore.Postlist2)
      return socialNets.map((socialNet, index)=> {
        return (
          <div key={index} className={socialNet}>
            <div className="likes">Likes: {this.props.MainPostPageStore.Postlist2[currentPost].SocialNets[socialNet].Likes}</div>
            <div className="shares">Shares: {this.props.MainPostPageStore.Postlist2[currentPost].SocialNets[socialNet].Shares}</div>
            {/* <div>Comments: { currentPost[socialNet].comments.length}</div> */}
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