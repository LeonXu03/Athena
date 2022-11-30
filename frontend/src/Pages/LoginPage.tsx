import React from "react";

import AuthForm from "../Components/LoginSignUp/AuthForm";
import "../css/Pages/LoginPage/LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login-page-background">
      <div className="login-page-header-container">
        <span style={{ display: "inline-flex", marginRight: "1em" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/647/647723.png"
            style={{ width: "2.5em" }}
          />
        </span>
        <span className="login-page-header-text">Athena</span>
      </div>
      <AuthForm authType={"Login"} />
    </div>
  );
}
