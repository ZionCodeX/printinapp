import React from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader"
import Image from "next/image";
import About_Image from "@/public/assets/images/png/About_us_image.png";
import Services from "@/components/Services"
import ProductDisplay from "@/components/ProductsDisplay";
import popularCategories from "@/lib/products_data"
import arrow from "@/public/assets/images/png/right-arrow.png";


export default function Page() {
  return (
<main>

<PageHeader header="Track Order" />

<div>
<div className="max-w-7xl mx-auto">
        <div className="flex space-x-7 mb-20">
          {/* TRACK YUR ORDER HERE */}
          <div className="w-7/12">
            <h2 className="font-boldx text-3xl  mb-4 text-[#0064A3]">
              Track your Order here
            </h2>
            <p className="mb-10 text-xl">
              Track your print order without hassles Easily track the status
              your Printin.ng order using your order number and see step by step
              progress on your order.
            </p>
            <p className="font-bold mb-4 text-xl">Having issues tracking your order?</p>

            <p className="font-boldx mb-4 text-xl">
              <span className="font-bold ">Tel:</span> +234 816 353 4401
            </p>

           <p className="font-boldx mb-4 text-xl">
              <span className="font-bold ">Email:</span> order@printin.ng
            </p>
          </div>

          {/* ENTER TRACKING NUMBER */}
          <div className="w-full bg-[#CAEFFF] pr-10 pl-16 py-16 rounded-3xl">
            <div className="w-10/12 mx-auto">
              <h2 className="font-semi-bold text-xl text-right mb-4 text-[#0064A3]">
                Enter Tracking Number
              </h2>
              <input type="text" className="block w-full rounded-xl h-10" />
              <div className="flex justify-end">
                <button className="bg-[#129FF7] px-10 py-2 rounded-xl mt-8 text-white font-semibold">
                  Track Order
                </button>
              </div>
            </div>
          </div>


        </div>
</div>


      </div>

      {/* ALL PRODUCTS CATEGORIES  */}
      <div className="mb-20">
        <h2 className="text-center text-[#0064A3] font-thin text-4xl mb-6">
        <div className='text-[#ff9350]'>|</div> All Products <div className='text-[#ff9350]'>|</div>
        </h2>
        <div className=" mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  justify-items-center  gap-x-8 gap-y-12 ">
          {popularCategories.map((product, index) => {
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

      <Services />


</main>
  );
}
