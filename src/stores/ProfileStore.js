import { action, observable } from 'mobx'


class ProfileStore {
    @observable internalId = ``
    @action clientInternalIdstorage = (Id)=>{
        // this.internalId = Id
        console.log("sup")
    }
}

export default new ProfileStore()