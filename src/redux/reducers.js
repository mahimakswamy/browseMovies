import { combineReducers } from "redux";

const initialState = {list: [], searchText:''};
const movieState = (state = initialState, action) => {
    switch(action.type) {
        
       case 'FETCH_MOVIES':
           let updatedList = initialState.list;
           updatedList = action.payload.Search
           return {list:updatedList}
           
        default:
            return state;
    }
}

var rootReducer = combineReducers({movieState})
export default rootReducer;