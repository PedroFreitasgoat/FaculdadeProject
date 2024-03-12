import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>Sobre sua UNIVERSIDADE</h3>
        <h2>Nurtuting Tomorroe's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis
          pariatur illo quia atque eum necessitatibus provident obcaecati id
          nisi reprehenderit iure, modi voluptate tempora.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, at
          explicabo laudantium fugiat perspiciatis quaerat?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          asperiores, ex et, fugiat necessitatibus quasi ullam commodi laborum
          labore, nihil tenetur! Sunt, doloribus.
        </p>
      </div>
    </div>
  );
};

export default About;
