import React from "react";
import rulesStyle from "./Navbar.css"

function Navbar(props){
return (
<nav className="navbar">
    <ul>
        <li className="brand">
            <a href="/">Clicky Game</a>
            </li>
            <li className="">You guessed correctly!
            </li>
            <li>Score: {props.count}| Top Score: {props.highest}</li>
            </ul>
            </nav>
)
}
export default Navbar;