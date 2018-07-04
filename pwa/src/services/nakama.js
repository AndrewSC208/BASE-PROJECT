import * as nakamajs from '../node_modules/@heroiclabs/nakama-js/dist/nakama-js.umd.js';

/*
 * DESIGN A CLASS THAT WILL SERVE AS A NEW'ED UP NAKAMA SERVICE FOR PWA 
 */
export default class Nakama {
    constructor() {

    }

    get Client() {

    }

    NewClient(email = "super@heroes.com", password = "batsignal") {
        var client = new nakamajs.Client("defaultkey", "127.0.0.1", 7350);
        client.usessl = false;

        const session = await client.authenticateEmail({ email: email, password: password });
        console.info(session);
        console.info(session.token); // raw JWT token
        console.info(session.userId);
        console.info(session.username);
        console.info("Session has expired?", session.isexpired(Date.now() / 1000));
    }
}

