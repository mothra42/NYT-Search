import React from "react";
import {Link} from "react-router";
import Navbar from "./Navbar";
//import Footer from "./common/Footer";

const Main = props => (
  <div>
    <Navbar />
    {props.children}
  </div>
);

export default Main;
