const initialState = {
    horses: []
}

function updateState(state, action) {
    const newState = Object.assign({}, state)

    newState.horses = action.horses

    return newState
}

export default function updateHorses(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_HORSES':
            return updateState(state, action)
        default:
            return state
    }
}
