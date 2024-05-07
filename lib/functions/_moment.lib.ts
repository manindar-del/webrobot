type getDateRangeType =
  | "last_7_days"
  | "last_30_days"
  | "last_3_month"
  | "last_6_month"
  | "this_year"
  | "last_7_days"
  | string;

export const getDateRange = (type: getDateRangeType) => {
  let startDate = new Date();
  let endDate = new Date();

  if (type === "7") {
    //get last 7 days from today
    startDate.setDate(startDate.getDate() - 6);
  } else if (type === "30") {
    //get last 30 days from today
    startDate.setDate(startDate.getDate() - 29);
  } else if (type === "90") {
    //get last 3 months from today
    startDate.setMonth(startDate.getMonth() - 3);
  } else if (type === "180") {
    //get last 6 months from today
    startDate.setMonth(startDate.getMonth() - 6);
  } else if (type === "this_year") {
    //get last 7 days from today
    let start_year=endDate.getFullYear();
    startDate = new Date(start_year+"-01-01");
    endDate = new Date(start_year+"-12-31");
  }else if (type === "365") {
    //get last 7 days from today
    startDate.setFullYear(startDate.getFullYear() - 1);
  }

  return { start_date: startDate.toISOString(), end_date: endDate.toISOString() };
};
