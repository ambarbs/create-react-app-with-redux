import {actions} from './actions';

// Multiple reducers (Feel free to edit/add/remove these items
const reducerOne = (state = {
    someField: false,
}, action) => {
    switch (action.type) {
        case actions.reducerOne.TOGGLE_SOME_ACTION_ONE:
            state = {
                ...state,
                someField: action.payload,
            };
            break;
        default:
            break;

    }
    return state;
}

const reducerTwo = (state = {
    someField: false,
}, action) => {
    switch (action.type) {
        case actions.reducerTwo.TOGGLE_SOME_ACTION_TWO:
            state = {
                ...state,
                someField: action.payload,
            };
            break;
        default:
            break;

    }
    return state;
}

export const reducers = {
    reducerOne,
    reducerTwo
};
