import axiosInstance from "../axiosInstance";
import ApiRequest from "../axiosInstance/request";
import { endpoints } from "../endpoints";


export const myPropertyListQuery = async (data:any) => {
  try {
    const res = await ApiRequest.post(endpoints.staffmanagment.staffList, data);

    return res;
  } catch (error) {
    return error;
  }
};

export const addPropertyMutation = async (data:any) => {
  try {
    const res = await ApiRequest.post(endpoints.staffmanagment.addStaff, data);

    return res;
  } catch (error) {
    return error;
  }
};

export const updateStaffMutation = async (data:any) => {
  try {
    const res = await ApiRequest.put(endpoints.staffmanagment.updateStaff, data);

    return res;
  } catch (error) {
    return error;
  }
};

export const staffManegmentDetails = async (id: string) => {
  try {
    const res = await ApiRequest.get(endpoints.staffmanagment.staffDetails(id));

    return res;
  } catch (error) {
    return error;
  }
};

// export const stateManegmentDetails = async (data:any) => {
//   try {
//     const res = await ApiRequest.post(endpoints.staffmanagment.statGet,data);

//     return res;
//   } catch (error) {
//     return error;
//   }
// };


// export const getCategoryMutation = async (data:any) => {
//   try {
//     const res = await ApiRequest.post(endpoints.staffmanagment.staffCategoryList, data);

//     return res;
//   } catch (error) {
//     return error;
//   }
// };

// export const activeStaffDetailsMutation = async (data:any) => {
//   try {
//     const res = await ApiRequest.post(endpoints.staffmanagment.activeStaffDetails, data);

//     return res;
//   } catch (error) {
//     return error;
//   }
// };

export const deleteStaffMutation = async (data:any) => {
  console.log(data,"data")
  try {
    const res = await axiosInstance.delete(endpoints.staffmanagment.deleteStaff, data);

    return res;
  } catch (error) {
    return error;
  }
};

//   export const adsCategoryListQuery = async () => {
//     const res = ApiRequest.get(endpoints.staffmanagment.adsCategoryList);

//     return res;
//   };