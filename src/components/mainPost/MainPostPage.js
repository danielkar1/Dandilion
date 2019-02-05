import React, { Component } from 'react';
import PostList from './PostList';
import PopUp from './popup/PopUp';

import '../css/postpage.css';

import CurrentPost from './CurrentPost'
import SocialNetInfo from './socialNetsContainer/SocialNetInfo'
import CurrentPostText from './CurrentPostText'
import { inject, observer } from 'mobx-react'

@inject(`MainPostPageStore`, `PostStore`) 
@observer
class MainPostPage extends Component {
    
    render() {
        return (
            <div className="main-post">
                <PopUp />
                <CurrentPost />
                <CurrentPostText />
                <PostList />
                <SocialNetInfo />
            </div>
        )
    }  
}

export default MainPostPage;