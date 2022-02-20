const initialState = []

const postReducers = (state = initialState, action) => {
    if (action.type === "SET_POST") {
        if (Array.isArray(action.payload)) return action.payload
    }

    return state
}

export default postReducers