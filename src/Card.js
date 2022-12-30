import React from "react";

export default function Card(props) {

    return <div className="card">
        <img onClick={() => props.handleClick(props.id)} src={props.imgURL} alt={'https://imgflip.com/s/meme/Depressed-Cat.jpg'}/>
        {/* <div onClick={() => props.handleClick(props.id)}>{props.title}</div> */}
    </div>
}