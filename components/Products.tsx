'use client';

import ProductDisplay from "@/components/ProductsDisplay";
import greeting_cards from "../assets/images/png/product_images/GREETING-CARDS.png";
import branded_mugs from "../assets/images/png/product_images/BRANDED-MUGS.png";
import business_cards from "../assets/images/png/product_images/BUSINESS-CARDS.png";
import calendar from "../assets/images/png/product_images/CALENDAR.png";
import feather_banner from "../assets/images/png/product_images/FEATHER-BANNER.png";
import gift_bags from "../assets/images/png/product_images/GIFT-BAGS.png";
import letterhead from "../assets/images/png/product_images/LETTER-HEAD.png";
import magazine from "../assets/images/png/product_images/MAGAZINE.png";
import product_packaging from "../assets/images/png/product_images/PRODUCT-PACKAGING.png";
import roullup_banner from "../assets/images/png/product_images/ROLLUP-BANNER.png";
import Productsx from "@/lib/products_data";

import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link'
import Logo from "@/public/assets/images/svg/Printin_logo.svg";
//import { lusitana } from '@/app/ui/fonts';




const Products = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: adds a smooth scroll animation
    });
  };


 

  return (
    <main>

        {/* POPULAR CATEGORIES  */}
        <div className="mb-20">
          <h2 className="text-center text-[#0064A3] font-thin text-4xl mb-6">
            Popular Categories
          </h2>
          <div className=" mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  justify-items-center  gap-x-8 gap-y-12 ">
            {Productsx.map((product, index) => {

              return (
                <ProductDisplay
                  key={index}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  image={product.image}
                />
              );
            })}
          </div>
        </div>

    </main>
  )
}

export default Products