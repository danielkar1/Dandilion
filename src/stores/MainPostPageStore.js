import { action, observable } from 'mobx';
import Axios from 'axios';
class MainPostPageStore {
    @observable Postlist= []

    @observable newPostPopUp = {
        visible: false
    }
   
    @action  getPosts= async () => {
     let postlist = await Axios.get('http://localhost:3000/posts')
        this.Postlist=postlist

        
    }
}

export default new MainPostPageStore()
