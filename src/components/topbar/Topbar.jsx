import React from "react";
import "./topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro"> Minh</a>
          {/* <a href="#portfolio">Portfolio</a>
          <a href="#contact"> Contact </a> */}
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+12 345 567</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>minhpham160603@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="button" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
