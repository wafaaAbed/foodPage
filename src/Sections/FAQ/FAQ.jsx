import React from "react";
import "./FAQ.css";
import { motion } from "framer-motion";
const FAQ = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      duration:.5,
    }
  };
  const data = [
    {
      id: 1,
      title: "Is Foodera Bread really baked fresh each day?",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.",
    },
    {
      id: 2,
      title: "Can I order your products online?",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.",
    },
    {
      id: 3,
      title: "Do you bake breads containing animal fats or products?",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.",
    },
    {
      id: 4,
      title: "When are you opening a shop near me?",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.",
    },
  ];
  return (
    <div>
      <h1 className="text-center pb-5">Frequently Asked Questions</h1>
      <div class="container text-center FQAFormat">
        <motion.div class="row row-cols-2 text-start "
         variants={container}
         initial="hidden"
         whileInView="visible"
        >
          {data.map((el)=>(
            <motion.div class="col" key={el.id} variants={item}>
              <h5 className="qHead">{el.title}</h5>
              <p className="text-secandary">{el.description}</p>
            </motion.div>
          ))}
        
        
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
