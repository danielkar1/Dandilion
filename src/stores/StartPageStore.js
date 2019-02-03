import { action, observable } from 'mobx';

class StartPageStore {
    @observable StartPageData = {
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
    @observable isSignedUp = false;
    @action changeStartPageData (name, value) {
        this.StartPageData[name].value = value;
    }
    @action resetValues (){
        this.StartPageData.map(input=>{
            [input].value = ``
        })
    }
    @action updateLocation (location){
            this.isSignedUp = true;
    }
 }

export default new StartPageStore()