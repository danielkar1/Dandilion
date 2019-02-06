import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import PopUp from './popup/PopUp';

@inject(`MainPostPageStore`)
@observer
class PostList extends Component {
  // showMostLikedPost = () => {
  //   const stats = this.props.MainPostPageStore.findMostLikedPost()
  //   console.log(stats)
  // }
  createPostList = () => {
    const PostListData = this.props.MainPostPageStore.Postlist2
    return Object.keys(PostListData).map((post, index) => {
      return (
        <div className='post' id={post} onClick={this.handleOnclick} key={index} >
          <div>
            {PostListData[post].Text}
          </div>
        </div>
      )
    })
  }
  handleOnclick = (e) => {
    console.log(e.currentTarget.id)
    this.props.MainPostPageStore.updateCurrentPost(e.currentTarget.id)
  }
  render() {
    // this.showMostLikedPost()
    // this.props.MainPostPageStore.getPosts()
    return (
      <div className="post-list">
        {/* <div className="social-icons">
          <button className="icon">icon1</button>
          <button className="icon">icon2</button>
          <button className="icon">icon3</button>
          <button className="icon">icon4</button>
        </div> */}
        <a href="#" className="myButton">
          <PopUp />
        </a>
        {this.createPostList()}
      </div>
    );
  }
}

export default PostList