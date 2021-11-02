import React from "react";
import "./portlist.scss";

export default function Portlist({ title, active, setSelected, id }) {
  return (
    <li
      className={active ? "portlist active" : "portlist"}
      onClick={() => setSelected(id)} //call the setSelect function from it's daddy
    >
      {title}
    </li>
  );
}
