import React, { Dispatch, SetStateAction } from "react";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";

import "../../css/Components/LoginSignUp/InputTextBox.css";

export default function InputTextBox({
  input,
  state,
  setState,
}: {
  input: "Email" | "Password" | "Confirm Password";
  state: String;
  setState: Dispatch<SetStateAction<String>>;
}) {
  const placeholder = `Enter ${input.toLowerCase()} here`;
  const icons = {
    Email: (
      <HiOutlineMail
        color={"#ACACAC"}
        size={17}
        style={{ marginRight: "1.5em", padding: "0px" }}
      />
    ),
    Password: (
      <HiOutlineLockClosed
        color={"#ACACAC"}
        size={17}
        style={{ marginRight: "1.5em", padding: "0px" }}
      />
    ),
    "Confirm Password": (
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
      <h4 className="input-box-header">{input}</h4>
      <div className="input-box-input-field-container">
        {!state && icons[input]}
        <input
          className="input-box-input-field-text"
          placeholder={placeholder}
          onChange={(event) => handleText(event)}
          type={input !== "Email" ? "password" : "text"}
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
