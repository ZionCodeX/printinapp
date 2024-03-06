'use client';
import React from 'react'
import Image from 'next/image';
import speedometer from "@/public/assets/images/svg/speedometer_icon.svg";
import quality from "@/public/assets/images/svg/quality_icon.svg";
import affordability from "@/public/assets/images/svg/money_icon.svg";
import Link from 'next/link'
import Logo from "@/public/assets/images/svg/Printin_logo.svg";
import facebook from "@/public/assets/images/svg/facebook_logo_icon.svg";
import instagram from "@/public/assets/images/svg/instagram_logo_icon.svg";
import linkedin from "@/public/assets/images/svg/linkedin_logo.svg";


const Features = () => {

  return (
    <main>

      
      {/* FEATURES  */}
      <div className="mb-20 drop-shadow-lg">
        <h2 className="text-center text-[#0064A3] font-thin text-4xl mb-4">
        <div className='text-[#ff9350]'>|</div> Features <div className='text-[#ff9350]'>|</div>
        </h2>
        <div className=" mx-auto max-w-7xl flex flex-col md:flex-row justify-center">
          <div className=" bg-[#E9F8FE] mx-10 md:mx-0 mb-6 md:mb-0 pl-8 pr-20 pt-6 pb-14 rounded-xl">
            {/* Speed  */}
            <div className=" flex items-center">
              <Image src={speedometer} alt="" className=" h-24" />
              <h3 className="pt-7 font-bold text-[#706D6D] text-2xl ">SPEED</h3>
            </div>
            <p className=" pl-8">
              Get your order within 3 - 7 <br /> Working days after placement.
            </p>
          </div>

          <div className=" bg-[#E9F8FE] mx-10 mb-6 md:mb-0 pl-8 pr-20 pt-6 pb-14 rounded-xl">
            {/* Quality  */}
            <div className=" flex items-center">
              <Image src={quality} alt="" className=" h-24" />
              <h3 className="pt-7 font-bold text-[#706D6D] text-2xl ">
                QUALITY
              </h3>
            </div>
            <p className=" pl-8">
              We only produce the best of quality <br /> prints on all popular
              types of prints.
            </p>
          </div>

          <div className=" bg-[#E9F8FE] mx-10 mb-6 md:mb-0 md:mx-0 pl-8 pr-20 pt-6 pb-14 rounded-xl">
            {/*Affordability  */}
            <div className=" flex items-center">
              <Image src={affordability} alt="" className=" h-24" />
              <h3 className="pt-7 font-bold text-[#706D6D] text-2xl ">
                AFFORDABILITY
              </h3>
            </div>
            <p className=" pl-8">
              Our prices are highly competitive <br /> in the professional
              printing space.
            </p>
          </div>
        </div>
      </div>


</main>
)
}

export default Features