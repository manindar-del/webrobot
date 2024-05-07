import CatList from "../../components/categories-list/categories-list";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery, useMutation } from "react-query";
const getCatData = () =>
  axios
    .get("/api/category")
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

  return (
    <div>
      <CatList catData={catData} />
    </div>
  );
}

export default index;
