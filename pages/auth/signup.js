import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import React, { useState } from "react";
import { regexFormat } from "../../components/RegexFormate/RegexFormate";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../../components/login/newlogin.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Button } from "reactstrap";
import TextField from "@mui/material/TextField";
import GoogleIcon from "@mui/icons-material/Google";
import Image from "next/image";
import signin from "./siginBackup";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";

const schema = yup.object().shape({
  name: yup.string().trim().required("User Name is required"),
  email: yup
    .string()
    .trim()
    .required("Email Address is required")
    .email("Email format is not correct"),

  password: yup.string().trim().required("Password is required"),
  ConfirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const signinnew = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    mutation.mutate(data);
  };

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios
        .post("/api/signup", data)
        .then((response) => {
          console.log(response, "response");
          router.push("/selfservicehome");
        })
        .catch((error) => {
          Swal.fire("Server Error.", "error");
          console.error("Error", error);
        });
    },
  });

  return (
    <>
      <section>
        <section>
          <section className="h-100 gradient-form">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-xl-6">
                  <div className="card text-black rounded-3">
                    <div className="row g-0">
                      <div className="col-lg-12">
                        <div className="card-body p-md-5 mx-md-4">
                          <div className="text-center">
                            <a href="/" className="cursor-pointer">
                              <Image
                                width={250}
                                height={66}
                                src={"/images/logo.png"}
                                alt="Logo"
                              />
                            </a>
                          </div>
                          <form>
                            <h5 className="font-bold mt-4">
                              Create your account dd
                            </h5>
                            <div className="form-outline mb-4">
                              <div>
                                <TextField
                                  id="filled-basic"
                                  label="User Name"
                                  variant="filled"
                                  type="text"
                                  className="email-width"
                                  {...register("name")}
                                />
                              </div>
                              {errors?.text && (
                                <span style={{ color: "red" }}>
                                  {errors?.name?.message}
                                </span>
                              )}
                            </div>
                            <div className="form-outline mb-4">
                              <div>
                                <TextField
                                  id="filled-basic"
                                  label="Email"
                                  variant="filled"
                                  type="email"
                                  className="email-width"
                                  {...register("email")}
                                />

                                {/* <input
          type="email"
          id="email"
          {...register("email")}
        /> */}
                              </div>
                              {errors?.email && (
                                <span style={{ color: "red" }}>
                                  {errors?.email?.message}
                                </span>
                              )}
                            </div>
                            <div className="form-outline mb-4">
                              <TextField
                                id="filled-basic"
                                label="Password"
                                variant="filled"
                                className="email-width"
                                type="password"
                                {...register("password")}
                              />

                              {errors?.password && (
                                <span style={{ color: "red" }}>
                                  {errors?.password?.message}
                                </span>
                              )}
                            </div>

                            <div className="form-outline mb-4">
                              <TextField
                                id="filled-basic"
                                label="Confirm Password"
                                variant="filled"
                                className="email-width"
                                type="password"
                                {...register("ConfirmPassword")}
                              />

                              {errors?.ConfirmPassword && (
                                <span style={{ color: "red" }}>
                                  {errors?.ConfirmPassword?.message}
                                </span>
                              )}
                            </div>
                            <div className="text-center pt-1 mb-1 pb-1">
                              <a
                                className="btn btn-primary fa-lg gradient-custom-2 mb-3 w-100 login-button"
                                role="button"
                                onClick={handleSubmit(onSubmit)}
                              >
                                Register
                              </a>
                            </div>
                            <div className="d-flex flex-row align-items-center login-box-seperator-container">
                              <div className="login-box-seperator"></div>
                              <div className="login-box-seperator-text">
                                <p className="or-text">or</p>
                              </div>
                              <div className="login-box-seperator"></div>
                            </div>
                            <div className="form-outline mb-4">
                              <div>
                                <div className="login-box-content">
                                  <Button
                                    className="fb-login box-shadow"
                                    variant="text"
                                  >
                                    <i>
                                      <FacebookIcon className="facebook-icon-color" />
                                    </i>{" "}
                                    Log in with Facebook{" "}
                                  </Button>

                                  <div className="mt-2">
                                    <Button
                                      className="fb-login box-shadow"
                                      variant="text"
                                    >
                                      <i>
                                        <GoogleIcon className="gmail-icon-color" />
                                      </i>{" "}
                                      Log in with Google{" "}
                                    </Button>
                                  </div>
                                  {/* <div className="mt-2" >
                                    <Button className="fb-login box-shadow" variant="text">
                                      <i>  <Image
                                        width={20}
                                        height={22}
                                        src={"/images/amazone-icon.jpg"}
                                        alt="Logo"
                                      /></i>  Log in with Amazon </Button>
                                  </div> */}
                                </div>
                                <div className="mt-2 mb-2">
                                  <p className="text-muted text-center d-flex justify-content-center align-items-center">
                                    <Checkbox {...label} />I consent to the
                                    processing of my personal data
                                  </p>
                                </div>
                              </div>
                              <div className="d-flex justify-content-center align-items-center pb-4">
                                <p className="mb-0 me-2 pb-0">
                                  Don't have an account?
                                </p>
                                <button className="btn cr-new" type="button">
                                  Login
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="text-center">
            <div className="container">
              <div className="row d-inline-block">
                <div className="col">
                  <ul className="list-inline my-2">
                    <li className="list-inline-item list-inline-item">
                      <a
                        className="link-secondary"
                        href="https://www.webrobot.eu/privacy-notice/"
                        target="_blank"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className="list-inline-item list-inline-item">
                      <a
                        className="link-secondary"
                        href="https://www.webrobot.eu/cookie-policy/"
                        target="_blank"
                      >
                        Cookie Policy
                      </a>
                    </li>
                    <li className="list-inline-item list-inline-item">
                      <a
                        className="link-secondary"
                        href="https://www.webrobot.eu/terms-and-conditions/"
                        target="_blank"
                      >
                        Terms of Use
                      </a>
                    </li>
                    <li className="list-inline-item list-inline-item">
                      <a
                        className="link-secondary"
                        href="https://www.webrobot.eu/disclaimer/"
                        target="_blank"
                      >
                        Disclaimer
                      </a>
                    </li>
                    <li className="list-inline-item list-inline-item">
                      <a
                        className="link-secondary"
                        href="https://www.webrobot.eu/impressum/"
                        target="_blank"
                      >
                        Impressum
                      </a>
                    </li>
                    <li className="list-inline-item list-inline-item">
                      <a
                        className="link-secondary"
                        href="https://app.termly.io/notify/782bbf3d-9cab-415f-8943-a1da60f88204"
                        target="_blank"
                      >
                        DSAR Form
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xxl-12">
                  <ul className="list-inline my-2 bottom-section">
                    <li className="list-inline-item list-inline-item me-4">
                      <div className="bs-icon-circle bs-icon-primary bs-icon">
                        <a
                          href="https://www.linkedin.com/company/webrobot-eu"
                          target="_blank"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className="bi bi-linkedin"
                          >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"></path>
                          </svg>
                        </a>
                      </div>
                    </li>
                    <li className="list-inline-item list-inline-item me-4">
                      <div className="bs-icon-circle bs-icon-primary bs-icon">
                        <a
                          href="https://facebook.com/webrobotltd/"
                          target="_blank"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className="bi bi-facebook"
                          >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                          </svg>
                        </a>
                      </div>
                    </li>
                    <li className="list-inline-item list-inline-item me-4">
                      <div className="bs-icon-circle bs-icon-primary bs-icon">
                        <a
                          href="https://twitter.com/WebRobotuk"
                          target="_blank"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className="bi bi-twitter-x"
                          >
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"></path>
                          </svg>
                        </a>
                      </div>
                    </li>
                    <li className="list-inline-item list-inline-item me-4">
                      <div className="bs-icon-circle bs-icon-primary bs-icon">
                        <a
                          href="https://www.youtube.com/channel/UCsPgJGYa9KM6voUPzW3u2Bw"
                          target="_blank"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className="bi bi-youtube"
                          >
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z"></path>
                          </svg>
                        </a>
                      </div>
                    </li>
                    <li className="list-inline-item list-inline-item me-4">
                      <div className="bs-icon-circle bs-icon-primary bs-icon">
                        <a href="https://t.me/webrobotltd" target="_blank">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className="bi bi-telegram"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path>
                          </svg>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <a href="https://www.webrobot.eu/" target="_blank">
                    <p className="text-muted my-2">
                      Copyright&nbsp;© 2024 WebRobot Ltd
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </section>
    </>
  );
};

export default signinnew;