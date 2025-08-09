import React, { useState } from "react";

const QualifiacationFormPage = () => {
  const initialData = {
    jobroles: "",
    company: "",
    category: "",
    location: "",
    jobdescription: "",
  };

  const [data, setData] = useState(initialData);

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
  console.log("Data", data)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Professional Profile Form</h1>
    </div>
  );
};

export default QualifiacationFormPage;
