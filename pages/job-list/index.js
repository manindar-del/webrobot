import JobList from "../../components/job-list/job-list";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery, useMutation } from "react-query";
const getCatData = () =>
  axios
    .get("/api/job")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

function index() {
  const {
    isLoading,
    error,
    data: catData,
  } = useQuery({
    queryKey: ["catData"],
    queryFn: getCatData,
  });

  if (isLoading) {
    return <h3>Loading.....</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  // console.log(catData, "testing");

  return (
    <div>
      <JobList catData={catData} />
    </div>
  );
}

export default index;
