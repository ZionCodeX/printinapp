import React from "react";
import PageHeader from "@/components/PageHeader";
import Faqs from "@/components/Faqs";
//import ProductDisplay from "../components/ProductDisplay";
import career_image from "@/public/assets/images/png/careers_page_image.png";
import Image from "next/image";



export default function Page() {

    const faqsData = [
        {
          question: 'What is Next.js?',
          answer: 'Next.js is a React framework for building server-side rendered and statically generated web applications.',
        },
        {
          question: 'How do I install Next.js?',
          answer: 'You can install Next.js by running `npm install next react react-dom` or `yarn add next react react-dom`.',
        },
        // Add more FAQ items as needed
      ];
      
  return (
<main>

<PageHeader header="FAQ" />

      {/* FAQ's  */}

      <div className="mb-28 mt-11">
        <h2 className=" text-[#0064A3] font-boldx text-center text-3xl mb-4">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 px-20">
          <Faqs faqs={faqsData} />
        </div>
      </div>

      

</main>
  );
}