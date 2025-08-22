import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashbord, Login, SignUp } from "./containers";
import QualifiacationFormPage from "./components/QualifiacationFormPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    // <BrowserRouter>
    <div className="w-screen min-h-screen h-auto flex items-center justify-center">
      <ToastContainer />
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashbord/*" element={<Dashbord />} />
        {/* <Route path="/qualificationform" element={<QualifiacationFormPage />} /> */}
      </Routes>
    </div>
    // </BrowserRouter>
  );
}

export default App;
