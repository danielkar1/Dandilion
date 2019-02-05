import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx';

@inject(`MainPostPageStore`)
@observer
class PostList extends Component {
  
    createPostList = () =>{
      const PostListData = this.props.MainPostPageStore.Postlist2
        return Object.keys(PostListData).map((post, index) =>{
            return (
                <div key={index} onClick={this.handleOnclick}>{post}
                  <div>Post Text: {PostListData[post].Text}</div>
                </div> 
            )
        })
    }
    handleOnclick =(e) => {
      this.props.MainPostPageStore.currentMainPost = e.target.textContent
    }
    render() {
     this.props.MainPostPageStore.getPosts()
      return (
        <div className="post-list">
          {this.createPostList()}
        </div>
      );
    }
  }

  export default PostList