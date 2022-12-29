import React from "react";
import "../App.css"
import logo from "../assets/shared/logo.svg"

export default function Header(){
    return (
        <header>
            <img className="header-logo" src={logo} alt="Logo image" />
            <a href="#" className="header-preorder-link link">pre-order now</a>
        </header>
    )
}