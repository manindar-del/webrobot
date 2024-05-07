import ApiRequest from "../axiosInstance/request";
import { endpoints } from "../endpoints";

export const getAllTransactions = async (data) => {
  const res = await ApiRequest.post(endpoints.transaction.getall, data);

  return res;
};
