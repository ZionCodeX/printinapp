//'use client';

import React, { useState } from "react";
import Image from 'next/image';
import product_img from "../assets/jpeg/product_image.jpg";
import Link from 'next/link'
import PropTypes from "prop-types";
import arrow from "@/public/assets/images/svg/right-arrow-svg.svg";
import image from "@/public/assets/images/products/gift-bags.png";





// Define an interface for the props
interface BlogProps {
  title: string;
  description: string;
  date: any;
  image: any;
}



// Use the interface to annotate the props of the component
const BlogCard: React.FC<BlogProps> = ({ title, description, date, image }) => {

  return (
      <div className="p-4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" width={200} height={200} src={image} quality={100} alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
            <p className="leading-relaxed mb-3">{description}</p>
            <div className="flex items-center flex-wrap ">
              <Link href='/' className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Read More ...
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <b>Admin</b>
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                {date}
              </span>
            </div>
          </div>
        </div>
      </div>
  );
};


export default BlogCard;
