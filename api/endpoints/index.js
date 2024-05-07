export const baseUrl = process.env.NEXT_APP_BASE_URL;
// export const baseUrlApi = `${process.env.NEXT_APP_BASE_URL}/api`;
export const baseUrlApi = `/api/`;
export const baseUrlMedia = process.env.NEXT_APP_BASE_URL;
export const socketUrl = process.env.NEXT_APP_BASE_URL;

export const mediaPath = (url) => {
  return `${baseUrlMedia}/uploads${url}`;
};

// api doc => https://militarymoves-admin.dedicateddevelopers.us/apidoc

export const endpoints = {
  auth: {
    signup: "user/signup",
    profileUpdate: "user/profile/update",
    profileUpdate1: "admin/user/update/profile",
    login: "/admin/user/signin",
    forgotPassword: "admin/user/send-password-reset-link",
    changeresetPassword: "admin/user/change-reset-password",
    changePasswordAdmin: "admin/user/change-password",
  },

  category: {
    getCategory: "/category",
    createCategory: "/category",
    getSingleCategory: (id) => {
      return `/category/${id}`;
    },
    updateCategory: (id) => {
      return `/category/${id}`;
    },
    deleteCategory: (id) => {
      return `/category/${id}`;
    },
  },

  cms: {
    about: "aboutpolicy/details",
    getprofiledata: "admin/user/profile/get",
    getallblog: "admin/blog/getall",
    getblogdetail: "admin/blog/getdetails",
  },

  dashboard: {
    getdashboardList: "admin/user/dashboard",
    downloadLog: "admin/log/download",
  },
  blog: {
    addblog: "admin/blog/add",
    updateblog: "admin/blog/update",
    deleteblog: "admin/blog/delete",
  },
  projects: {
    getallprojects: "admin/project/getall",
    getallprojectssearch: "admin/project/search",
    getproductdetails: "admin/project/details",
    projectsCategoryList: "admin/category/getall",
    projectsStatuschange: "admin/project/update/status",
  },

  manageclients: {
    getallclients: "admin/client/getall",
    getclientsdetails: "admin/client/getdetails",
    statuschange: "admin/client/change-status",
    getallactiveprojects: "admin/client/getall/active-projects",
  },

  manageprovider: {
    getallproviders: "admin/provider/getall",
    addprovider: "admin/provider/create",
    providerstatuschange: "admin/provider/change-status",
    getproviderdetails: "/admin/provider/getdetails",
    updateprovider: "/admin/provider/update",
    verify: "/admin/provider/verify",
    feature: "/admin/provider/category-change",
  },

  services: {
    getallservices: "admin/service/getall",
    addservice: "admin/service/add",
    updateservice: "admin/service/update",
    updateServiceStatus: "admin/service/update/status",
    deleteService: "admin/service/delete",
  },
  addmanagment: {
    addAds: "admin/ads-management/add",
    adsList: "admin/ads-management/getall",
    adsCategoryList: "admin/category/getall",
    activeAdsDetails: "/admin/ads-management/getall",
    deleteAds: "/admin/ads-management/delete",
    changeAdStatus: "admin/ads-management/change-status",
    adsDetails: (id) => {
      return `admin/ads-management/details/${id}`;
    },
    updateProperty: "admin/ads-management/update",
    statGet: "admin/ads-management/getstat",
    clickViewChart: "admin/click-view/graph",
    adManagementChart: "admin/click-view/ads-engagement",
  },

  staffmanagment: {
    addStaff: "admin/staff/create",
    staffList: "admin/staff/getall",
    // staffCategoryList: "admin/category/getall",
    // activeStaffDetails: "/admin/ads-management/getall",
    deleteStaff: "admin/staff/delete",
    // changeStaffStatus: "admin/ads-management/change-status",
    staffDetails: (id) => {
      return `/admin/staff/getdetails/${id}`;
    },
    updateStaff: "admin/staff/update",
    // statGet:"admin/ads-management/getstat",
    addLocation: "admin/office-location/add",
  },

  provider: {
    addProvider: "/admin/provider/create",
    getServiceCategory: "/admin/service/getall",
    addService: "/admin/provider/add-service",
    getReviews: "/admin/provider/getall/reviews",
    getClientReview: "/admin/client/getall/reviews",
  },

  partnerSponsors: {
    addPartner: "admin/partnership/add",
    deletePartner: "admin/partnership/delete",
    getAllPartner: "admin/partnership/getall",
    getDetailsPartner: (id) => {
      return `admin/partnership/getdetails/${id}`;
    },
    hidePartner: "admin/partnership/hide",
    updatePartner: "admin/partnership/update",
  },

  staff: {
    getallstaff: "admin/staff/getall",
    getstaffdetails: "admin/staff/getdetails",
  },

  Permission: {
    getallPermission: "admin/permission/getall",
    addPermission: "admin/permission/add",
    updatePermission: "admin/permission/update",
    deletePermission: "admin/permission/delete",
    DetailsPermission: "admin/permission/getdetails",
  },
  roles: {
    getallroles: "admin/role/getall",
    addroles: "admin/role/add",
    updateroles: "admin/role/update",
    deleteroles: "admin/role/delete",
    detailsRole: "admin/role/getdetails",
  },
  // pratners: {
  //   getallpratners: "admin/partnership/getall",
  // },

  Tickets: {
    getAllTickets: "admin/support-tickets/getall",
    DetailsTickets: "admin/support-tickets/getdetails",
    statusChangeTicket: "/admin/support-tickets/change-status",
    toggleUrgent: "/admin/support-tickets/mark-as-urgent",
  },

  admin: {
    getAllPermissionSearch: "admin/access/search",
    addAdmin: "admin/user/create",
    //addAdmin: "admin/staff/create",
    getalladmin: "admin/user/list",
    updateAdmin: "admin/user/update",
    detailsAdmin: "admin/user/detail",
    deleteAdmin: "admin/user/delete",
  },

  transaction: {
    getall: "admin/transaction/getall",
    getdetails: (id) => `admin/transaction/getdetails/${id}`,
    detailsTransction: "admin/transaction/getdetails",
  },
};

export const sucessNotificationEndPoints = [
  endpoints.auth.profileUpdate,
  endpoints.auth.signup,
  endpoints.auth.login,
  endpoints.services.updateServiceStatus,
  endpoints.services.updateservice,
];
