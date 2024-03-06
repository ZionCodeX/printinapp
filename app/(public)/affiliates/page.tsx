import React from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader"
import Image from "next/image";
import About_Image from "@/public/assets/images/png/About_us_image.png";
import Services from "@/components/Services"
import affiliate_image from "@/public/assets/images/svg/affiliates_svg.svg";
import ProductDisplay from "@/components/ProductsDisplay";
import Products from "@/lib/products_data"


export default function Page() {
  return (
<main>

<PageHeader header="Affiliates" />


          {/*ABOUT PRINTIN.NG*/}
          <div className=" flex flex-col-reverse md:flex-row mx-6 justify-center mb-5 px-10">
          <div className="md:mr-28 mt-14">
            <h2 className="text-[#0064A3] font-boldx text-3xl mb-4">
              <b>Earn Money</b> everytime your referral pays for a print
            </h2>
            <p className="mb-5 text-xl">
              Register on Printin.ng and get your referral code that you can
              share to the public on any platform.
            </p>
            <p className="mb-5 text-xl">
              You can start earning passive income right away anytime the person
              who registers with Printin.ng using your link makes a payment for
              a printing service.
            </p>

          </div>

          {/*IMAGE*/}
            <Image
              src={affiliate_image}
              //width={70}
              //height={30}
              className="rounded-lg"
              alt="About Us Image"
          />

        </div>





<div className="flex items-center justify-center h-screen bg-gray-200">

      <div className="">

            <h2 className="font-boldx text-3xl mb-5 text-[#cb6314]">
              <b>Become an Affiliate</b> in three(3) simple steps
            </h2>


        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black inline-flex items-center justify-center text-white relative z-10">
          <svg className="h-6 w-6 text-yellow-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />  <circle cx="8.5" cy="7" r="4" />  <polyline points="17 11 19 13 23 9" /></svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">STEP 1</h2>
            <p className="leading-relaxed text-xl">Create an account with Printin.ng and login to your dashboard</p>
          </div>
        </div>



        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black inline-flex items-center justify-center text-white relative z-10">
          <svg className="h-6 w-6 text-yellow-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
          </div>
          <div className="flex-grow pl-4">
          <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">STEP 2</h2>
            <p className="leading-relaxed text-xl">Copy your affiliate link and/or share the link</p>
          </div>
        </div>



        <div className="flex relative">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black inline-flex items-center justify-center text-white relative z-10">
          <svg className="h-6 w-6 text-yellow-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
          </div>
          <div className="flex-grow pl-4">
          <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">STEP 3</h2>
            <p className="leading-relaxed text-xl">Get paid once your affiliate makes a payment</p><small>*Your affiliate is anyone who registers on Printin.ng using your link</small><br />
          </div>
        </div>

        <br />

        {/* BUTTON */}
         <div className="flex justify-center">
            <button className="bg-[#2F2F2F] px-16 py-3 text-white rounded-2xl">
              Become an Affiliate
            </button>
          </div>

      </div>


</div>








        {/* Related Products */}
          {/* PRODUCTS  */}
          <div className="mb-20">

            <h2 className="text-center text-[#0064A3] font-thin text-4xl mb-6">
            <div className='text-[#ff9350]'>|</div> Products <div className='text-[#ff9350]'>|</div>
            </h2>

            <div className=" mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  justify-items-center  gap-x-8 gap-y-12 ">
              {Products.map((product, index) => {
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
