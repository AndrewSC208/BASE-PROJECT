// ACTIONS
/**
 * session: {} | {Session}
 * isFetchingSession: bool
 * 
 * 
 */
export const SESSION_REQUESTED = 'session/SESSION_REQUESTED';
export const SESSION = 'session/SESSION';

const initialState = {
    session: {},
    isFetchingSession: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SESSION_REQUESTED:
            return {
                ...state,
                isFetchingSession: true
            }

        case SESSION:
            return {
                ...state,
                session: action.payload,
                isFetchingSession: !state.isFetchingSession
            }

        default:
            return state
    }
}

export const fetchSession = () => {
    return dispatch => {
        dispatch: ({
            type: SESSION_REQUESTED
        })

        // this is where you make you fetch requests

        // also handle errors

        
    }
}