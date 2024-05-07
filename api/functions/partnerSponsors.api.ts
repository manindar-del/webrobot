import axiosInstance from "../axiosInstance";
import ApiRequest from "../axiosInstance/request";
import { endpoints } from "../endpoints";

export const addPartnerMutation = async (data: any) => {
  try {
    const res = await ApiRequest.post(
      endpoints.partnerSponsors.addPartner,
      data
    );

    return res;
  } catch (error) {
    return error;
  }
};

export const updatePartnerMutation = async (data: any) => {
  try {
    const res = await ApiRequest.put(
      endpoints.partnerSponsors.updatePartner,
      data
    );

    return res;
  } catch (error) {
    return error;
  }
};

export const hidePartnerMutation = async (data: any) => {
  try {
    const res = await ApiRequest.put(
      endpoints.partnerSponsors.hidePartner,
      data
    );

    return res;
  } catch (error) {
    return error;
  }
};

export const getPartnerMutation = async (id: string) => {
  try {
    const res = await ApiRequest.get(
      endpoints.partnerSponsors.getDetailsPartner(id)
    );

    return res;
  } catch (error) {
    return error;
  }
};

export const getAllPartnerMutation = async (data: any) => {
  try {
    const res = await ApiRequest.post(
      endpoints.partnerSponsors.getAllPartner,
      data
    );

    return res;
  } catch (error) {
    return error;
  }
};

export const deletePartnerMutation = async (data: any) => {
  console.log(data, "data");
  try {
    const res = await axiosInstance.delete(
      endpoints.partnerSponsors.deletePartner,
      { data }
    );

    return res;
  } catch (error) {
    return error;
  }
};
