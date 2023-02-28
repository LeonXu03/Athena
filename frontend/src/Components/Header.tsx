import React from "react";

import "../css/Components/Sprints/Header.css"

interface Props {
    str: string;
}

export default function Header(props: Props){
    return(
        <div className="nav">
            <h1 className="title">{props.str}</h1>
            <hr/>
        </div>
    )
}
