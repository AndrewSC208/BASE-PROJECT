import * as na from '../node_modules/@heroiclabs/nakama-js/dist/nakama-js.umd.js';

let gameClient = false;

export const createGameClient = (key, host, port) => {
    if (!gameClient) {
        gameClient = na.Client(key, host, port);
        gameClient.usessl = false;
    }
}

export const loginWithEmail = (email, password) => {
    let session;

    if (gameClient) {
        session = await client.authenticateEmail({ email, password });
    } else {
        createGameClient('defaultkey', '127.0.0.1', 7350)
        session = await client.authenticateEmail({ email, password });
        
        console.log(session);
    }
    
    return session;
}