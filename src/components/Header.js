import React from "react"
import ReactPic1 from "../images/troll-face.png"
import ReactPic2 from "../images/troll-face-2.png"
import "../style.css"

export default function Header() {
    return (
        <header className="header">
            <img className="header--image" src={ReactPic2}></img>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}