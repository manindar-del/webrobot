  import axiosInstance from "../axiosInstance";
  import ApiRequest from "../axiosInstance/request";
  import { endpoints } from "../endpoints";


export const myPropertyListQuery = async (data:any) => {
    try {
      const res = await ApiRequest.post(endpoints.addmanagment.adsList, data);
  
      return res;
    } catch (error) {
      return error;
    }
  };

  export const addPropertyMutation = async (data:any) => {
    try {
      const res = await ApiRequest.post(endpoints.addmanagment.addAds, data);
  
      return res;
    } catch (error) {
      return error;
    }
  };

  export const updatePropertyMutation = async (data:any) => {
    try {
      const res = await ApiRequest.put(endpoints.addmanagment.updateProperty, data);
  
      return res;
    } catch (error) {
      return error;
    }
  };

  export const adsManegmentDetails = async (id: string) => {
    try {
      const res = await ApiRequest.get(endpoints.addmanagment.adsDetails(id));
  
      return res;
    } catch (error) {
      return error;
    }
  };

  export const stateManegmentDetails = async (data:any) => {
    try {
      const res = await ApiRequest.post(endpoints.addmanagment.statGet,data);
  
      return res;
    } catch (error) {
      return error;
    }
  };


  export const getCategoryMutation = async (data:any) => {
    try {
      const res = await ApiRequest.post(endpoints.addmanagment.adsCategoryList, data);
  
      return res;
    } catch (error) {
      return error;
    }
  };

  export const activeAdsDetailsMutation = async (data:any) => {
    try {
      const res = await ApiRequest.post(endpoints.addmanagment.activeAdsDetails, data);
  
      return res;
    } catch (error) {
      return error;
    }
  };

  export const deleteAdsMutation = async (data:any) => {
    try {
      const res = await axiosInstance.delete(endpoints.addmanagment.deleteAds, data);
  
      return res;
    } catch (error) {
      return error;
    }
  };

//   export const adsCategoryListQuery = async () => {
//     const res = ApiRequest.get(endpoints.addmanagment.adsCategoryList);
  
//     return res;
//   };