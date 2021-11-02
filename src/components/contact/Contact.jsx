import React from "react";
import "./contact.scss";
import { ZIM } from "../data";
import { useState } from "react";

export default function Contact() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 5)
      : setCurrentSlide(currentSlide < 5 ? currentSlide + 1 : 0);
  };
  return (
    <div className="contact" id="contact">
      <img
        src={"assets/arrow.png"}
        alt=""
        className="imgleft"
        onClick={() => handleClick("left")}
      ></img>

      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {ZIM.map((d) => (
          <div className="container">
            <div className="imgcontainer">
              <img src={d.img} alt=""></img>
            </div>
          </div>
        ))}
      </div>

      <img
        src="assets/arrow.png"
        alt=""
        className="imgright"
        onClick={() => handleClick("right")}
      ></img>
    </div>
  );
}
