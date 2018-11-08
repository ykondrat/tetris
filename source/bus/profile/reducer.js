// Core
import { Map } from 'immutable';

// Types
import { types } from './types';

const initialState = Map({
    id: '',
    firstName: 'Yevhen',
    lastName: 'Kondratyev',
    nickName: 'ykondrat',
    rank: 19,
    rankPoint: 5800,
    token: '',
    avatar: '',
});

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_PROFILE:
            return state.merge(action.payload);

        case types.CLEAR_PROFILE:
            return initialState;

        default:
            return state;
    }
}
