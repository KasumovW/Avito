const initialState = {
    items: [],
    loading: false
}
const menusReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "menus/load/start":
            return {
                ...state,
                loading: true
            }

        case "menus/load/success":
            return {
                ...state,
                items: actions.payload,
                loading: false
            }

        default:
            return state;
    }
}

export default menusReducer;