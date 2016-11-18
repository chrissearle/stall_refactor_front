const initialState = {
    people: []
}

function updateState(state, action) {
    const newState = Object.assign({}, state)

    newState.people = action.people

    return newState
}

export default function updatePeople(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_PEOPLE':
            return updateState(state, action)
        default:
            return state
    }
}
