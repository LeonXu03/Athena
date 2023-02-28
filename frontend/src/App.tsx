import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/AuthPage";
import SprintPage from "./Pages/SprintPage";
import CalendarPage from "./Pages/Calendar";
import BacklogPage from "./Pages/Backlog";
import TicketsPage from "./Pages/Tickets";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Email</div>} />
        <Route path="/login" element={<LoginPage authType={"login"} />} />
        <Route path="/sign-up" element={<LoginPage authType={"signUp"} />} />
        <Route path="/sprints" element={<SprintPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/backlog" element={<BacklogPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
