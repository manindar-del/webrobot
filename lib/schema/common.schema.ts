import * as yup from "yup";
import validationText from "@/json/messages/validationText";

export const AddAddsSchema = yup.object().shape({
  ads_title: yup
    .string()
    .required(validationText.error.ads_title)
    .max(50, "Oops! You can not enter more the 50 Char"),
  description: yup
    .string()
    .required(validationText.error.description)
    .max(250, "Oops! You can not enter more the 250 Char"),
  category_id: yup.string().required(validationText.error.category),
  //service_category_id: yup.string().required(validationText.error.category),
  // client_website: yup
  //   .array()
  //   .min(1, validationText.error.tags)
  //   .required(validationText.error.tags),
  // state: yup.string().required(validationText.error.state),

  client_website: yup
    .string()
    .url("Invalid URL")
    // .matches(
    //    /((https?:\/\/)?((www|\w\w)\.)?\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/,
    //   ///\bhttps?:\/\/[^\s]+\b/g,
    //   "Invalid  URL"
    // )
    .required("Enter Link field"),

  start_date: yup.string().required(validationText.error.start_date),
  end_date: yup.string().required(validationText.error.end_date),
});





export const AddStaffSchemaLocation = yup.object().shape({
  region: yup.string().required("Select Region Field"),
  state: yup.string().required("Select State Field"),
  city: yup.string().required("Select City Field"),
  regional_manager: yup.string().required("Select Region manager field"),
  office_administrator: yup.string().required("Select Office administartor field"),

});




export const AddStaffSchema = yup.object().shape({
  full_name: yup.string().required(validationText?.errorStaff?.full_name),
  email: yup.string().email().required(validationText?.errorStaff?.email),
  phone: yup
    .string()
    .required(validationText?.errorPartner?.phone_number)
    .min(10, "Oops! minimum 10 characters")
    .max(20, "Oops! You can not enter more then 20 characters"),
  //location: yup.string().required(validationText?.errorStaff?.location),
  state: yup.string().required(validationText?.errorProvider?.state),
  city: yup.string().required(validationText?.errorProvider?.city),
  country: yup.string().required(validationText?.errorProvider?.country),
});

export const AddServiceProviderSchema = yup.object().shape({
  full_name: yup.string().required(validationText.error.common),
  email: yup.string().required(validationText.error.common),
  phone: yup.string().required(validationText.error.common),
  // location: yup.string().required(validationText.error.common),
  dob: yup.string().required(validationText.error.common),
  gender: yup.string().required(validationText.error.common),
  about_service: yup.string().required(validationText.error.common),
  state: yup.string().required(validationText.error.common),
  city: yup.string().required(validationText.error.common),
  home_address: yup.string().required(validationText.error.common),
  business_address: yup.string().required(validationText.error.common),
  nin_number: yup.string().required(validationText.error.common),
  // specialization: yup.string().required(validationText.error.common),
  qualification: yup.string().required(validationText.error.common),
  status: yup.string().required(validationText.error.common),
  profile_image: yup.string().required(validationText.error.common),
  cv: yup.string().required(validationText.error.common),
  // service_category: yup.string().required(validationText.error.common),
});

export const AddPartnerSchema = yup.object().shape({
  name: yup.string().required(validationText?.errorPartner?.name),
  company_name: yup
    .string()
    .required(validationText?.errorPartner?.company_name),
  category_id: yup.string().required(validationText?.errorPartner?.category_id),
  tier: yup.string().required(validationText?.errorPartner?.tier),
  // phone_number: yup
  //   .number()
  //   .required(validationText?.errorPartner?.phone_number)
  //   .min(10, "Oops! minimum 10 characters")
  //   .max(16, "Oops! You can not enter more the 16 characters"),
  phone_number: yup
    .string()

    .required(validationText?.errorPartner?.phone_number)
    .min(10, "Oops! minimum 10 characters")
    .max(20, "Oops! maximum 20 characters"),
  // .max(20, "Oops! You can not enter more than 20 characters"),
  email: yup.string().email().required(validationText?.errorPartner?.email),
  country: yup.string().required(validationText.errorPartner?.country),
  state: yup.string().required(validationText.errorPartner?.state),
  city: yup.string().required(validationText.errorPartner?.city),
  // location: yup.string().required(validationText?.errorPartner?.location),
  start_date: yup.string().required(validationText?.errorPartner?.start_date),
  end_date: yup.string().required(validationText?.errorPartner?.end_date),
});

export const handleChangeNum = yup.object().shape({
  full_name: yup.string().required(validationText?.errorStaff?.full_name),
  email: yup.string().email().required(validationText?.errorStaff?.email),
  // phone: yup
  //   .number()
  //   .required(validationText?.errorStaff?.phone)
  //   .min(10, "Oops! minimum 10 characters")
  //   .max(16, "Oops! You can not enter more the 16 characters"),

  phone: yup
    .string()
    .required(validationText?.errorStaff?.phone)
    .min(10, "Oops! minimum 10 characters")
    .max(16, "Oops! You can not enter more then 16 characters"),

  location: yup.string().required(validationText?.errorStaff?.location),
});

export const AddProviderSchema = yup.object().shape({
  full_name: yup.string().required(validationText?.errorProvider?.full_name),
  ///last_name: yup.string().required(validationText?.errorProvider?.last_name),

  // phone: yup
  // .number()
  // .required(validationText?.errorPartner?.phone_number)
  // .min(10, "Oops! minimum 10 characters")
  // .max(16, "Oops! You can not enter more the 16 characters"),

  // phone: yup.string().required(validationText?.errorProvider?.phone),

  phone: yup
    .string()
    .required(validationText?.errorProvider?.phone)
    .min(10, "Oops! minimum 10 characters")
    .max(16, "Oops! You can not enter more then 16 characters"),

  email: yup.string().email().required(validationText?.errorProvider?.email),
  // location: yup.string().required(validationText?.errorProvider?.location),
  dob: yup.string().required(validationText?.errorProvider?.dob),
  gender: yup.string().required(validationText?.errorProvider?.gender),
  // about_service: yup
  //   .string()
  //   .required(validationText?.errorProvider?.about_service),
  state: yup.string().required(validationText?.errorProvider?.state),
  city: yup.string().required(validationText?.errorProvider?.city),
  country: yup.string().required(validationText?.errorProvider?.country),
  business_address: yup
    .string()
    .required(validationText.errorProvider.business_address),
  // home_address: yup
  //   .string()
  //   .required(validationText?.errorProvider?.home_address),
  // business_address: yup
  //   .string()
  //   .required(validationText?.errorProvider?.business_address),
  // nin_number: yup.string().required(validationText?.errorProvider?.nin_number),
  // specialization: yup

  // .array()
  // .min(1, validationText.errorProvider.specialization)
  // .required(validationText.errorProvider.specialization),

  qualification: yup
    .string()
    .required(validationText?.errorProvider?.qualification),
  qualification_status: yup
    .string()
    .required(validationText?.errorProvider?.qualification_status),
  // service_category: yup
  //   .string()
  //   .required(validationText?.errorProvider?.service_category),
});

export const AddProviderServiceSchema = yup.object().shape({
  // service_title: yup
  //   .string()
  //   .required(validationText?.errorProviderService?.service_title),
  // service_description: yup
  //   .string()
  //   .required(validationText?.errorProviderService?.service_description),
  service_category: yup
    .string().nullable()
    .required(validationText?.errorProviderService?.service_category_id),

  // time: yup
  //   .string()
  //   .required(validationText?.errorProviderService?.service_category_id),

  specialization: yup
    .array()
    .min(1, validationText.errorProvider.specialization)
    .required(validationText.errorProvider.specialization),
  city: yup.string().required(validationText?.errorProviderService?.city),
  state: yup.string().required(validationText?.errorProviderService?.state),
  address: yup
    .string()
    .required(validationText?.errorProviderService?.description),
  business_phone: yup
    .string()
    .required(validationText?.errorProviderService?.business_phone),
  // description: yup.string().required("Enter Description"),
  about_service: yup.string().required("Enter Description"),
});

export const defaultValue = {
  name: "",
  company_name: "",
  category_id: "",
  tier: "",
  phone_number: "",
  email: "",
  location: "",
  start_date: "",
  end_date: "",
  country: "",
  city: "",
  state: "",
};
