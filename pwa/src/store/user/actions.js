import * as Ws from '../../modules/socket';
import { USER, SOCKET, CLIENT } from './types';
import { nakamajs } from '@heroiclabs/nakama-js';

/*** ACTIONS ***/
export const setUser = (payload) => {
    return {
        type: USER,
        payload
    }
}

export const setSocket = (payload) => {
    return {
        type: SOCKET,
        payload
    }
}

export const setClient = (payload) => {
    return {
        type: CLIENT,
        payload
    }
}

export const createClient = () => {
    let client = new nakamajs.Client("defaultkey", "127.0.0.1", 7350);
    client.ssl = false;

    return dispatch => {
        dispatch(setClient(client))
    }
}
