'use client';
import React from 'react'
import Image from 'next/image';
import speedometer from "../assets/svg/speedometer_icon.svg";
import quality from "../assets/svg/quality_icon.svg";
import affordability from "../assets/svg/money_icon.svg";
import Link from 'next/link'
import Logo from "@/public/assets/images/svg/Printin_logo.svg";


const Subscribe = () => {

  return (
    <main>

      
      {/* COMPONENT UI  */}
            {/* SUBSCRIBE TO NEWS LETTER  */}
            <div className=" mb-20">

            <h2 className="text-center text-[#0064A3] font-thin text-4xl mb-4">
                <div className='text-[#ff9350]'>|</div> Subscribe <div className='text-[#ff9350]'>|</div>
            </h2>

        <div className="group w-72 md:w-80 lg:w-3/12 mx-auto shadow-xl px-4 py-4 rounded-lg">
          <div className="relative flex items-center">
            <input
              id="8"
              type="email"
              placeholder="Enter your email address here..."
              className="peer relative h-10 w-full rounded-md text-xl bg-gray-50 pl-3 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
            />
            <button className="absolute right-0 h-10 w-20 rounded-r-md bg-blue-200 text-xs font-semibold text-white transition-all duration-200 ease-in-out group-focus-within:bg-blue-400 group-focus-within:hover:bg-blue-600">
              SUBSCRIBE
            </button>
          </div>
        </div>
        {/* <div className="bg-white flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex items-center shadow-lg  py-3 px-10  "
          >
            <div className="shadow-lg flex ">
              <input
                type="text"
                placeholder="Enter your email address here ..."
                value={searchTerm}
                onChange={handleChange}
                className=" pl-3 py-5 rounded-l-md focus:outline-none w-64"
              ></input>
              <button
                type="submit"
                className=" text-white px-4 py-3 rounded-r-md bg-blue-300 "
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div> */}
      </div>


    </main>
)
}

export default Subscribe;