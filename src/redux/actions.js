export const loadImage = () => {
    return function (dispatch) {
        dispatch({type: 'image/load/start'});

        fetch("https://boiling-refuge-66454.herokuapp.com/images")
            .then((response) => response.json())
            .then(json => {
                dispatch({
                    type: 'image/load/success',
                    payload: json
                })
            })
    }
}

export const loadMenus = (id) => {
    return function (dispatch) {
        dispatch({type: 'menus/load/start'});

        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
            .then((response) => response.json())
            .then(json => {
                dispatch({
                    type: 'menus/load/success',
                    payload: json
                })
            })
    }
}

export const loadComments = (id) => {
    return function (dispatch) {
        dispatch({type: 'comments/load/start'});

        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`)
            .then((response) => response.json())
            .then(json => {
                dispatch({
                    type: 'comments/load/success',
                    payload: json
                })
            })
    }
}
