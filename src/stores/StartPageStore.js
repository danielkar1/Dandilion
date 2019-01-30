import { action, observable } from 'mobx';

class StartPageStore {
    @observable LoginData = {
        name: {
            type: 'text',
            placeholder: 'Username',
            value: ''
        },
        password: {
            type: 'password',
            placeholder: 'Password',
            value: ''
        }
    }
    @action changeLoginData (name, value) {
        this.LoginData[name].value = value
    }
    @action resetValues (){
        this.LoginData.map(input=>{
            [input].value = ``
        })
    }
 }

export default new StartPageStore()