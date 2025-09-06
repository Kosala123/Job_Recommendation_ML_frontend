//  This file should be the right side file, I create wrong way

import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddJobPost, Addqualifications, ViewResults, Welcome } from "../components";
import QualifiacationFormPage from "./QualifiacationFormPage";

const LeftSide = () => {
  return (
    <div className="h-full flex flex-col py-12 flex-1 bg-lightOverlay backdrop-blur-md shadow-md min-w-210 w-300 gap-4">
      <div className="flex flex-col flex-1 overflow-y-scroll">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/addjobpost" element={<AddJobPost />} />
          <Route path="/addqualification" element={<Addqualifications />} />
          <Route path="/qualificationform" element={<QualifiacationFormPage />} />
          <Route path="/viewresults" element={<ViewResults />} />
        </Routes>
      </div>
    </div>
  );
};

export default LeftSide;
