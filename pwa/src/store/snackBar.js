const initialState = {
    code: 0,
    text: '',
    lable: '',
    undoAction: null,
    open: false
}

export const NOTIFICATION = 'snackbar/NOTIFICATION';

function snackbarNotification(payload) {
    return {
        type: NOTIFICATION,
        payload
    }
}

export const notification = (state = initialState, action) => {
    switch (action.type) {
        case NOTIFICATION:
            return {
                ...state,
                snackbar: action.payload,
            }

        default:
            return state
    }
}