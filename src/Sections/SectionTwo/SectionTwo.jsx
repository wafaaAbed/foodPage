import React from "react";
import "./SectionTwo.css";
import Button from "../../Component/Button/Button";
import { motion } from "framer-motion";

const SectionTwo = () => {
  const leftSide = {
    hidden: { opacity: 1, x: -500 },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        delay: 0.5,
        duration: 3,
      },
    },
  };
  const rightSide = {
    hidden: { opacity: 1, x: 500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 3,
      },
    },
  };
  return (
    <div className="container text-center">
      <div className="row containerContent">
        <motion.div
          className="col-6 imgformat"
          variants={leftSide}
          initial="hidden"
          whileInView="visible"
          
        >
          <img src="secction2.png" alt="food" />
        </motion.div>

        <motion.div
          className="col-6 sectionContent"
          variants={rightSide}
          initial="hidden"
          whileInView="visible"
      
        >
          <h1 className="pb-3">
            We pride ourselves on making real food from the best ingredients.
          </h1>
          <p className="pb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus.
          </p>
          <Button name="Learn More" />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionTwo;
