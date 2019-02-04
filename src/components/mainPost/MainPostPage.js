import React, { Component } from 'react';
import PostList from './PostList';
import PopUp from './popup/PopUp';
import { inject, observer } from 'mobx-react'

@inject(`MainPostPageStore`, `PostStore`) 
@observer
class MainPostPage extends Component {
    render() {
        return (
            <div className="main-post">
                <PopUp />
                <div>Current Post:{this.props.MainPostPageStore.Postlist[4]}</div>
                <PostList />
            </div>
        )
    }  
}

export default MainPostPage;