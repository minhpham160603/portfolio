import Topbar from "./components/topbar/Topbar";
import "./app.scss";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/port/Portfolio";
import Contact from "./components/contact/Contact";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
