import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addqualifications = () => {
  const initialData = {
    jobroles: "",
    company: "",
    category: "",
    location: "",
    jobdescription: "",
  };
  const [data, setData] = useState(initialData);

  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [showPlaceholders, setShowPlaceholders] = useState(false);

  const handleOnChange = (field, value) => {
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post(
      //   `http://localhost:8000/api/add-jobpost`,
      //   data
      // );
      // console.log("response", response);
      setData(initialData);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // Function to handle showing placeholders
  const handleManualEntryClick = () => {
    setShowPlaceholders(true);
  };

  return (
    <div>
      Add Qlification
    </div>
    
  );
};

export default Addqualifications;
