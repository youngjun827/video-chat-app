import * as api from "../../api";
import { openAlertMessage } from "./alertActions";

export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

export const getActions = (dispatch) => {
  return {
    // And tadah! the login function is here.
    // 4. The login function uses the userDetails (userDetails, history) to execute Redux's dispatch method. **Please scroll the page down to view step.5
    login: (userDetails, history) => dispatch(login(userDetails, history)),
    register: (userDetails, history) =>
      dispatch(register(userDetails, history)),
    setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
  };
};

const setUserDetails = (userDetails) => {
  // 21. Here, the setUserDetails function will send the current STATE and the userDetails to the authReducer. **Please reference the "authReducer.js" file
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};

// the login function
const login = (userDetails, history) => {
  return async (dispatch) => {
    // 5. To execute the dispatch method, the "userDetails" goes through the API, and the server then the database to be VALIDATED. Until then, the login function WAIT for the API to send a response BACK to be used to "login" function. So let's try to navigate to our API. **Please reference "api.js"
    const response = await api.login(userDetails);
    console.log(response);
    // If there is an error show the Alert Messages
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      // 18. The updated user details from the backend server are assigned to userDetails.
      const { userDetails } = response?.data;
      //  19. then the userDetails get STORED at the localStorage of the browser. Why? Check my blog on my website about localStorage and its functionality ;)
      localStorage.setItem("user", JSON.stringify(userDetails));

      // 20. Thanks to the redux-thunk, the dispatch method can be used at the "setUserDetails" function to send the ACTION OBJECT to the authReducer. **Please scroll the page above to access the "setUserDetails" function.
      dispatch(setUserDetails(userDetails));
      // 23. The user is redirected to the dashboard.
      history.push("/dashboard");
    }
  };
};

const register = (userDetails, history) => {
  return async (dispatch) => {
    const response = await api.register(userDetails);
    console.log(response);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      history.push("/dashboard");
    }
  };
};
