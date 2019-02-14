import { action, observable, computed } from 'mobx';

class StartPageStore {
    @observable StartPageData = {
        name: {
            type: 'text',
            placeholder: 'Username',
            value: ``
        },
        password: {
            type: 'password',
            placeholder: 'Password',
            value: ''
        }
    }
  
    @action saveToLocalStorage(){
        let user ={
            name:this.StartPageData.name.value,
            password:this.StartPageData.password.value
        }
       let jsonUser=JSON.stringify(user)
       window.localStorage.setItem("user",jsonUser)
       console.log("got here")
    }

    @observable socialNetsLoginStatus = {
        facebook: false,
        twitter: false,
        instagram: false,
        linkedin: false
    }
    @observable location = ``
    @observable internalId = ``
    @action updateId(Id){
        this.internalId = Id
    }
    @action changeStartPageData(name, value) {
        if(name===`name`){
            sessionStorage.setItem(`name`,`${this.StartPageData.name.value}${value}`)
        } else {
            this.StartPageData[name].value = value
        }
    }
    @action resetValues() {
        Object.keys(this.StartPageData).map(input => {
            [input].value = ``
        })
    }
    @action updateLocation(location) {
        this.location = location ? `Log-in` : `Register`
    }
    @computed get loginStatus(){
        let status = sessionStorage.getItem('status')
        if (status){
            this.updateId(sessionStorage.getItem('u_id'))
        }
    }
}

export default new StartPageStore()