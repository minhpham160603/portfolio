import React from "react";
import "./intro.scss";

export default function intro() {
  return (
    <div className="intro" id="intro">
      <div className="bottom">
        <img src="assets/minh.png" alt=""></img>
      </div>
      <div className="top">
        <h1>This is Minh Pham</h1>
        <a href="#portfolio">
          <img src="assets/arrow.png" alt=""></img>
        </a>
      </div>
    </div>
  );
}
