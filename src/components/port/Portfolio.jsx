import React from "react";
import Portlist from "../portlist/Portlist";
import "./portfolio.scss";
import { useEffect, useState } from "react";
import { Vietcode, ZIM, IndeTech, Spofy } from "../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("vietcode");
  const [data, setData] = useState([]);
  const list = [
    { id: "vietcode", title: "Vietcode" },
    {
      id: "zim",
      title: "ZIM English",
    },
    {
      id: "indetech",
      title: "IndeTech",
    },
    {
      id: "spofy",
      title: "SPOFY",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "vietcode":
        setData(Vietcode);
        break;
      case "zim":
        setData(ZIM);
        break;
      case "spofy":
        setData(Spofy);
        break;
      case "indetech":
        setData(IndeTech);
        break;
      default:
        setData(Vietcode);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Works</h1>
      <ul>
        {list.map((item) => (
          <Portlist
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected} //pass the setSelected function to the child
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href="https://www.facebook.com/indetechclub/photos/a.112950633810508/353985269707042/">
            <div className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          </a>
        ))}
        {/**/}
      </div>
    </div>
  );
}
