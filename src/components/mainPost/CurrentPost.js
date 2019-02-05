import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'

@inject(`MainPostPageStore`) 
@observer
class CurrentPost extends Component {
    render() {
      return (
        <div className="current-post">Current Post: {this.props.MainPostPageStore.currentMainPost}</div>
      )
    }
  }

  export default CurrentPost