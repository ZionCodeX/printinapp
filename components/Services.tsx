'use client';

import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link'
import Logo from "@/public/assets/images/svg/Printin_logo.svg";
//import { lusitana } from '@/app/ui/fonts';


const Services = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: adds a smooth scroll animation
    });
  };


  return (
    <main>

        {/*OUR SERVICES*/}
        <div className="mb-16">

          <h2 className="text-center text-[#0064A3] font-thin text-4xl mb-4">
          <div className='text-[#ff9350]'>|</div> Our Services <div className='text-[#ff9350]'>|</div>
          </h2>

          <div className=" max-w-7xl mx-auto drop-shadow-lg">
            <div className="flex flex-col md:flex-row pl-20 md:pl-0 text-xl md:text-lg md:justify-around py-10 rounded-3xl bg-[#fff5ea] text-[#006EB3] font-boldx mx-8 md:mx-5 lg:mx-0">
              {/*COLUMN 1*/}
              <ul className="*:mb-3 text-2xl">
                <li>Printing and packaging</li>
                <li>Fabricating</li>
                <li>Large format prints</li>
                <li>3D Printing</li>
              </ul>

              {/*COLUMN 2*/}
              <ul className="*:mb-3 text-2xl">
                <li>Promotional Items</li>
                <li>Content development</li>
                <li>Vehicle branding</li>
                <li>Photo Frames</li>
              </ul>

              {/*COLUMN 3*/}
              <ul className="*:mb-3 text-2xl">
                <li>Brand promotion</li>
                <li>Magazine</li>
                <li>Wall paper printing</li>
                <li>Photo Book</li>
              </ul>

              {/*COLUMN 4*/}
              <ul className="*:mb-3 text-2xl">
                <li>Corporate gift items</li>
                <li>Procurement</li>
              </ul>
            </div>
          </div>
        </div>

    </main>
  )
}

export default Services