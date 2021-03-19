const initialState = {
    items: [],
    loading: false
}
const imagesReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "images/load/start":
            return {
                ...state,
                loading: true
            }

        case "image/load/success":
            return {
                ...state,
                items: actions.payload,
                loading: false
            }

        default:
            return state;
    }
}

export default imagesReducer;