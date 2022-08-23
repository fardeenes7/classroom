/*
MD Fardeen Ehsan Shawon
fardeen.es7@gmail.com
*/
import React from "react";
import AuthTemplate from "./AuthTemplate.jsx";
import { FcGoogle, FcReadingEbook } from "react-icons/fc";
import { GiRuleBook } from "react-icons/gi";
export default function Register() {
  return (
    <div className="h-screen">
      <div className="grid h-full w-full grid-cols-1 lg:grid-cols-3 xl:grid-cols-2">
        <AuthTemplate />
        <div className="col-span-2 flex flex-col items-center justify-center text-center font-poppins lg:col-span-2 xl:col-span-1">
          <span>
            <GiRuleBook className="mb-4 h-16 w-16 text-customBlue" />
          </span>
          <h1 className="font-arvo text-4xl font-bold">Create Account</h1>
          <h3 className="my-4 w-2/3 text-sm xl:w-1/3">
            Create an account or use Google Sign In.
          </h3>
          <form action="" className="my-5 w-2/3 text-sm xl:w-1/3">
            <div className="grid gap-4">
              <input
                type="text"
                className="h-8 w-full rounded-md border border-gray-300 bg-gray-100 p-5 focus:border-blue-500 focus:bg-white"
                placeholder="Your Name"
                name="name"
              />
              <input
                type="email"
                className="h-8 w-full rounded-md border border-gray-300 bg-gray-100 p-5 focus:border-blue-500 focus:bg-white"
                placeholder="Email"
                name="email"
              />
              <input
                type="password"
                className="h-8 w-full rounded-md border border-gray-300 bg-gray-100 p-5 focus:border-blue-500 focus:bg-white"
                placeholder="Password"
                name="password"
              />

              <button className="h-12 w-full rounded-md border bg-[#285CC5] text-white hover:bg-[#1747a5]">
                Register
              </button>
              <button className="focus:bg-grey-200 flex h-12 w-full items-center justify-center rounded-md border hover:bg-gray-200">
                <span className="mr-3 h-6 w-6">
                  <FcGoogle className="h-full w-full" />
                </span>
                Register with Google
              </button>
            </div>
          </form>
          <div className="mt-3 text-sm">
            Already have an Account?
            <a
              className="ml-2 font-bold text-customBlue hover:text-blue-500 active:text-violet-500"
              href="/login"
            >
              Login.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
