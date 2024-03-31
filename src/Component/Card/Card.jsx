import React from "react";
import Button from "../Button/Button";
import "./Card.css";
import { motion } from "framer-motion";
const Card = ({ data }) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="menue"
      variants={container}
      initial="hidden"
      whileInView="visible"
    >
      {data.map((el) => (
        <motion.div className="card border-0 " style={{ width: "100%" }} key={el.id}
        variants={item}
        >
          <img
            src={el.img}
            className="card-img-top rounded"
            alt={el.title}
            style={{ width: "100%", height: "100%" }}
          />
          <div className="card-body text-start">
            <h5 className="card-title">{el.title}</h5>
            <p className="card-text text-muted">
              Time: {el.time} Minutes | Serves: {el.serves}
            </p>
            <h2 className="price mb-3">
              $ {el.price} <del className="priceBefore">${el.bPrice}</del>{" "}
            </h2>
            <hr />
            <Button name="Order Now" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Card;
