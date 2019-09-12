import React from "react";
import NavStyle from "./Navbar.css"

function Navbar(props){

    let messageColor = '';

    if (props.started) {
        messageColor = props.count ? 'is-right' : 'is-wrong';
    }

return (
<nav className="navbar">
    <ul>
        <li className="brand">
            Clicky Game
            </li>
            <li className={`message ${messageColor}`}>
                {props.message}
            </li>
            <li>Score: {props.count}| Top Score: {props.highest}</li>
            </ul>
            </nav>
)
}
export default Navbar;