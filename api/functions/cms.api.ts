import { userData } from "@/types/common.type";
import ApiRequest from "../axiosInstance/request";
import { endpoints } from "../endpoints";

export const fetchAboutUs = async () => {
  try {
    const res = await ApiRequest.get(endpoints.cms.about);
    return res;
  } catch (error) {
    return error;
  }
};

interface IDetails {
  _id: string,
}

export const Getbloglist = async (payload: IDetails) => {
  try {
    const res = await ApiRequest.post(endpoints.cms.getallblog, payload);

    return res;
  } catch (error) {
    return error;
  }
};

export const Getblogdetails = async (data: any) => {
  try {
    const res = await ApiRequest.get(endpoints.cms.getblogdetail, data);


    return res;
  } catch (error) {
    return error;
  }
};

export const Addblog = async (data: any) => {
  try {
    const res = await ApiRequest.post(endpoints.blog.addblog, data);

    return res;
  } catch (error) {
    return error;
  }
};
