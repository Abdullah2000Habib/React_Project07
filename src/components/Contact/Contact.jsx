import React from 'react';
import style from "./style.module.css";
export default function Contact() {
return (
    <>
        <div className={style.contactForm} id="contact">
            {/* left side copy and paste from work section */}
            <div className={style.left}>
                <div className={style.awesome}>
                <span >Get in Touch</span>
                <span>Contact me</span>
                <div
                    className={` blur ${style.sBlur1}`}
                    style={{ background: "#ABF1FF94" }}
                ></div>
                </div>
            </div>
            {/* right side form */}
            <div className={style.right}>
                <form>
                    <input type="text" name="user_name" className={style.user}  placeholder="Name"/>
                    <input type="email" name="user_email" className={style.user} placeholder="Email"/>
                    <textarea name="message" className={style.user} placeholder="Message"/>
                    <input type="submit" value="Send" className={`button ${style.sButton}`}/>
                <div
                    className={` blur ${style.cBlur1}`}
                    style={{ background: "var(--purple)" }}
                ></div>
                </form>
            </div>
            </div>
    </>
)
}
