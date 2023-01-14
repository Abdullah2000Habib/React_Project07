import React from 'react';
import style from "./style.module.css";
export default function Navbar() {
return (
    <>
        <div className={style.wrapper}>
            <div className={style.left}>
                <div className={style.name}>Andrew</div>
                <span>Toggle</span>
            </div>
            <div className={style.right}>
                <div className={style.list}>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <button className={`button ${style.nButton }`}>Contact Us</button>
            </div>
        </div>
    </>
)
}
