import React from "react";

import AuthForm from "../Components/LoginSignUp/AuthForm";
import "../css/Pages/AuthPage/AuthPage.css";

export default function AuthPage({
  authType,
}: {
  authType: "login" | "signUp";
}) {
  return (
    <div className="auth-page-background">
      <div className="auth-page-header-container">
        <span style={{ display: "inline-flex", marginRight: "1em" }}>
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/647/647723.png"
            style={{ width: "2.5em" }}
          />
        </span>
        <span className="auth-page-header-text">Athena</span>
      </div>
      {authType === "login" ? (
        <AuthForm authType={"login"} />
      ) : (
        <AuthForm authType={"signUp"} />
      )}
    </div>
  );
}
