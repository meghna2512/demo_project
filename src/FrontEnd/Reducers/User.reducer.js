import {USER_LIST} from '../Actions/actionTypes';
const initState = []

//Define Actions
const characterReducer = (state = initState, action) => {
    switch (action.type) {

        case USER_LIST:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}

export default characterReducer;
