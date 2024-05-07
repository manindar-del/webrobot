import events from "../../json/events/events";
import eventEmitter from "../../services/event.emitter";
import cookie from "cookie";
import moment from "moment";
import dayjs, { Dayjs } from "dayjs";

/**
 * Check if the window object exists.
 * @returns A function that checks if the window is undefined.
 */
export function checkWindow() {
  return typeof window !== "undefined";
}

export function isInServer() {
  return typeof document === "undefined";
}

export const convertToIso = (date) => {
  return dayjs(date).toISOString();
};

export const convertToIsoMoment = (date) => {
  return moment(date).toISOString(true);
};

export const renderPrice = (price) => {
  let pr = Number(price);
  return `$ ${pr.toFixed(2)}`;
};

export function isApple() {
  if (typeof navigator === "undefined") {
    return false;
  }
  const platformExpression = /Mac|iPhone|iPod|iPad/i;
  const agent = navigator.userAgent;
  return platformExpression.test(agent);
}

export function isAppleSafari() {
  if (typeof navigator === "undefined") {
    return false;
  }
  const rejectedExpression = /Chrome|Android|CriOS|FxiOS|EdgiOS/i;
  const expectedExpression = /Safari/i;

  const agent = navigator.userAgent;
  if (rejectedExpression.test(agent)) {
    return false;
  }
  return isApple() && expectedExpression.test(agent);
}

export const globalCatchSucess = (response, variant) => {
  let message = "Something went wrong";
  if (response?.data?.message) {
    message = response?.data.message;
  }
  eventEmitter.emit(events.showNotification, {
    message,
    options: { variant },
  });
};

export const globalCatchError = (error) => {
  let message = "Something went wrong";
  if (error.response?.data?.message) {
    message = error.response?.data.message;
  }

  eventEmitter.emit(events.showNotification, {
    message,
    options: { variant: "error" },
  });
};

export function parseCookies(req) {
  return cookie.parse(
    // eslint-disable-next-line no-nested-ternary
    req
      ? req.headers.cookie || ""
      : typeof document !== "undefined"
      ? document?.cookie
      : ""
  );
}
