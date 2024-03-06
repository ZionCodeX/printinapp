import React from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader"
import Image from "next/image";
import About_Image from "@/public/assets/images/png/About_us_image.png";
import Services from "@/components/Services"
import ProductDisplay from "@/components/ProductsDisplay";
import popularCategories from "@/lib/products_data"


export default function Page() {
  return (
<main>

<PageHeader header="Products" />

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
