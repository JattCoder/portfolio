import { UPDATE_LIKE } from '../actions';
const reducer = (state = {}, action) => {

  switch (action.type) {
    case UPDATE_LIKE:
      debugger;
      console.log(action);
      
       return { ...state, likeCount: action.data };
    default:
       return state;
  }
};
export default reducer;
