import React from "react";
import { Suspense } from 'react'
import Image from "next/image";
import Link from "next/link";
import background from "@/public/assets/images/png/subpage_background.png";
import background2 from "@/public/assets/images/jpeg/background.jpg";
import Loading from '@/app/(public)/loading';

export default function Page() {
  return (
<main>
  
<Suspense fallback={<Loading />}>



<div>
<div
        style={{ backgroundImage: "url(" + background2.src + ")" }}
        className="w-1/1 h-screen bg-no-repeat bg-cover bg-center opacity-30x relative bg-fixed"
      >

      <div className=" max-w-7xl mx-auto mb-0 mt-0 py-10">
        <h2 className="text-center text-[#0064A3] font-bold text-2xl mb-6">
          Sign Up
        </h2>

        <div className="flex justify-center drop-shadow-md">
          {/* LOGIN FORM  */}
          <form className="flex flex-col gap-4 bg-[#CAEFFF] py-10 px-6 lg:px-36 rounded-lg">
            {/* FIRST NAME FIELD */}
            <div className="group w-80 md:w-80 lg:w-96 mx-auto lg:ml-10 ">
              <div className="relative flex items-center space-x-9 lg:space-x-6">
                <span className="lg:whitespace-nowrap material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  First Name
                </span>
                <input
                  id="6"
                  type="text"
                  className="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-bold outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            {/* LAST NAME FIELD  */}
            <div className="group w-80 md:w-80 lg:w-96 mx-auto lg:ml-10 ">
              <div className="relative flex items-center space-x-9 lg:space-x-6">
                <span className="lg:whitespace-nowrap material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  Last Name
                </span>
                <input
                  id="6"
                  type="text"
                  className="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-bold outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            {/* EMAIL FIELD */}
            <div className="group w-80 md:w-80 lg:w-96 mx-auto lg:ml-10 ">
              <div className="relative flex items-center space-x-12 lg:space-x-14">
                <span className="material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  Email
                </span>
                <input
                  id="6"
                  type="text"
                  className="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-bold outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            {/*PHONE NUMBER FIELD */}
            <div className="group w-80 md:w-80 lg:w-96 mx-auto lg:ml-10 ">
              <div className="relative flex items-center space-x-11 lg:space-x-14">
                <span className="material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  Phone
                </span>
                <input
                  id="6"
                  type="text"
                  className="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-bold outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            {/* PASSWORD FIELD  */}
            <div className="group w-80 md:w-80 lg:w-96 mx-auto lg:ml-10 ">
              <div className="relative flex items-center space-x-5 lg:space-x-8">
                <span className="material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  Password
                </span>
                <input
                  id="6"
                  type="text"
                  className="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-bold outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            {/* CONFIRM PASSWORD FIELD  */}
            <div className="group w-80 md:w-80 lg:w-full mx-auto lg:ml-0 ">
              <div className="relative flex items-center lg:space-x-5">
                <span className="lg:whitespace-nowrap material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  Confirm Password
                </span>
                <input
                  id="6"
                  type="text"
                  className="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-bold outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            <div className="flex justify-center ">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                value="agree"
                className="mr-5"
              />
              <label>Agree to Terms & Conditions</label>
            </div>

            {/* LOGIN BUTTON  */}
            <div className="flex justify-end">
              <button className="bg-[#129FF7] px-10 py-2 rounded-xl text-white font-semibold">
                SignUp
              </button>
            </div>

            {/* FORGOT PASSWORD AND SIGN UP  */}
            <div className="flex justify-end text-[#0064A3] font-semibold">
              <p className="ml-7">Login</p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
</Suspense>
    
</main>
  );
}
