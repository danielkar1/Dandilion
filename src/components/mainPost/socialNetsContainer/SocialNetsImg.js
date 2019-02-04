import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'

@inject(`MainPostPageStore`) 
@observer
class SocialNetsImg extends Component {
    // createImages =() => {
    //     const imgData = this.props.MainPostPageStore.SocialNetsImg
    //     return Object.keys(imgData).map((imgClass, index) =>{
    //         return (
    //             <i key={index} className={imgClass}></i>
    //         )
    //     })
    // }
    render() {
      return (
        <div className="social-net-img">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin"></i>
        </div>
      )
    }
  }

  export default SocialNetsImg