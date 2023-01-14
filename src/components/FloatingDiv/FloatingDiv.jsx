import React from 'react';
import style from "./style.module.css";
export default function FloatingDiv({img,txt1,txt2}) {
return (
    <>
        <div className={style.floatingDiv}>
            <img src={img} alt='img'/>
            <span>{txt1}
            <br/>
            {txt2}</span>
        </div>
    </>
)
}
