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
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Add Your Qualifications</h1>
      <p className="text-gray-600 mb-8">
        Choose how you'd like to share your background
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* CV Upload */}
        <div className="border rounded p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">Upload Your CV</h2>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setSelectedFile(e.target.files?.[0])}
            className="mb-2"
          />
          {selectedFile && (
            <p className="text-sm text-green-600">
              Selected: {selectedFile.name}
            </p>
          )}
          <button
            // onClick={() => navigate("/job-matching")}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
          >
            Submit CV
          </button>
        </div>

        {/* Manual Entry */}
        <div className="border rounded p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">Fill Details Manually</h2>
          <p className="text-gray-600 mb-4">
            Enter your qualifications manually.
          </p>
          <button
            onClick={handleManualEntryClick}
            // onClick={() => navigate("/qulificationform")}
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            Add Professional Background & Qualification
          </button>
        </div>

        {/* Placeholder inputs shown after button click */}
        {showPlaceholders && (
          <div className="mt-8 space-y-4">
            {[1, 2, 3, 4, 5].map((index) => (
              <input
                key={index}
                type="text"
                placeholder={`Qualification Detail ${index}`}
                className="w-full border p-2 rounded"
              />
            ))}
          </div>
        )}
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-6 text-sm text-gray-600 underline"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Addqualifications;
