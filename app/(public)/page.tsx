import { Suspense } from 'react'
import Image from "next/image";
import Link from "next/link";
import Loading from '@/app/(public)/loading';
import Carousel from '@/components/Carousel';
import Services from '@/components/Services';
import ProductDisplay from "@/components/ProductsDisplay";
import Products from "@/lib/products_data"
import Features from '@/components/Features';
import Subscribe from '@/components/Subscribe';
import Clients from '@/components/Clients';
import Testimonials from '@/components/Testimonials';

export default function Page() {
  return (
<main>
  
<Suspense fallback={<Loading />}>
  
          <Carousel />

          {/* PRODUCTS  */}
          <div className="mb-20">

            <h2 className="text-center text-[#0064A3] font-thin text-4xl mb-6">
            <div className='text-[#ff9350]'>|</div> Popular Products <div className='text-[#ff9350]'>|</div>
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

          <Services />

          <Features />

          <Clients />

          <Testimonials />

          <Subscribe />



</Suspense>
    
</main>
  );
}
