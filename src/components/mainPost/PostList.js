import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx';
import PopUp from './popup/PopUp';

@inject(`MainPostPageStore`)
@observer
class PostList extends Component {
  
    createPostList = () =>{
      const PostListData = this.props.MainPostPageStore.Postlist2
        return Object.keys(PostListData).map((post, index) =>{
            return (
                <div className="post" key={index} onClick={this.handleOnclick}>{post}</div> 
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
         <div className="social-icons">
          <button className="icon">icon1</button>
          <button className="icon">icon2</button>
          <button className="icon">icon3</button>
            <button className="icon">icon4</button> 
            </div>
            <a href="#" class="myButton">New Post<PopUp/></a> 
          {this.createPostList()}
        </div>
      );
    }
  }

  export default PostList