import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CategoryBotsList from "../../components/categories-bots-list/category-bots-list";
import axios from "axios";

function index() {
  const router = useRouter();

  const id = router?.query?.slug;

  const [singleData, setSingleData] = useState();
  const fetchData = async (id) => {
    await axios
      .post("/api/category/", {
        id,
      })
      .then((response) => {
        setSingleData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => fetchData(id), [id]);

  console.log(singleData);

  return <CategoryBotsList singleData={singleData} />;
}

export default index;
