import { uuidv1 } from 'uuid/v1';

// ACTIONS
/**
 * stamp device
 */
export const STAMP_DEVICE_REQUEST = 'client/STAMP_DEVICE_REQUEST';
export const STAMP_DEVICE = 'client/STAMP_DEVICE';
/**
 * connect to the backend with a user id, username, email
 */
export const CONNECT_CLIENT_REQUEST = 'client/CONNECT_CLIENT_REQUEST';
export const CONNECT_CLIENT = 'client/CONNECT_CLIENT';
/**
 * disconnect
 */
export const DISCONNECT_CLIENT_REQUEST = 'client/DISCONNECT_CLIENT_REQUEST';
export const DISCONNECT_CLIENT = 'client/DISCONNECT_CLIENT';

// INITIAL STATE
const initialState = {
    client: {},
    deviceId: '',
    isConnecting: false,
    isDisconnecting: false,
    isStamping: false
}

// REDUCER
export default (state = initialState, action) => {
    switch (action.type) {
        case CONNECT_CLIENT_REQUEST:
            return {
                ...state,
                isConnecting: true
            }

        case CONNECT_CLIENT:
            return {
                ...state,
                client: action.payload,
                isConnecting: !state.isConnecting
            }

        case DISCONNECT_CLIENT_REQUEST:
            return {
                ...state,
                isDisconnecting: true
            }

        case DISCONNECT_CLIENT:
            return {
                ...state,
                client: {},
                isDisconnecting: !state.isDisconnecting
            }

        case STAMP_DEVICE_REQUEST:
            return {
                ...state,
                isStamping: true
            }

        case STAMP_DEVICE:
            return {
                ...state,
                deviceId: action.payload,
                isStamping: !state.isConnecting
            }
        default:
            return state;
    }
}

// METHODS
/**
 * stampDevice: creates a guid for each new visitor to the app.
 * Guid is saved in localstore, and also in redux.
 */
export const stampDevice = () => {
    return dispatch => {
        dispatch({
            type: STAMP_DEVICE_REQUEST
        });

        // return async action
        return new Promise((resolve, reject) => {
            let deviceInfo = null,
                deviceId   = null;

            // set device id
            try {
                const value = localStorage.getItem('@MyApp:devicekey');
                if (value !== null) {
                    deviceId = value
                } else {
                    deviceId = uuidv1();
                    localStorage.setItem('@MyApp:deviceKey', deviceId);
                }
            } catch (error) {
                console.log("An error occured: %o", error);
            }

            dispatch({
                type: STAMP_DEVICE,
                payload: deviceId
            });

            resolve(deviceId)
        })
    }
}

export const connect = () => {}
export const disconnect = () => {}
// export const incrementAsync = () => {
//     return dispatch => {
//         dispatch({
//             type: INCREMENT_REQUESTED
//         });

//         return setTimeout(() => {
//             dispatch({
//                 type: INCREMENT
//             })
//         }, 3000);
//     }
// }

// export const decrement = () => {
//     return dispatch => {
//         dispatch({
//             type: DECREMENT_REQUESTED
//         })

//         dispatch({
//             type: DECREMENT
//         })
//     }
// }

// export const decrementAsync = () => {
//     return dispatch => {
//         dispatch({
//             type: DECREMENT_REQUESTED
//         })

//         return setTimeout(() => {
//             dispatch({
//                 type: DECREMENT
//             })
//         }, 3000)
//     }
// }