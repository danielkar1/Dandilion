import { action, observable } from 'mobx'

class PostStore {
    @observable Image = ``
    @observable Text = ``
    @observable inputField=''
    @action handleInput = (name, value) => {
        this[name] = value
        console.log(this[name])
    }
   
           
   
}

export default new PostStore()