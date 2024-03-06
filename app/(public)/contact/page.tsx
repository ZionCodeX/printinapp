import React from "react";
import PageHeader from "@/components/PageHeader";
//import ProductDisplay from "../components/ProductDisplay";
import rollup_banner from "@/public/assets/images/png/product_images/ROLLUP-BANNER.png";
import greeting_cards from "@/public/assets/images/png/product_images/GREETING-CARDS.png";
import branded_mugs from "@/public/assets/images/png/product_images/BRANDED-MUGS.png";
import business_cards from "@/public/assets/images/png/product_images/BUSINESS-CARDS.png";
import calendar from "@/public/assets/images/png/product_images/CALENDAR.png";
import feather_banner from "@/public/assets/images/png/product_images/FEATHER-BANNER.png";
import gift_bags from "@/public/assets/images/png/product_images/GIFT-BAGS.png";
import letterhead from "@/public/assets/images/png/product_images/LETTER-HEAD.png";
import magazine from "@/public/assets/images/png/product_images/MAGAZINE.png";
import product_packaging from "@/public/assets/images//png/product_images/PRODUCT-PACKAGING.png";
import background from "@/public/assets/images/png/subpage_background.png";
import address_map from "@/public/assets/images/jpeg/address-map.jpg";

import Image from "next/image";

export default function Page() {
  return (
<main>

<PageHeader header="Contact" />


          {/*ABOUT PRINTIN.NG*/}
          <div className=" flex flex-col-reverse md:flex-row mx-6 justify-center mb-16">
          {/*WRITE-UP*/}
          <div className="md:mr-28 mt-14">
          <div className="rounded-lg h-64 overflow-hidden">

        
<h2 className="text-3xl mb-5 text-[#0064A3]">
  Thank you for visiting us
</h2>

<div className="text-xl">
<p><b>Address:</b> #2 watchtower crescent off George street Shomolu</p>
<p><b>Tel:</b> +234 816 353 4401</p>
<p><b>Email:</b> info@printin.ng | printingintelligence@gmail.com</p>

<br />
<p className="font-bold text-gray-500">Working Hours</p>
<p>
  <span className="font-bold">Mondays - Fridays:</span> 9:00am -
  5:00pm
</p>
<p>
  <span className="font-bold">Saturdays:</span> 10:00am - 3:00pm
</p>
</div>
</div>
</div>

          {/*IMAGE*/}
          <div className=" ">
            <Image
              src={address_map}
              width={700}
              height={400}
              className="object-cover object-center h-full w-full"
              alt="About Us Image"
              quality={100}
          />
          </div>
        </div>

        


      <div className="max-w-7xl mb-16 mx-auto py-10 pt-10 text-lg">

        {/* Form */}
        <div className="mb-16">
          
          <h2 className="text-3xl text-center mb-10 text-[#0064A3]">
            Talk to us
          </h2>

          <form className="flex flex-col rounded-xl gap-4   bg-[#CAEFFF] py-10 px-6">
            {/* SUBJECT FIELD  */}
            <div className=" group flex justify-center ">
              <div className="relative flex items-center space-x-5 lg:space-x-7 w-6/12">
                <span className="material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  Subject
                </span>
                <input
                  id="6"
                  type="text"
                  className="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            {/* NAME FIELD */}
            <div className="group flex justify-center ">
              <div className="relative flex items-center space-x-9 lg:space-x-9  w-6/12">
                <span className="lg:whitespace-nowrap material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  Name
                </span>
                <input
                  id="6"
                  type="text"
                  className="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            {/*EMAIL FIELD  */}
            <div className="group flex justify-center ">
              <div className="relative flex items-center space-x-9 lg:space-x-10  w-6/12">
                <span className="lg:whitespace-nowrap material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  Email
                </span>
                <input
                  id="6"
                  type="text"
                  className="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            {/* PHONE FIELD */}
            <div className="group flex justify-center ">
              <div className="relative flex items-center space-x-12 lg:space-x-9 w-6/12">
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

            {/* MESSAGE FIELD */}
            <div className="group flex justify-center">
              <div className="relative flex items-center space-x-11 lg:space-x-5 w-6/12">
                <span className="material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  Message
                </span>
                <textarea
                  id="6"
                  
                  className="peer relative h-36 w-full rounded-2xl bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            {/* SUBMIT BUTTON  */}
            <div className="mx-auto">
              <button className="bg-[#129FF7] px-10 py-2 rounded-xl lg:ml-10 mt-8 text-white font-semibold">
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
</main>
  );
}