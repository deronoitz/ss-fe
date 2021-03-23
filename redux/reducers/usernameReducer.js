import { SET_USERNAME } from "redux/actions/usernameAction";

const usernameReducer = (state = { value: '' }, action) => {
  switch (action.type) {
    case SET_USERNAME:
        return {
          ...state, 
          value: action.data
        };
    default:
        return {...state};
}
};

export default usernameReducer