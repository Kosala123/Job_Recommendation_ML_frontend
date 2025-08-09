import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import { AddJobPost, Addqualifications, Welcome } from "../components";

const LeftSide = () => {
  return (
    <div className="h-full flex flex-col py-12 flex-1 bg-lightOverlay backdrop-blur-md shadow-md min-w-210 w-300 gap-4">
      <div className="flex flex-col flex-1 overflow-y-scroll">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/addjobpost" element={<AddJobPost />} />
          <Route path="/addqualification" element={<Addqualifications />} />
        </Routes>
      </div>
    </div>
  );
};

export default LeftSide;
