import { action, observable } from 'mobx';

class SocialNetworks{
    @observable networks = {
        facebook: false,
        twitter: false,
        instagram: false
    }
    @action checkboxHandler = (name) => {
        this.networks[name] = !this.networks[name]
        console.log(this.networks[name])
    }
 }

export default new SocialNetworks