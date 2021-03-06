import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Content from "./components/content/Content";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MypProfile from "./components/Pages/MyProfile";
import Feed from "./components/Pages/Feed/Feed";

function App() {
  const [previousWidth, setPreviousWidth] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const updateWidth = () => {
    const width = window.innerWidth;
    const widthLimit = 576;
    const isMobile = width <= widthLimit;
    const wasMobile = previousWidth <= widthLimit;

    if (isMobile !== wasMobile) {
      setIsOpen(!isMobile);
    }
    setPreviousWidth(width);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth());
  }, []);

  useEffect(() => {
    window.removeEventListener("resize", updateWidth());
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className="App wrapper">
        <SideBar toggle={toggle} isOpen={isOpen} />
        <Content toggle={toggle} isOpen={isOpen} />
      </div>
    </Router>
  );
}

export default App;
