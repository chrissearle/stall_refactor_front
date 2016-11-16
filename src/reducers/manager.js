const initialState = {
    name: '',
    mobile: ''
}

function updateState(state, action) {
    const newState = Object.assign({}, state)

    newState.name = action.name
    newState.mobile = action.mobile

    return newState
}

export default function updateManager(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_MANAGER':
            return updateState(state, action)
        default:
            return state
    }
}
