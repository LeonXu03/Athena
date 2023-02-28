import React from "react";
import logo from './logo.png'
import { Link } from 'react-router-dom';

import "../css/Components/Sprints/Sidebar.css"
export default function Sidebar(){
    
    return(
        <div className="bar">
            <div className="sidebar">
                <h1 className="header"><img src={logo} className="logo"/>Athena</h1>
                <div className="text"><span className="material-icons">view_list</span><Link to="/sprints" className="remove_effect">Sprints</Link></div>
                <div className="text"><span className="material-icons">calendar_month</span><Link to="/calendar" className="remove_effect">Calendar</Link></div>
                <div className="text"><span className="material-icons">confirmation_number</span><Link to="/tickets" className="remove_effect">Tickets</Link></div>
                <div className="text"><span className="material-icons">archive</span><Link to="/backlog" className="remove_effect">Backlog</Link></div>
                <div className="settings"><span className="material-icons">settings</span><Link to="/settings" className="remove_effect"> Settings</Link></div>
            </div>
        </div>
    )
}
