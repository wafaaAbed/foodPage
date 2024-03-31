import React, { Fragment } from "react";
import { motion } from "framer-motion";
const Motion = ({ children }) => {
  const leftSide = {
    hidden: { opacity: 1, x: -800 },
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
    hidden: { opacity: 1, x: 800 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 3,
      },
    },
  };
  const center = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };
  return (
    <motion.children variants={center} initial="hidden" whileInView="visible">
      {children}
    </motion.children>
  );
};

export default Motion;
