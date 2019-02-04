import { action, observable } from 'mobx';
import Axios from 'axios';
class MainPostPageStore {
    @observable Postlist= []

    @observable newPostPopUp = {
        visible: false
    }
   
    @action  getPosts= async () => {
     let postlist = await Axios.get('http://localhost:8080/posts')
        this.Postlist=postlist
        console.log(this.Postlist)
        
    }
}

let test= new MainPostPageStore()
test.getPosts()

export default new MainPostPageStore()

