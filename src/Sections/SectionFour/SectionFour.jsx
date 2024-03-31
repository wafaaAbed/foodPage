import React from "react";
import "./SectionFour.css";
import Motion from "../../Component/Motion/Motion";
const SectionFour = () => {
  
  return (
    
    <div className="sectionFour">
        <Motion>
      <div
        className="imgBackground"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/section4.1.jpg"})`,
        }}
      >
      
        <div className="content4"
        
        >
          <h1 className="header4">
            When a man's stomach is full it makes no difference whether he is
            rich or poor.
          </h1>
          <p className="p4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus.
          </p>
          <a className="link4" href="https://www.youtube.com/"> ▶ Watch Our Story</a>
        </div>
      
      </div>
      </Motion>
    </div>

  );
};

export default SectionFour;
