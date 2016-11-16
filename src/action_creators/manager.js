import {updateManager} from '../actions/manager'

export function fetchManager() {
    return dispatch =>
        fetch('/data/manager.json')
            .then(response => {
                return response.json()
            })
            .then(json => {
                dispatch(updateManager(json))
            })
            .catch(error => {
                throw error
            })
}
