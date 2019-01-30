import { action, observable } from 'mobx';

class StartPageStore {
    @observable LoginData = {
        Name: {
            type: 'text',
            placeholder: 'Username',
            value: ''
        },
        Password: {
            type: 'password',
            placeholder: 'Password',
            value: ''
        }
    }
    @action changeLoginData (name, value) {
        this.LoginData[name].value = value
    }
 }

export default new StartPageStore()