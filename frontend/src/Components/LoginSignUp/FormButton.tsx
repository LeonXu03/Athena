import React from "react";
import "../../css/Components/LoginSignUp/FormButton.css";
export default function FormButton({ submitType }: { submitType: "Login" }) {
  return (
    <button className="form-button-submit">
      {submitType === "Login" ? "LOGIN" : "SignUp"}
    </button>
  );
}
