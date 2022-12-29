import React, { useState } from "react";

export default function Card(props) {

    return <div className="card">
        <div onClick={() => props.handleClick(props.id)}>{props.title}</div>
    </div>
}