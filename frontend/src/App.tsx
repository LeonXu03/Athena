import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/AuthPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Email</div>} />
        <Route path="/login" element={<LoginPage authType={"login"} />} />
        <Route path="/sign-up" element={<LoginPage authType={"signUp"} />} />
      </Routes>
    </Router>
  );
}

export default App;
