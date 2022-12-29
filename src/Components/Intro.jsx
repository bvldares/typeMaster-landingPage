import React from "react";
import "../App.css"



export default function Intro(){
    return (
        <section className="intro">
            <div className="intro-description">
                <h1 className="intro-title">Typemaster <br /> Keyboard</h1>
                <div className="intro-body">Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.</div>
                <div className="intro-preorder">
                    <a href="#" className="intro-preorder-link link">pre-order now</a>
                    <p className="intro-release">Release on 5/27</p>
                </div>
            </div>
            <img className="intro-img" src="" alt="Typemaster keyboard black edition" />

        </section>
    )
}