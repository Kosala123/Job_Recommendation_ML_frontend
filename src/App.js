import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashbord, Login, SignUp } from "./containers";
import QualifiacationFormPage from "./components/QualifiacationFormPage";

function App() {
  return (
    // <BrowserRouter>
      <div className="w-screen min-h-screen h-auto flex items-center justify-center">
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashbord/*" element={<Dashbord />} />
          <Route path="/qualificationform" element={<QualifiacationFormPage />} />
        </Routes>
      </div>
    // </BrowserRouter>
  );
}

export default App;
