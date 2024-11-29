import * as actionTypes from '../actions/actionTypes';

const initialState = {
   recentNewsData:[],
    isLoading: false,
};

const PersonsReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
       
        case actionTypes.GET_NEWS:
            return {
                ...state,
                recentNewsData: action.payload || [],
            }
        default:
            return state;
    }
}

export default PersonsReducer;
