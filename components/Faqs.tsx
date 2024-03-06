import { useState } from "react";
import arrowdown from "@/public/assets/images/svg/down-arrow-7425.svg";
import Image from "next/image";
import Faq from "@/lib/faq_data"

interface FAQProps {
    faqs: { question: string; answer: string }[];
  }
  
  const FAQ: React.FC<FAQProps> = ({ faqs }) => {
    return (

      <div>
        {Faq.map((faq, index) => (


    <div key={index}>

          <div className="collapse bg-[#87c5ff]">
            <input type="radio" name="my-accordion-1" /> 
            <div className="collapse-title text-xl font-medium">
                {faq.question}
            </div>
            
            <hr />
            <hr />
            
            <div className="collapse-content text-xl bg-[#e1f1ff]"> 
              <p>{faq.answer}</p>
            </div>
          </div>

    </div>


        ))}
      </div>
    );
  };
  
  export default FAQ;