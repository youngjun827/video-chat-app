import React, { useState, useEffect } from "react";
import AuthBox from "../../shared/components/AuthBox";
import LoginPageFooter from "./LoginPageFooter";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";
import { validateLoginForm } from "../../shared/utils/validators";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";
import { useHistory } from "react-router-dom";

const LoginPage = ({ login }) => {
  const history = useHistory();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password, setIsFormValid]);

  const handleLogin = () => {
    // 2. The handleLogin function assigns userDetails to the "login" function. Where did the "login" function come from? It come from "mapActionsToProps" function. **Please scroll the page down to find the "mapActionsToProps" function
    const userDetails = {
      mail,
      password,
    };

    login(userDetails, history);
  };

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs
        // Send the props to the LoginPageInputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
      {/* 1. User clicks on the Login Button, and the "handleLogin" handler gets triggered. **Please scroll up the page to find the "handleLogin" function */}
    </AuthBox>
  );
};

// 3. The mapActionsToProps functions returns the "getActions" function from "authActions" file. Lets try to search "authActions" file to see if "login" function exists in the "authActions" file.
const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(LoginPage);
