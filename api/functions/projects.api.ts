import ApiRequest from "../axiosInstance/request";
import { endpoints } from "../endpoints";

export const getPojectCategoryMutation = async (data: any) => {
  try {
    const res = await ApiRequest.post(endpoints.projects.projectsCategoryList, [
      "getallcategory",
      data?.category_type,
    ]);

    return res;
  } catch (error) {
    return error;
  }
};

