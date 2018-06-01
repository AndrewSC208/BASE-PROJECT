import { uuidv1 } from 'uuid/v1';

// ACTIONS
/**
 * DeviceId: if DeviceId is not set in localstore create one. 
 */
export const DEVICE_ID_REQUEST = 'client/DEVICE_ID_REQUEST';
export const STAMP_DEVICE = 'client/STAMP_DEVICE';

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
        // case CONNECT_CLIENT_REQUEST:
        //     return {
        //         ...state,
        //         isConnecting: true
        //     }

        // case CONNECT_CLIENT:
        //     return {
        //         ...state,
        //         client: action.payload,
        //         isConnecting: !state.isConnecting
        //     }

        // case DISCONNECT_CLIENT_REQUEST:
        //     return {
        //         ...state,
        //         isDisconnecting: true
        //     }

        // case DISCONNECT_CLIENT:
        //     return {
        //         ...state,
        //         client: {},
        //         isDisconnecting: !state.isDisconnecting
        //     }

        case DEVICE_ID_REQUEST:
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
// export const stampDevice = () => {
//     return dispatch => {
//         dispatch({
//             type: DEVICE_ID_REQUEST
//         });

//         // return async action
//         return new Promise((resolve, reject) => {
//             let deviceInfo = null,
//                 deviceId   = null;

//             // set device id
//             try {
//                 const value = localStorage.getItem('@MyApp:devicekey');
//                 if (value !== null) {
//                     deviceId = value
//                 } else {
//                     deviceId = uuidv1();
//                     localStorage.setItem('@MyApp:deviceKey', deviceId);
//                 }
//             } catch (error) {
//                 console.log("An error occured: %o", error);
//             }

//             dispatch({
//                 type: STAMP_DEVICE,
//                 payload: deviceId
//             });

//             resolve(deviceId)
//         })
//     }
// }

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