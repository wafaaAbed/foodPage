import React from "react";
import "./SectionThree.css";
import Button from "../../Component/Button/Button";
import { motion } from "framer-motion";
const SectionThree = () => {
  const leftSide = {
    hidden: { opacity: 1,x:-500 },
    visible: {
      opacity: 1,
      x:0,
      transition: {
      delay:.5,
      duration:3
      }
    }
  };
  const rightSide = {
    hidden: { opacity: 1,x:500 },
    visible: {
      opacity: 1,
      x:0,
      transition: {
      delay:.5,
      duration:3
      }
    }
  };
  const listItem = [
    "Purus a odio finibus bibendum.",
    "Etiam sed dolor ac diam volutpat.",
    "Erat volutpat aliquet imperdiet.",
  ];
  return (
    <div className="container sectionThree">
      <div className="row threeContainer">
        <motion.div className="col-6 mainSectionThree"
        variants={leftSide} initial="hidden" whileInView="visible"
        >
          <h1 className="pb-3">
            We make everything by hand with the best possible ingredients.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus.Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts.
          </p>

          <ul className="listing mb-4">
            {listItem.map((el, index) => (
              <li key={index}>
                {" "}
                <span className="cheaked">✔</span>
                {el}
              </li>
            ))}
          </ul>
          <Button name="Learn More" />
        </motion.div>
        <motion.div className="col-6 imgSectionThree mt-3"
        variants={rightSide} initial="hidden" whileInView="visible">
          <img alt="food2" src="section3.png" />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionThree;
