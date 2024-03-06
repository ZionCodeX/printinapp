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

<PageHeader header="About" />

          {/*ABOUT PRINTIN.NG*/}
        <div className=" flex flex-col-reverse md:flex-row mx-6 justify-center mb-16">
          <div className="md:mr-28 mt-14">
            <h2 className="text-[#0064A3] font-boldx text-3xl mb-4">
              About Print<b>in</b>
            </h2>
            <p className="mb-5 text-lg">
              <span className="font-bold">Printin.ng </span>is a full-fledged
              printing, branding and packaging agency with high{" "}
              <br className=" hidden md:block" /> degree of commitment to set
              new standards for Nigeria&apos;s and indeed, Africa&apos;s{" "}
              <br className=" hidden md:block" /> printing industry. While we
              have invested 3years in studying unique printing{" "}
              <br className=" hidden md:block" /> intelligence, focusing on the
              skillful use of the power of ink, our job reflects{" "}
              <br className=" hidden md:block" />
              thoroughness, precision and meets with the world standard quality,
              which helps us <br className=" hidden md:block" /> exceed our
              clients expectations.
            </p>
            <Link  href="/signup">
            <button className="bg-[#129FF7] px-4 py-2 rounded-xl text-white font-semibold text-2xl">
              Get Started
            </button>
            </Link>
          </div>

          {/*IMAGE*/}
            <Image
              src={About_Image}
              //width={70}
              //height={30}
              className="rounded-lg"
              alt="About Us Image"
          />

        </div>

<Services />

      {/* POPULAR CATEGORIES  */}
      <div className="mb-20">
        <h2 className="text-center text-[#0064A3] font-thin text-4xl mb-6">
        <div className='text-[#ff9350]'>|</div> Products <div className='text-[#ff9350]'>|</div>
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

</main>
  );
}
