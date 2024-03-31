import React from "react";
import "./passion.css";
import Button from "../../Component/Button/Button";
import Motion from "../../Component/Motion/Motion";
const Passion = () => {
  return (
    <div
      className="passionContainer"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/bakery.jpg"})`,
      }}
    >
      <div className="overlay"></div>
      <Motion>
      <div className="d-flex justify-content-evenly passionContent">
        <h3 className="text-light">
          Baked fresh daily by bakers with passion.
        </h3>
        <div>
        <Button name="Learn More"/>
        </div>
        
      </div>
      </Motion>
    </div>
  );
};

export default Passion;
