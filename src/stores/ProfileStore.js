import { action, observable } from 'mobx'

class ProfileStore {
    @observable user = {}
    @observable disabled = ''
}

export default new ProfileStore;