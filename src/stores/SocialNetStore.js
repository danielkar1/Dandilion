import { action, observable, computed } from 'mobx';

class SocialNetStore {
    @observable networks = {
        facebook: false,
        twitter: false,
        instagram: false
    }
    @action checkboxHandler = (name) => {
        this.networks[name] = !this.networks[name]
        // console.log(this.networks[name])
    }
    @computed get networksUsed(){
        let networkArray = Object.keys(this.networks).map(network => {
            if (this.networks[network]) {
                return network
            }
        })
        console.log(networkArray)
        return networkArray
    }
 }

export default new SocialNetStore()