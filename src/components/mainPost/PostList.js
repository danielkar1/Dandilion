import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import PopUp from './popup/PopUp';

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
                <div className="post" key={index} onClick={this.handleOnclick}>{post}</div> 
//                 <div className={post} onClick={this.handleOnclick} key={index} >
//                   <div>{post}</div>
//                   <div>Post Text: {PostListData[post].Text}</div>
//                 </div>
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
         <div  className="social-icons">
          <button className="icon">icon1</button>
          <button className="icon">icon2</button>
          <button className="icon">icon3</button>
            <button className="icon">icon4</button> 
            </div>
            <a href="#" className="myButton">New Post<PopUp/></a> 
          {this.createPostList()}
        </div>
      );  
    }
  }

  export default PostList