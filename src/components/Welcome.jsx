import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaBriefcase } from "react-icons/fa";

const Welcome = () => {
  // get job past details
  const [jobdetailsData, setjobdetailstData] = useState([]);

  // const fetchStudentData = async () => {
  //   try {
  //     const res = await axios.get(`http://localhost:8000/api/get-jobpost`);
  //     console.log("Job Details", res.data);
  //     setjobdetailstData(res.data.jobPostsFormatted);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchStudentData();
  // }, []);

  return (
    <div>
      Welcom
    </div>
  );
};

export default Welcome;
