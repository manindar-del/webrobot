import { endpoints } from "@/api/endpoints";
import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../axiosInstance";
import ApiRequest from "../axiosInstance/request";

export const changeStatus = async (data) => {
  const res = await ApiRequest.patch(
    endpoints.manageclients.statuschange,
    data
  );
  return res;
};

export const providerchangeStatus = async (data) => {
  const res = await ApiRequest.patch(
    endpoints.manageprovider.providerstatuschange,
    data
  );
  return res;
};

export const changeVerification = async (data) => {
  const res = await ApiRequest.patch(endpoints.manageprovider.verify, data);
  return res;
};

// export const changeStatus = () => {
//   const queryClient = useQueryClient();
//   return useMutation(
//     async (post: any) => {
//       return axiosInstance
//         .patch(endpoints.manageclients.statuschange, post)
//         .then(({ data }) => {
//           return data;
//         });
//     },
//     {
//       onSuccess: () => {
//         queryClient.refetchQueries("getallads");
//       },
//     }
//   );
// };


export const changeCategoryFeatured = async (data) => {
  const res = await ApiRequest.patch(endpoints.manageprovider.feature, data);
  return res;
};