import ApiRequest from "../axiosInstance/request";
import { endpoints } from "../endpoints";

export const changeTicketStatus = async (data) => {
  const res = await ApiRequest.patch(
    endpoints.Tickets.statusChangeTicket,
    data
  );

  return res;
};

export const toggleUrgent = async (data) => {
  const res = await ApiRequest.patch(endpoints.Tickets.toggleUrgent, data);

  return res;
};
