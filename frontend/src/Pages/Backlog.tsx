import React from "react";
import "../css/Pages/SprintPage/SprintPage.css"

import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";

export default function BacklogPage(){
  return (
    <div>
      <Sidebar/>
      <Header str="Backlog" />
      </div>
  );
}
