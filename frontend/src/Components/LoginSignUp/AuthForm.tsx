import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputTextBox from "./InputTextBox";
import "../../css/Components/LoginSignUp/AuthForm.css";
import handleUserSignUp from "../../Hooks/handleUserSignUp";

export default function AuthForm({
  authType,
}: {
  authType: "login" | "signUp";
}) {
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [confirmPassword, setConfirmPassword] = useState<String>("");

  const navigate = useNavigate();

  return (
    <div className="auth-form-background">
      <h1 className="auth-form-header">
        {authType === "login" ? "Login" : "Sign Up"}
      </h1>
      {authType === "login" ? (
        <>
          <div
            className="auth-form-input-inner-container"
            style={{ height: "30% " }}
          >
            <InputTextBox input={"email"} state={email} setState={setEmail} />
            <InputTextBox
              input={"password"}
              state={password}
              setState={setPassword}
            />
          </div>
          <button
            className="auth-form-redirect-text"
            style={{
              textAlign: "end",
              marginTop: "0.5em",
              marginBottom: "1em",
            }}
            onClick={() => null} //need to implement functionality
          >
            Forgot Password?
          </button>
          <button className="auth-form-button-submit"> LOGIN </button>
          <div
            className="auth-form-redirect-text"
            style={{ textAlign: "center", marginBottom: "1em" }}
          >
            OR
          </div>
          <button className="auth-form-alternate-auth-container">
            <span style={{ display: "flex" }}>
              <img
                alt=""
                style={{ width: "1.5em" }}
                src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg"
              />
            </span>
            <span className="auth-form-alternate-auth-text">
              Continue with Google
            </span>
          </button>
          <button
            className="auth-form-redirect-text"
            onClick={() => navigate("/sign-up")}
          >
            Don't have an account?
          </button>
        </>
      ) : (
        <>
          <div
            className="auth-form-input-inner-container"
            style={{ height: "45%", marginBottom: "1em" }}
          >
            <InputTextBox input={"email"} state={email} setState={setEmail} />
            <InputTextBox
              input={"password"}
              state={password}
              setState={setPassword}
            />
            <InputTextBox
              input={"confirmPassword"}
              state={confirmPassword}
              setState={setConfirmPassword}
            />
          </div>
          <button
            className="auth-form-button-submit"
            onClick={() =>
              handleUserSignUp({
                email: email,
                password: password,
                confirmPassword: confirmPassword,
              })
            }
          >
            SIGN UP
          </button>
          <div
            className="auth-form-redirect-text"
            style={{ textAlign: "center", marginBottom: "1em" }}
          >
            OR
          </div>
          <button className="auth-form-alternate-auth-container">
            <span style={{ display: "flex" }}>
              <img
                alt=""
                style={{ width: "1.5em" }}
                src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg"
              />
            </span>
            <span className="auth-form-alternate-auth-text">
              Sign up with Google
            </span>
          </button>
          <button
            className="auth-form-redirect-text"
            style={{ textAlign: "center" }}
            onClick={() => navigate("/login")}
          >
            Already have an account?
          </button>
        </>
      )}
    </div>
  );
}
