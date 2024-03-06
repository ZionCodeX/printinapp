'use client';

import React, { useState } from "react";
import Image from 'next/image';
import product_img from "../assets/jpeg/product_image.jpg";
import Link from 'next/link'
import PropTypes from "prop-types";
import arrow from "@/public/assets/images/svg/right-arrow-svg.svg";
import image from "@/public/assets/images/products/gift-bags.png";





// Define an interface for the props
interface ProductsProps {
  title: string;
  price: any;
  description: string;
  image: any;

}



// Use the interface to annotate the props of the component
const ProductDisplay: React.FC<ProductsProps> = ({ title, price, description, image }) => {
  
  //url = `product-description/${title}/${description}`;

  return (
    <Link href="product-description" as=''>
      <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">

        <Image
              src={image}
              //width={70}
              //height={30}
              className="h-80 w-72 object-cover rounded-t-xl"
              alt="Product Image"
          />
        

          <div className="px-4 py-3 w-72">
            
            <p className="text-lg font-bold text-black truncate block capitalize">
              <span className='text-[#ff9350]'>|</span> &nbsp; {title} 
            </p>

            <p className="text-gray-500 mb-3 text-xl">Starting at &#8358;<b>{price}</b></p>
            <p className="text-gray-400 text-base mb-6">{description}</p>

            <div className="text-[#e03984] font-semibold flex ">
              <button className="btn btn-xs bg-dark"> Order Now </button>
            </div>
            
          </div>

      </div>
    </Link>
  );
};


export default ProductDisplay;
