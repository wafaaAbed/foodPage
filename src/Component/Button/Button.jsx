import React from 'react';
import style from "./Button.module.css"
const Button = ({name}) => {
  return (
    <button className={style.btns}>{name}</button>
  );
}

export default Button;
