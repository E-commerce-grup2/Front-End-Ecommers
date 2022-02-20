const initialState = []

const detailProductsReducers = (state = initialState, action) => {
    if (action.type === "SET_DETAIL") {
        if (Array.isArray(action.payload)) return action.payload
    }

    return state
}

export default detailProductsReducers