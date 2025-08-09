import React from "react";
import { Leftside, Rightside } from "../components";

const Dashbord = () => {
  return (
    <div className="w-screen h-screen flex items-center bg-gradient-to-b">
      <Rightside />
      <Leftside />
    </div>
  );
};

export default Dashbord;