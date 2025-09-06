import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ViewResults = () => {
  const id = localStorage.getItem("userId");

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPrediction = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/get-prediction-details/${id}`
      );
      console.log("Full backend response:", res.data);

      // ✅ set prediction directly (backend already sends object)
      setPrediction(res.data.output);
      // toast.success(res.data.message);
      setPrediction(res.data.output);
    } catch (error) {
      console.error("Error fetching prediction:", error);
      toast.error("Failed to fetch prediction results");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchPrediction();
  }, [id]);

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen text-xl font-semibold">
  //       Loading results...
  //     </div>
  //   );
  // }

  // if (!prediction) {
  //   return (
  //     <div className="flex justify-center items-center h-screen text-red-600 text-xl">
  //       No prediction results found.
  //     </div>
  //   );
  // }
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          {/* Spinner */}
          <div className="w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>

          {/* Text below spinner */}
          <p className="mt-4 text-lg font-semibold text-green-700">
            Fetching Prediction Results...
          </p>
        </div>
      </div>
    );
  }

  if (!prediction) {
    return (
      <div className="flex justify-center items-center h-screen text-red-600 text-xl">
        No prediction results found.
      </div>
    );
  }

  // return (
  //   <div className="p-6 max-w-4xl mx-auto">
  //     <h1 className="text-2xl font-bold mb-4">Prediction Results</h1>

  //     {!prediction ? (
  //       <p className="text-gray-500">Loading results...</p>
  //     ) : (
  //       <div className="space-y-6">
  //         {/* Predicted Category */}
  //         <div className="p-4 bg-blue-100 rounded-lg shadow">
  //           <h2 className="text-lg font-semibold text-blue-800">
  //             Predicted Category
  //           </h2>
  //           <p className="text-gray-800 text-xl mt-2">
  //             {prediction.predicted_category}
  //           </p>
  //         </div>

  //         {/* Recommended Jobs */}
  //         <div>
  //           <h2 className="text-lg font-semibold mb-3">Recommended Jobs</h2>
  //           <div className="grid md:grid-cols-2 gap-4">
  //             {prediction.recommended_jobs.map((job, index) => (
  //               <div
  //                 key={index}
  //                 className="p-4 border rounded-lg shadow hover:shadow-md transition"
  //               >
  //                 <h3 className="text-lg font-bold text-gray-800">
  //                   {job.jobrole}
  //                 </h3>
  //                 <p className="text-gray-600">{job.company}</p>
  //                 <p className="text-sm text-gray-500">
  //                   Category: {job.category}
  //                 </p>
  //                 <p className="text-sm text-green-600 mt-2">
  //                   Similarity Score: {(job.similarity_score * 100).toFixed(2)}%
  //                 </p>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Prediction Results</h1>

      {/* Predicted Category */}
      <div className="bg-green-100 border border-green-400 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold">
          🎯 Predicted Job Category:{" "}
          <span className="text-green-800">
            {prediction.predicted_category}
          </span>
        </h2>
      </div>

      {/* Recommended Jobs */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Recommended Jobs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {prediction.recommended_jobs.map((job, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {job.jobrole}
              </h3>
              <p className="text-gray-600">
                <span className="font-medium">Company:</span> {job.company}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Category:</span> {job.category}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Similarity Score:</span>{" "}
                {(job.similarity_score * 100).toFixed(2)}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewResults;
