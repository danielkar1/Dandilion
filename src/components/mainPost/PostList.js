import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'

@inject(`MainPostPageStore`)
@observer
class PostList extends Component {
  showMostLikedPost = () => {
    const stats = this.props.MainPostPageStore.findMostLikedPost()
    console.log(stats)
  }
  
    createPostList = () =>{
      const PostListData = this.props.MainPostPageStore.Postlist2
        return Object.keys(PostListData).map((post, index) =>{
            return (
                <div className={post} onClick={this.handleOnclick} key={index} >
                  <div>{post}</div>
                  <div>Post Text: {PostListData[post].Text}</div>
                </div>
            )
        })
    }
    handleOnclick =(e) => {
      this.props.MainPostPageStore.currentMainPost = e.currentTarget.className
      // console.log(e.currentTarget.className)
    }
    render() {
      this.showMostLikedPost()
    //  this.props.MainPostPageStore.getPosts()
      return (
        <div className="post-list">
          {this.createPostList()}
        </div>
      );
    }
  }

  export default PostList