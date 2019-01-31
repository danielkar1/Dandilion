import { action, observable } from 'mobx'


class ProfileStore {
    @observable internalId = ``
    @action clientInternalIdstorage = (Id)=>{
        // this.internalId = Id
        console.log(Id)
    }
}

export default new ProfileStore()