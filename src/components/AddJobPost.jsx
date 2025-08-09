// import React, { useState } from "react";

// const AddJobPost = () => {
//   const initialData = {
//     jobRole: "",
//     company: "",
//     category: "",
//     location: "",
//     description: "",
//   };
//   const [data, setData] = useState(initialData);
//   const handleOnChange = (field, value) => {
//     setData((prevData) => ({
//       ...prevData,
//       [field]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // const response = await axios.post(
//       //   `http://localhost:8000/api/add-candidates`,
//       //   data
//       // );
//       // console.log("response", response);
//       // setData(initialData);
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4 ">Post Job Vacancy</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         {["jobRole", "company", "category", "location"].map((field) => (
//           <div key={field}>
//             <label className="block text-sm font-medium capitalize mb-1">
//               {field}
//             </label>
//             <input
//               type="text"
//               value={data.jobRole}
//               // onChange={handleChange}
//               // onChange={(e) => handleOnChange("name", e.target.value)}
//               className="w-full border px-3 py-2 rounded"
//               placeholder={`Enter ${field}`}
//             />
//           </div>
//         ))}
//       </div>

//       <div className="mb-6">
//         <label className="block text-sm font-medium mb-1">Description</label>
//         <textarea
//           type="text"
//           // value={formData.description}
//           // onChange={handleChange}
//           rows="5"
//           className="w-full border px-3 py-2 rounded"
//           placeholder="Describe the job role..."
//         />
//       </div>

//       <div className="flex justify-between">
//         <button
//           // onClick={() => navigate("/")}
//           className="text-sm underline text-gray-600"
//         >
//           ← Back
//         </button>
//         <button
//           // onClick={handleSubmit}
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddJobPost;

import axios from "axios";
import React, { useState } from "react";

const AddJobPost = () => {
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
      const response = await axios.post(
        `http://localhost:8000/api/add-jobpost`,
        data
      );
      console.log("response", response);
      setData(initialData);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  console.log("Data", data)

  return (
    <div> Add job post</div>
  );
};

export default AddJobPost;
