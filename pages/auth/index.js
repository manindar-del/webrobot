import { useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import React, { useState } from "react";
import { regexFormat } from "../../components/RegexFormate/RegexFormate";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";



const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Email Address is required")
    .email("Email format is not correct")

  ,
  password: yup
    .string()
    .trim()
    .required("Password is required"),
});








const index = () => {





  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  const router = useRouter();
  



  const onSubmit = async (data) => {
     mutation.mutate(data);
  }

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios
        .post("/api/signin", data)
        .then((response) => {
         
          if (response.status === 200) {
          
            // cookie.set("auth", response?.data[0], {
            //   path: "/",
            //   sameSite: true
            //   //expires: date
            // });
            console.log(response?.data[0].email,"response")
            localStorage.setItem('auth', JSON.stringify(response?.data[0].email));
            router.push("/selfservicehome");
          }
        })
        .catch((error) => {
          Swal.fire("Server Error.", "error");
          console.error("Error", error);
        });
    },
  });




  return (
   <>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register("email")}
        />
      </div>
      {errors?.email && (
        <span style={{ color: "red" }}>
          {errors?.email?.message}
        </span>
      )}
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          {...register("password")}
        />
      </div>
      {errors?.password && (
        <span style={{ color: "red" }}>
          {errors?.password?.message}
        </span>
      )}



      <button type="button" onClick={handleSubmit(onSubmit)}>Login</button>
      </>
  );
};

export default index;
