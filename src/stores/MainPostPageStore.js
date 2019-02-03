import { action, observable } from 'mobx';

class MainPostPageStore {
    @observable Postlist = [`Post1`, `Post2`, `Post3`, `Post4`, `Post5`, `Post6`, `Post7`, `Post8`];

    @observable newPostPopUp = {
        visible: false
    }
}

export default new MainPostPageStore()
