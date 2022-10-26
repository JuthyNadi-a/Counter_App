import React from "react";
import Class from "./Button.module.css";

const Button = (props) => {
    return (
        <button className={Class.buttonClass} type = {props.type || "button"} onClick= {props.click}>
            {props.children}
        </button>
    )
}

export default Button;