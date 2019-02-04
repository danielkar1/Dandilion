import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx';

@inject(`MainPostPageStore`)
@observer
class PostList extends Component {
  
    createPostList = () =>{
        // return (this.props.MainPostPageStore.Postlist.map((post, index) =>{
        //     return (
        //         <div key={index}>{post}</div>
        //     )
        // })
        // console.log(this.props.MainPostPageStore.Postlist)
    }
    render() {
     this.props.MainPostPageStore.getPosts()
      return (
        <div className="post-list">
          {/* {this.createPostList()} */}
        </div>
      );
    }
  }

  export default PostList