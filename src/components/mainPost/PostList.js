import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx';

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
          {this.getPosts}
        </div>
      );
    }
  }

  export default PostList