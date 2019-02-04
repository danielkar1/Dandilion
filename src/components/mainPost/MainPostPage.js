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
                
                <PostList />
            </div>
        )
    }  
}

export default MainPostPage;