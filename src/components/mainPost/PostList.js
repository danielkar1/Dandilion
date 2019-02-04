import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'

@inject(`MainPostPageStore`)
@observer
class PostList extends Component {
    createPostList = () =>{
        return (this.props.MainPostPageStore.Postlist.map((post, index) =>{
            return (
                <div key={index}>{post}</div>
            )
        })
    )}
    render() {
      return (
        <div className="post-list">
          {this.createPostList()}
        </div>
      );
    }
  }

  export default PostList