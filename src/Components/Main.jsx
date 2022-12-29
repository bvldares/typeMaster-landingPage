import React from "react";
import "../App.css"
import compatibility from "../assets/shared/icon-compatible.svg"
import bluetooth from "../assets/shared/icon-bluetooth.svg"
import light from "../assets/shared/icon-light.svg"
import battery from "../assets/shared/icon-battery.svg"



export default function Main(){
    return (
        <main>
            <section className="specs-intro">
                <img src="" alt="" className="specs-intro-orange-img" />
                <img src="" alt="" className="specs-intro-neutral-img" />
                
                <div className="specs-intro-description">
                    <h2 className="specs-intro-title">
                    mechanical <br /> 
                    wireless <br />
                    Keyboard <br />
                    </h2>
                    <p className="specs-intro-body">
                    The Typemaster keyboard boasts top-notch build and practical design. 
                    It offers a wide variety of switches and keycaps, along with reliable wireless connectivity.
                    </p>
                </div>
            </section>

            <div className="specs">
                
                <div className="spec">
                    <img src={compatibility} alt="monitor icon on" className="spec-logo" />
                    <h3 className="spec-title">
                        HIGHLY <br />
                        COMPATIBLE
                    </h3>
                    <p className="spec-description">
                     Easy to use and works well with all major computer brands, 
                     gaming consoles and mobile devices.
                     Plug & play, no installation or driver needed.</p>
                </div>

                <div className="spec">
                    <img src={bluetooth} alt="bluetooth icon" className="spec-logo" />
                    <h3 className="spec-title">
                        WIRELESS <br />
                        WITH BLUETOOTH
                    </h3>
                    <p className="spec-description">
                     Powerful 2.4G RF technology allows you 
                     to connect the cordless keyboard from up to 30ft away. 
                     Simply plug the unifying receiver into your computer.
                    </p>
                </div>

                <div className="spec">
                    <img src={battery} alt="battery icon" className="spec-logo" />
                    <h3 className="spec-title">
                        HIGH CAPACITY <br />
                        BATTERY
                    </h3>
                    <p className="spec-description">
                     Equipped with a long-lasting built-in battery, 
                     you’ll never have to spend a dime on replaceable ones. 
                     Enjoy 40 hours of usage time between charges.
                    </p>
                </div>

                <div className="spec">
                    <img src={light} alt="light icon" className="spec-logo" />
                    <h3 className="spec-title">
                        RGB BACKLIT <br /> 
                        MODES
                    </h3>
                    <p className="spec-description">
                     Choose from 4 backlight brightness levels and adjustable 
                     breathing speed. Each key glows intensely 
                     in the dark and helps you type in low light conditions.
                    </p>
                </div>
            </div>
        </main>
    )
}