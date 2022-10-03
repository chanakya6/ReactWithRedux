import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";
import "./routercomp.css";

const RouterFunc = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="navLinks">
          <Link to="/">Component 1</Link>
          <Link to="/component2">Component 2</Link>
          <Link to="/component3">Component 3</Link>
          <Link to="/component4">Component 4</Link>
          <Link to="/component4">Component 4</Link>
        </div>
        <Routes>
          <Route path="/" element={<Component1 />} />
          <Route path="/component2" element={<Component2 />} />
          <Route path="/component3" element={<Component3 />} />
          <Route path="/component4" element={<Component4 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterFunc;
