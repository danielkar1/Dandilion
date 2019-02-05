import React, { Component } from 'react';
import PostList from './PostList';
import PopUp from './popup/PopUp';
import SocialNetsContainer from './socialNetsContainer/SocialNetsContainer'
import CurrentPost from './CurrentPost'
import { inject, observer } from 'mobx-react'

@inject(`MainPostPageStore`, `PostStore`) 
@observer
class MainPostPage extends Component {
    render() {
        return (
            <div className="main-post">
                <PopUp />
                <CurrentPost />
                <PostList />
                <SocialNetsContainer />
            </div>
        )
    }  
}

export default MainPostPage;