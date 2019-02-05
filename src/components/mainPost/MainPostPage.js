import React, { Component } from 'react';
import PostList from './PostList';
import PopUp from './popup/PopUp';
import { inject, observer } from 'mobx-react';
import '../css/postpage.css';
@inject(`MainPostPageStore`, `PostStore`) 
@observer
class MainPostPage extends Component {
    
    render() {
        return (
            <div class="PostPage-container">
              
                <div class="post-list"><PostList />posts list +   <button><PopUp /></button>
                    <div class="post">post one</div>
                    <div class="post">post two</div>
                    <div class="post">post three</div>
                    <div class="post">post four</div>
                    <div class="post">post five</div>
                </div>

                <div class="social-colums-container">
                
                 <div class="social-icons">
                 <i class="icon">icon1</i>
                 <i class="icon">icon2</i>
                 <i class="icon">icon3</i>
                 <i class="icon">icon4</i> 
                 </div>
                 <div class="social-analytics-table">Facebook</div>
                 <div class="social-analytics-table">Twitter</div>
                 <div class="social-analytics-table">Instagram</div>
                 <div class="social-analytics-table">Linkdin</div>

                </div>
            </div>
        )
    }  
}

export default MainPostPage;