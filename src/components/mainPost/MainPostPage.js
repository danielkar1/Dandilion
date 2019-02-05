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
            <div className="PostPage-container">
              
                <div className="post-list"><PostList />posts list +   <button><PopUp /></button>
                    <div className="post">post one</div>
                    <div className="post">post two</div>
                    <div className="post">post three</div>
                    <div className="post">post four</div>
                    <div className="post">post five</div>
                </div>
                <div className="main">
                
                 <div className="social-icons">
                 <i className="icon">icon1</i>
                 <i className="icon">icon2</i>
                 <i className="icon">icon3</i>
                 <i className="icon">icon4</i> 
                 </div>
                <div className="social-colums-container">
                 <div className="social-analytics-table">Facebook</div>
                 <div className="social-analytics-table">Twitter</div>
                 <div className="social-analytics-table">Instagram</div>
                 <div className="social-analytics-table">Linkdin</div>

                </div>
                </div>
            </div>
        )
    }  
}

export default MainPostPage;