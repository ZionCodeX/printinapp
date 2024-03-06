import React from "react";
import PageHeader from "@/components/PageHeader";
//import ProductDisplay from "../components/ProductDisplay";
import career_image from "@/public/assets/images/png/careers_page_image.png";
import Image from "next/image";

export default function Page() {
  return (
<main>

<PageHeader header="Careers" />

<div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row space-x-12 mb-28">
          {/* Write-up  */}
          <div className="px-4">
            <h2 className="text-[#0064A3] font-boldx text-3xl mb-4">
              Join our Creative Team
            </h2>
            <p className="mb-5 text-lg">
              Are you a creative person with the right skills set to change the
              world of branding and packaging, then join our most fun and
              creative team today.{" "}
              <span className="mt-10 mb-6 block font-bold">
                Apply by filling the form below
              </span>
            </p>
            {/* Form */}
            <form className="flex flex-col rounded-xl gap-4 lg:w-10/12 bg-[#CAEFFF] py-10 px-6 lg:px-16">
              {/* PROFESSION FIELD  */}
              <div className="group w-80 md:w-80 lg:w-96 mx-auto lg:ml-10 ">
                <div className="relative flex items-center space-x-5 lg:space-x-6">
                  <span className="material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                    Profession
                  </span>
                  <input
                    id="6"
                    type="text"
                    className="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                  />
                </div>
              </div>

              {/* FIRST NAME FIELD */}
              <div className="group w-80 md:w-80 lg:w-96 mx-auto lg:ml-10 ">
                <div className="relative flex items-center space-x-9 lg:space-x-6">
                  <span className="lg:whitespace-nowrap material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                    First Name
                  </span>
                  <input
                    id="6"
                    type="text"
                    className="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
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
                    className="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
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
                    className="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
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
                    className="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                  />
                </div>
              </div>

              {/* UPLOAD CV FIELD  */}
              <div className="group w-80 md:w-80 lg:w-full mx-auto lg:ml-10 ">
                <div className="relative flex items-center space-x-3 lg:space-x-5">
                  <span className="lg:whitespace-nowrap material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                    Upload CV
                  </span>
                  <input
                    id="6"
                    type="file"
                    className="peer relative h-10 w-72 rounded-full px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                  />
                </div>
              </div>

              {/* SUBMIT BUTTON  */}
              <div className="flex justify-start">
                <button className="bg-[#129FF7] px-10 py-2 rounded-xl lg:ml-10 mt-8 text-white font-semibold">
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* image */}
          <div className="hidden lg:block">
            <Image
              src={career_image}
              alt="image of a woman sitting on couch with a laptop on her lap"
              className=""
            />
          </div>
        </div>
      </div>

</main>
  );
}