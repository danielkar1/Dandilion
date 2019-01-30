import { action, observable } from 'mobx'

class PostStore {
    @observable imageInput
    @observable textInput
    @action handleInput = (name, value) => {
        this[name] = value
        console.log(this[name])
    }
}

export default new PostStore