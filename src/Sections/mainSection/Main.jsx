import React from "react";
import style from "./Main.module.css";
import Button from "../../Component/Button/Button";
import { motion } from "framer-motion";
const Main = () => {
  const heading = "Good food choices are good investments.";
  const hVarient = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const spanVarient = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const opacitying = {
    hidden: { x: -650 },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 2,
      },
    },
  };

  return (
    <div className="text-center container">
      <div className={style.containerMain}>
        <div className={` ${style.mainContent}`}>
          <motion.h1
            className={style.header}
            variants={spanVarient}
            initial="hidden"
            whileInView="visible"
          >
            {heading.split("").map((char, index) => (
              <motion.span key={index} variants={spanVarient}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p variants={opacitying} initial="hidden" whileInView="visible">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum amet leo.
          </motion.p>

          <motion.div
            className={`col mt-4 ${style.containerBtns}`}
            variants={opacitying}
            initial="hidden"
            whileInView="visible"
          >
            <Button name="Order Now 🎁" />
            <button className={style.btns}>Learn More →</button>
          </motion.div>
        </div>
        <div className={`${style.imgcontainer}`}>
          <img src="mainFood.png" alt="main food" className={style.picFormat} />
        </div>
      </div>
    </div>
  );
};

export default Main;
