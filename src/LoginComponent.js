import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { axiosInstance as axios } from "./axios/axiosInstance";

const LoginComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("isLoggedIn") || null
  );
  const handleSuccess = (res) => {
    let userData = res.profileObj;
    console.log(userData);

    axios
      .get(`/${res.profileObj.googleId}`)
      .then((response) => {
        console.log(response);
        sessionStorage.setItem("isLoggedIn", true);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          axios.post("/", {
            ...userData,
            id: userData.googleId,
          });
          sessionStorage.setItem("isLoggedIn", true);
          setIsLoggedIn(true);
        }
      });
  };
  const handleFailure = (err) => {
    console.log(err);
  };
  const handleLogout = (response) => {
    sessionStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <GoogleLogout
          clientId="813755426604-c14fjkrfta5up8p97rptleprf7ua6l3l.apps.googleusercontent.com"
          buttonText="Gmail Logout"
          onLogoutSuccess={(response) => {
            handleLogout(response);
          }}
        />
      ) : (
        <GoogleLogin
          clientId="813755426604-c14fjkrfta5up8p97rptleprf7ua6l3l.apps.googleusercontent.com"
          buttonText="Gmail Login"
          onSuccess={(response) => {
            handleSuccess(response);
          }}
          onFailure={(response) => {
            handleFailure(response);
          }}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      )}
    </div>
  );
};

export default LoginComponent;
