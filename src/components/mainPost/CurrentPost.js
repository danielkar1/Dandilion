import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import './../../lib/css/emoji.css'
@inject(`MainPostPageStore`) 
@observer
class CurrentPost extends Component {
    render() {
      return (
       <div class= "card">{this.props.MainPostPageStore.Postlist2[this.props.MainPostPageStore.currentMainPost].Text}</div> 
      )
    }
  }

  export default CurrentPost