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
    @observable location = ``

    @observable internalId = ``

    @action changeStartPageData(name, value) {
        this.StartPageData[name].value = value
        // console.log(this.StartPageData[name].value)
    }
    @action resetValues() {
        this.StartPageData.map(input => {
            [input].value = ``
        })
    }
    @action updateLocation(location) {
        this.location = location ? `Log-in` : `Register`
    }
}

export default new StartPageStore()