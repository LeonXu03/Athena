import React from "react";
import "../css/Pages/SprintPage/SprintPage.css"

import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";

export default function CalendarPage(){
  return (
    <div>
      <Sidebar/>
      <Header str="Calendar" />
      </div>
  );
}
