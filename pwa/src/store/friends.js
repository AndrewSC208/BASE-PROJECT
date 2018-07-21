export const REQ_FRIENDS = 'friends/FRIENDS_REQUESTED';
export const FRIENDS = 'friends/FRIENDS';

const initialState = {
    friends: [],
    isFetching: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REQ_FRIENDS:
            return {
                ...state,
                isIncrementing: true
            }

        case FRIENDS: 
            

        default:
            return state
    }
}

export const getFriends = () => {
    return dispatch => {
        let friends = [];

        dispatch({
            type: REQ_FRIENDS
        });

        // just do the fetch here, its been a while
        

        // update store
        dispatch({
            type: FRIENDS,
            friends
        })

        // toggle fetch
    }
}