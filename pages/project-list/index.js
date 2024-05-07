import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectList from "../../components/project-list/project-list";
function index() {
  const [projData, setProjData] = useState(null);
  useEffect(() => {
    // Make a GET request to the API route
    axios
      .get("/api/project")
      .then((response) => {
        setProjData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return <ProjectList projData={projData} />;
}

export default index;
