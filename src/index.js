import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import PostStore from './stores/PostStore';
import SocialNetStore from './stores/SocialNetStore'
import ProfileStore from './stores/ProfileStore'
import StartPageStore from './stores/StartPageStore'
import MainPostPageStore from './stores/MainPostPageStore'

const stores = {
    PostStore,
    SocialNetStore,
    ProfileStore,
    StartPageStore,
    MainPostPageStore
}

ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>
    , document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
