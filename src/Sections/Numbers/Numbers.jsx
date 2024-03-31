import React from "react";
import "./Numbers.css";
import CountUp from "react-countup";
import Motion from "../../Component/Motion/Motion";

const Numbers = () => {
  return (
    <div className="text-center mainContainer">
        <Motion>
      <div className="row row-cols-4 mainContent">
      
        <div className="col">
          <h3>
            <CountUp start={0} end={4240} duration={4} />+
          </h3>
          <p>SAVINGS</p>
        </div>
        <div className="col">
          <h3>  <CountUp start={0} end={3240} duration={4} />+</h3>
          <p>PHOTOS</p>
        </div>
        <div className="col">
          <h3>  <CountUp start={0} end={1240} duration={4} />+</h3>
          <p>ROCKETS</p>
        </div>
        <div className="col">
          <h3>  <CountUp start={0} end={240} duration={4} />+</h3>
          <p>GLOBES</p>
        </div>
        
      </div>
      </Motion>
    </div>
  );
};

export default Numbers;
