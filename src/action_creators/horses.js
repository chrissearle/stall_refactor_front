import {updateHorses} from '../actions/horses'

export function fetchHorses() {
    return dispatch =>
        fetch('/data/horses.json')
            .then(response => {
                return response.json()
            })
            .then(json => {
                dispatch(updateHorses(json))
            })
            .catch(error => {
                throw error
            })
}
