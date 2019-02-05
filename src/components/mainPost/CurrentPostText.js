import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'

@inject(`MainPostPageStore`) 
@observer
class CurrentPostText extends Component {
    render() {
        const currentPost = this.props.MainPostPageStore.currentMainPost
      return (
        <div className="current-post">Current Post Text: {this.props.MainPostPageStore.Postlist2[currentPost].Text}</div>
      )
    }
  }

  export default CurrentPostText