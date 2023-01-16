import React from 'react';
import Glasses from "../../assets/img/glasses.png";
import heartEmoji from "../../assets/img/heartemoji.png";
import Humble from "../../assets/img/humble.png";
import Card from '../Card/Card';
import resume from "./resume.pdf";
import style from "./style.module.css";

export default function Services() {
return (
    <>
        <div className={style.services}>
            {/* Left Side */}
            <div className={style.awesome}>
                <span>My Awesome</span>
                <span>services</span>
                <span>
                Lorem ispum is simpley dummy text of printing of printing Lorem
                <br />
                ispum is simpley dummy text of printing
                </span>
                <a href={resume} download>
                    <button className={`button ${style.sButton}`}>Download CV</button>
                </a>
                <div className={`blur ${style.sBlur1}`} style={{ background: "#ABF1FF94" }} ></div>
            </div>
            {/* Right Side */}
            <div className={style.cards}>
                <div style={{left:"14rem"}}>
                    <Card emoji={heartEmoji} heading={'Design'} detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}/>
                </div>
                <div style={{top:"12rem",left:"-4rem"}}>
                    <Card emoji={Glasses} heading={"Developer"} detail={"Html, Css, JavaScript, React, Nodejs, Express"}/>
                </div>
                <div style={{top:"19rem",left:"12rem"}}>
                    <Card  emoji={Humble} heading={"UI/UX"} detail={"Lorem ispum dummy text are usually use in section where we need some random text"}/>
                </div>
                <div
                className={`blur ${style.sBlur2}`}
                style={{ background: "var(--purple)" }}
                ></div>
            </div>
        </div>
    </>
)
}
