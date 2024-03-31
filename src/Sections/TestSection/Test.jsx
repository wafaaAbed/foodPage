import React from "react";
import "./Test.css";
import Slider from "../../Component/Slider/Slider";
const Test = () => {
  const devlopers= [{id:1, image:"personal.jpg", devloper:"Hamooda - Backend"},
  {id:2, image:"personal2.jpg", devloper:"Wafa Joundiah - Frontend"},
  {id:3, image:"personal1.jpg",  devloper:"Bessan Joundiah - web Desginer"},
]
  return (
    <div className="testContainer position-relative">
      <h1 className="text-light p-5 text-center">Testimonials</h1>
      <Slider devlopers={devlopers} />
    </div>
  );
};

export default Test;
