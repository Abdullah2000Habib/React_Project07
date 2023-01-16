import React from 'react';
import style from "./style.module.css";
export default function Card({emoji,heading,detail}) {
  return (
    <>
        <div className={style.card}>
          <img src={emoji} alt="emoji"/>
          <span>{heading}</span>
          <span>{detail}</span>
          <button className={style.cButton}>LEARN MORE</button>
        </div>
    </>
  )
}
