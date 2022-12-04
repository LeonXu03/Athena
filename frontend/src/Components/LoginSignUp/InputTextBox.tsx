import React, { Dispatch, SetStateAction } from "react";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";

import "../../css/Components/LoginSignUp/InputTextBox.css";

export default function InputTextBox({
  input,
  state,
  setState,
}: {
  input: "email" | "password" | "confirmPassword";
  state: String;
  setState: Dispatch<SetStateAction<String>>;
}) {
  const placeholder =
    input === "confirmPassword"
      ? `Confirm password here`
      : `Enter ${input.toLowerCase()} here`;
  const icons = {
    email: (
      <HiOutlineMail
        color={"#ACACAC"}
        size={17}
        style={{ marginRight: "1.5em", padding: "0px" }}
      />
    ),
    password: (
      <HiOutlineLockClosed
        color={"#ACACAC"}
        size={17}
        style={{ marginRight: "1.5em", padding: "0px" }}
      />
    ),
    confirmPassword: (
      <HiOutlineLockClosed
        color={"#ACACAC"}
        size={17}
        style={{ marginRight: "1.5em", padding: "0px" }}
      />
    ),
  };

  const handleText = (event: React.FormEvent<HTMLInputElement>) => {
    setState(event.currentTarget.value);
  };

  return (
    <div className="input-box-container">
      <h4 className="input-box-header">
        {input === "email"
          ? "Login"
          : input === "password"
          ? "Password"
          : "Confirm Password"}
      </h4>
      <div className="input-box-input-field-container">
        {!state && icons[input]}
        <input
          className="input-box-input-field-text"
          placeholder={placeholder}
          onChange={(event) => handleText(event)}
          type={input !== "email" ? "password" : "text"}
        ></input>
      </div>
      <div
        style={{
          width: "100%",
          background: state ? "black" : "#ACACAC",
          height: "1px",
        }}
      />
    </div>
  );
}
