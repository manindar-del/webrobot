import { GetServerSidePropsContext, NextPageContext } from "next";
import axios, { AxiosError, AxiosResponse } from "axios";
import {
  checkWindow,
  globalCatchError,
  globalCatchSucess,
  parseCookies,
} from "../../lib/functions/_helpers.lib";
import { baseUrlApi, sucessNotificationEndPoints } from "../endpoints";
// import { refreshAccessToken } from "../functions/user.api";

let context = {};
let accessToken = null;

export const setAxiosAccessToken = (_accessToken) => {
  accessToken = _accessToken;
};
export const getAxiosAccessToken = () => {
  return accessToken;
};

export const getAccessTokenFromCookies = (cookies) => {
  const token = cookies?.["token"];
  return token;
};

export const setContext = (_context) => {
  context = _context;
  const cookies = parseCookies(context?.req);
  setAxiosAccessToken(getAccessTokenFromCookies(cookies));
};

const cookies = parseCookies(context?.req);
setAxiosAccessToken(getAccessTokenFromCookies(cookies));

const axiosInstance = axios.create({
  baseURL: baseUrlApi,
});

axiosInstance.interceptors.request.use((config) => {
  const token = getAxiosAccessToken();
  if (token) {
    config.headers["x-access-token"] =
      config?.headers?.["x-access-token"] || `${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => {
    // only show success notification on this routes
    //console.log(res.config.url, "RES");

    // if (
    //   res.config.url &&
    //   sucessNotificationEndPoints.includes(res.config.url)
    // ) {
    //   globalCatchSucess(res);
    // }

    if (res?.status === 201) {
      globalCatchSucess(res, "error");
    } else if (
      res.config.url &&
      sucessNotificationEndPoints.includes(res.config.url)
    ) {
      if (checkWindow()) {
        globalCatchSucess(res, "success");
      }
    }

    return res;
  },
  // (res) => res,
  async (error) => {
    globalCatchError(error);

    // const { data, status, config } = error.response!;

    // switch (status) {
    //   case 400:
    //     console.error(data);
    //     break;

    //   case 401:
    //     console.error("unauthorized");
    //     break;

    //   case 404:
    //     console.error("/not-found");
    //     break;

    //   case 500:
    //     console.error("/server-error");
    //     break;
    // }
    return Promise.reject(error);
  }
);

export default axiosInstance;
