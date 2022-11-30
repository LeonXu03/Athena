import React, { useState } from "react";

import InputTextBox from "./InputTextBox";
import "../../css/Components/LoginSignUp/AuthForm.css";
import FormButton from "./FormButton";

export default function AuthForm({ authType }: { authType: "Login" }) {
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [confirmPassword, setConfirmPassword] = useState<String>("");
  return (
    <div className="auth-form-background">
      <h1 className="auth-form-header">
        {authType === "Login" ? "Login" : "Sign up"}
      </h1>
      {authType === "Login" ? (
        <>
          <InputTextBox input={"Email"} state={email} setState={setEmail} />
          <div style={{ marginBottom: "2rem" }} />
          <InputTextBox
            input={"Password"}
            state={password}
            setState={setPassword}
          />
          <div style={{ marginBottom: "0.5rem" }} />
        </>
      ) : (
        <>
          <InputTextBox input={"Email"} state={email} setState={setEmail} />
          <InputTextBox
            input={"Password"}
            state={password}
            setState={setPassword}
          />
          <InputTextBox
            input={"Confirm Password"}
            state={confirmPassword}
            setState={setConfirmPassword}
          />
        </>
      )}
      <div
        className="auth-form-redirect-text" //Should be a button that redirects you to a forgot password flow, not implemented yet
        style={{ marginBottom: "1.5rem", textAlign: "end" }}
      >
        Forgot Password?
      </div>
      <FormButton submitType={"Login"} />
      <div
        className="auth-form-redirect-text"
        style={{ marginBottom: "1.5rem", textAlign: "center" }}
      >
        OR
      </div>
      <button className="auth-form-alternate-auth-container">
        <span style={{ display: "flex" }}>
          <img
            style={{ width: "1.5em" }}
            src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg"
          />
        </span>
        <span className="auth-form-alternate-auth-text">
          Continue with Google
        </span>
      </button>

      <div className="auth-form-redirect-text" style={{ textAlign: "center" }}>
        Don't have an account? {/* links to sign-up page  */}
      </div>
    </div>
  );
}
