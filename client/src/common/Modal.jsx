import React from "react";
import Cookies from 'js-cookie';

import { useDispatch } from "react-redux"
import { GoogleLogin } from "@react-oauth/google";
import {  get_my_user, googleLogin } from "../state/user";

function Modal() {

  const dispatch = useDispatch();
  
  const fetchData = async () => {
    const setName = await sessionStorage.setItem("name", Cookies.get('name'))
    const setLastName = await sessionStorage.setItem("lastname", Cookies.get('lastname'))
    const setEmail = await sessionStorage.setItem("email", Cookies.get('email'))
    const setPassword= await sessionStorage.setItem("password", Cookies.get('password'))
  }

  const sucessGoogleResponse = async (tokenResponse) => {
    const log = await dispatch(googleLogin(tokenResponse))
    const setInfo = await fetchData()
    console.log(log,setInfo,tokenResponse)
    const reload = await window.location.reload()
  };

  
  return (
    <div className="relative flex justify-center items-center" style={{zIndex:"100000"}}>
      <div
        id="menu"
        className="w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0"
      >
        <div className="2xl:container  2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center">
          <div className="w-96 md:w-auto dark:bg-gray-800 relative flex flex-col justify-center items-center bg-white py-16 px-4 md:px-24 xl:py-24 xl:px-36">
            <div className="mt-12">
              <h1
                role="main"
                className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-center text-gray-800"
              >
                You need to be logged in
              </h1>
            </div>
            <div className="mt">
              <p className="mt-6 sm:w-80 text-base dark:text-white leading-7 text-center text-gray-800 mb-5">
                Please, click the button below to log in and access
              </p>
            </div>
            <GoogleLogin
              onSuccess={sucessGoogleResponse}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;