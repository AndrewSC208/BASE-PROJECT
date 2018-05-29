import { USER, SOCKET, CLIENT } from './types';

/*** INITIAL STATE ***/
const initialState = {
    _id: '',
    username: '',
    email: '',
    socket: 'disconnected',
    isUpdating: false,
    isConnecting: false,
    client: {}
}

/*** REDUCER ***/
const user = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER:
            return { ...state, ...payload }

        case SOCKET:
            return { ...state, socket: payload }

        case CLIENT:
            return { ...state, client: payload }

        default:
            return state
    }
}

export default user;