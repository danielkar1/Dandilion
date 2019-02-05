import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'

@inject(`MainPostPageStore`)
@observer
class PostList extends Component {
    createPostList = () =>{
      const PostListData = this.props.MainPostPageStore.Postlist2
        return Object.keys(PostListData).map((post, index) =>{
            return (
                <div key={index} onClick={this.handleOnclick}>{post}</div> 
            )
        })
    }
    handleOnclick =(e) => {
      this.props.MainPostPageStore.currentMainPost = e.target.textContent
    }
    render() {
      return (
        <div className="post-list">
          {this.createPostList()}
        </div>
      );
    }
  }

  export default PostList