import React from "react";
import "./section5.css";
import Card from "../../Component/Card/Card";
import Motion from "../../Component/Motion/Motion";
const SectionFive = () => {
  const data = [
    {
      id: 1,
      img: "se1.jpg",
      time: "15 - 20 ",
      serves: "1",
      bPrice: "11.5",
      price: "10",
      title:"Rainbow Vegetable Sandwich",

    },
    {
      id: 2,
      img: "se3.jpg",
      time: "30 - 45 ",
      serves: "3",
      bPrice: "55.2",
      price: "40",
      title:"Rainbow Vegetable Sandwich",
    },
    {
      id: 3,
      img: "se2.jpg",
      time: "10 -15 ",
      serves: "4",
      bPrice: "12.2",
      price: "11",
      title:"Raspberry Stuffed French Toast",
    },
  ];

  return (
    <div className="container pt-3 pb-5">
      <Motion>
      <div className="section5"
             >
        <h1>Explore Our Foods</h1>
        <p className="text-center pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
          tellus. Far far away, behind the word mountains, far from the
          countries Vokalia and Consonantia, there live the blind texts.
          Separated they live in Bookmarksgrove.
        </p>
      </div>
      </Motion>
      <div class="text-center">
        
        <Card data={data} />
      
      </div>

    
    </div>
  );
};

export default SectionFive;
