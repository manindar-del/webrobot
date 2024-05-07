import ApiRequest from "../axiosInstance/request";
import { endpoints } from "../endpoints";

export const addCategoryMutation = async (data) => {
  try {
    const res = await ApiRequest.post(endpoints.category.createCategory, data);

    return res;
  } catch (error) {
    return error;
  }
};

export const getCategoryMutation = async () => {
  try {
    const res = await ApiRequest.get(endpoints.category.getCategory);
    console.log(res, "testing bla bla");
    return res;
  } catch (error) {
    return error;
  }
};
