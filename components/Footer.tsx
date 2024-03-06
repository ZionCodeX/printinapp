'use client';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import Logo from "@/public/assets/images/svg/Printin_logo.svg";
import facebook from "@/public/assets/images/svg/facebook_logo_icon.svg";
import instagram from "@/public/assets/images/svg/instagram_logo_icon.svg";
import linkedin from "@/public/assets/images/svg/linkedin_logo.svg";


const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: adds a smooth scroll animation
    });
  };

  return (
    <main>


<footer className="bg-[#DFEFFF] py-8 pl-8 lg:pl-16 flex flex-col items-start md:flex-row md:justify-between md:items-start *:mb-6">
     
     
      {/* 1st column  */}
      <div className="sm:w-1/4">
        
        <Link href="/" className="flex items-center mb-4">
          <Image
              src={Logo}
              width={200}
              height={75}
              className="w-auto h-16 mr-4"
              alt="Screenshots of the dashboard project showing desktop version"
          />
        </Link>

        <p className="text-gray-600 font-bold text-base">
          #2 watchtower crescent,
          <br />
          off George street Shomolu.
          <br />
          <a href="tel:+2348163534401">
            <span className=" font-bold">Tel:</span> +234 816 353 4401
          </a>
          <br />
          <a href="mailto:info@example.com">
            Email: info@printin.ng | printingintelligence@gmail.com
          </a>
        </p>

        <p className="text-gray-500 text-base mt-2">
          Copyright © 2024 All Rights Reserved
        </p>
      </div>


      {/* second column  */}
      <div className="sm:w-1/4">
        <h3 className=" text-lg font-medium mb-4"><b>PRINTIN</b></h3>
        <ul className="list-unstyled text-xl">
          <li>
            <Link
              className="hover:text-blue-40"
              href="/about"
              onClick={scrollToTop}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-blue-400"
              href="/contact"
              onClick={scrollToTop}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-blue-400"
              href="track"
              onClick={scrollToTop}
            >
              Track Order
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-blue-400"
              href="blog"
              onClick={scrollToTop}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="careers"
              className=" hover:text-blue-400"
              onClick={scrollToTop}
            >
              Careers
            </Link>
          </li>
        </ul>
      </div>


      {/* third column  */}
      <div className="sm:w-1/4">
        <h3 className=" text-lg font-medium mb-4"><b>GET STARTED</b></h3>
        <ul className="list-unstyled text-xl">
          <li>
            <Link
              href="/affiliates"
              className=" hover:text-blue-400"
              onClick={scrollToTop}
            >
              Become an Affiliate
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className=" hover:text-blue-400"
              onClick={scrollToTop}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="font-bold hover:text-blue-400"
              onClick={scrollToTop}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/signup"
              className="font-bold hover:text-blue-400"
              onClick={scrollToTop}
            >
              SignUp
            </Link>
          </li>

        </ul>
      </div>


      {/* fourth column  */}
      <div className="sm:w-1/4">
        <h3 className=" text-lg font-medium mb-4"><b>INFORMATION</b></h3>
        <ul className="list-unstyled text-xl">
          <li>
            <Link
              className="hover:text-blue-400"
              href="/privacy-policy"
              onClick={scrollToTop}
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-blue-400"
              href="/terms-and-conditions"
              onClick={scrollToTop}
            >
              Terms & Conditions
            </Link>
          </li>
        </ul>

        <div className="flex mt-10">
          <a href="#" className="text-blue-400 hover:text-blue-500 shrink w-12">
              <Image src={instagram} alt="" className="h-8" />
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-500 shrink w-12">
              <Image src={facebook} alt="" className="h-8" />
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-500 shrink w-12">
              <Image src={linkedin} alt="" className="h-8" />
          </a>
        </div>


      </div>
    </footer>


    </main>
  )
}

export default Footer