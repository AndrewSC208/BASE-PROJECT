import { nakama } from '@heroiclabs/nakama-js';

const getDeviceId = () => {
    let client = new nakama.Client("defaultkey", "127.0.0.1", 7350)
    client.ssl = false;

    console.log('NAKAMA CLIENT: ', client);
}

export {
    getDeviceId
}