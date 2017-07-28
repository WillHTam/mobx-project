import {observable, action, computed, useStrict} from 'mobx'
import axios from 'axios'

useStrict(true)

// This store is a regular ol' ES6 class instead of that byzantian Redux stuff
class UserStore {
    // Values marked as 'observable' can be watched by observers
    // Observables cause reactions and computations in response to their own changes
    @observable users = []
    @observable selectedUser = {}
    // Computed observables are derived from Observables
    @computed get selectedId() {return this.selectedUser.id}
    // In strict mode, only actions can modify mbox state
    // Actions mutate state
    @action setUsers = (users) => { this.users = [...users] }
    @action selectUser = (user) => { this.selectUser = user }
    // Clearing the observable state
    @action clearSelectedUser = () => { this.selectedUser = {} }
    // Need to put this in an action b/c of strict mode
    @action getUsers() {
        // Async, so use Axios
        axios.get('http://jsonplaceholder.typicode.com/users').then( response => {
            this.setUsers(response.data)
        })
    }
}

const store = new UserStore()
export default store
export { UserStore }
