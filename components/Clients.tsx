'use client';
import React from 'react'
import Image from 'next/image';
import speedometer from "../assets/svg/speedometer_icon.svg";
import quality from "../assets/svg/quality_icon.svg";
import affordability from "../assets/svg/money_icon.svg";
import Link from 'next/link'
import Logo from "@/public/assets/images/svg/Printin_logo.svg";

import client1 from "@/public/assets/images/clients/coca_cola.png";
import client2 from "@/public/assets/images/clients/ethihad_energy.png";
import client3 from "@/public/assets/images/clients/house_of_tara.png";
import client4 from "@/public/assets/images/clients/vitamin_angels.png";
import client5 from "@/public/assets/images/clients/mactay_group.png";
import client6 from "@/public/assets/images/clients/cosse.png";
import client7 from "@/public/assets/images/clients/dawn_commision.png";
import client8 from "@/public/assets/images/clients/deerfield_petroleun.png";
import client9 from "@/public/assets/images/clients/toonifique_company.png";
import client10 from "@/public/assets/images/clients/green_world.png";
import client11 from "@/public/assets/images/clients/olakunle_soriyan.png";
import client12 from "@/public/assets/images/clients/polo.png";
import client13 from "@/public/assets/images/clients/ar.png";
import client14 from "@/public/assets/images/clients/shea_origin.png";
import client15 from "@/public/assets/images/clients/lagos_state.png";


const Clients = () => {

  return (
    <main>

      
      {/* CLIENTS UI  */}

      <h2 className="text-center text-[#0064A3] font-thin text-4xl mb-4">
           <div className='text-[#ff9350]'>|</div> Our Clients <div className='text-[#ff9350]'>|</div>
      </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-5 grayscale">
        <div className="flex justify-center items-center p-4">
            <Image src={client1} alt="Image 1" className="h-auto w-3/5 object-cover" />
        </div>
        <div className="flex justify-center items-center p-4">
            <Image src={client2} alt="Image 2" className="h-auto w-3/5 object-cover" />
        </div>
        <div className="flex justify-center items-center p-4">
            <Image src={client3} alt="Image 3" className="h-auto w-3/5 object-cover" />
        </div>
        <div className="flex justify-center items-center p-4">
            <Image src={client4} alt="Image 1" className="h-auto w-3/5 object-cover" />
        </div>
        <div className="flex justify-center items-center p-4">
            <Image src={client5} alt="Image 2" className="h-auto w-3/5 object-cover" />
        </div>
        <div className="flex justify-center items-center p-4">
            <Image src={client6} alt="Image 3" className="h-auto w-3/5 object-cover" />
        </div>
        <div className="flex justify-center items-center p-4">
            <Image src={client7} alt="Image 1" className="h-auto w-3/5 object-cover" />
        </div>
        <div className="flex justify-center items-center p-4">
            <Image src={client8} alt="Image 3" className="h-auto w-3/5 object-cover" />
        </div>
        <div className="flex justify-center items-center p-4">
            <Image src={client9} alt="Image 1" className="h-auto w-3/5 object-cover" />
        </div>
        <div className="flex justify-center items-center p-4">
            <Image src={client10} alt="Image 2" className="h-auto w-3/5 object-cover" />
        </div>
        <div className="flex justify-center items-center p-4">
            <Image src={client11} alt="Image 3" className="h-auto w-3/5 object-cover" />
        </div>
        <div className="flex justify-center items-center p-4">
            <Image src={client12} alt="Image 1" className="h-auto w-3/5 object-cover" />
        </div>
        <div className="flex justify-center items-center p-4">
            <Image src={client13} alt="Image 2" className="h-auto w-3/5 object-cover" />
        </div>
        <div className="flex justify-center items-center p-4">
            <Image src={client14} alt="Image 3" className="h-auto w-3/5 object-cover" />
        </div>
        <div className="flex justify-center items-center p-4">
            <Image src={client15} alt="Image 2" className="h-auto w-3/5 object-cover" />
        </div>
    </div><br />


    </main>
)
}

export default Clients