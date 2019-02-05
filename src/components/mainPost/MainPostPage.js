import React, { Component } from 'react';
import PostList from './PostList';
import PopUp from './popup/PopUp';
import CurrentPost from './CurrentPost'
import { inject, observer } from 'mobx-react'
import SocialNetInfo from './socialNetsContainer/SocialNetInfo'


@inject(`MainPostPageStore`, `PostStore`) 
@observer
class MainPostPage extends Component {
    render() {
        return (
            <div className="main-post">
                <PopUp />
                <CurrentPost />
                <PostList />
                <SocialNetInfo />
            </div>
        )
    }  
}

export default MainPostPage;