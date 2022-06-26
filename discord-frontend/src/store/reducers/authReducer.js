import { authActions } from "../actions/authActions";

const initState = {
  userDetails: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    // 22. If the state authAction sent matches with the case written below. the UPDATED state will be returned to the login Function. **Please reference back to the "authActions.js"
    case authActions.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.userDetails,
      };
    default:
      return state;
  }
};

export default reducer;
