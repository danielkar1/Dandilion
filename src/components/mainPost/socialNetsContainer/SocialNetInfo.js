import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'

@inject(`MainPostPageStore`) 
@observer
class SocialNetInfo extends Component {
    getInfo =() => {
       const socialData = Object.keys(this.props.MainPostPageStore.Postlist2)
      //  .map((socialnet, index) => {
      //     return (
      //       <div key={index}>
      //         <div>Likes: {</div>
      //       </div>
      //     )
        // })
    }
    render() {
      return (
        <div className="social-net-info">
            
        </div>
      )
    }
  }

  export default SocialNetInfo