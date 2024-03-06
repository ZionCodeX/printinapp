'use client';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Logo from "@/public/assets/images/svg/Printin_logo.svg";
import facebook from "@/public/assets/images/svg/facebook_logo_icon.svg";
import instagram from "@/public/assets/images/svg/instagram_logo_icon.svg";
import linkedin from "@/public/assets/images/svg/linkedin_logo.svg";
import Slide0 from "@/public/assets/images/carousel/slidex4.jpg";
import Slide1 from "@/public/assets/images/carousel/slidex1.jpg";
import Slide2 from "@/public/assets/images/carousel/slidex3.jpg";
import Slide3 from "@/public/assets/images/carousel/slidex2.jpg";

const Carousel = () => {

        return (
            <main>



<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
            <Image
              src={Slide0}
              width={1600}
              //height={300}
              className="w-full"
              alt="About Us Image"
            />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
            <Image
              src={Slide1}
              width={1600}
              //height={300}
              className="w-full"
              alt="About Us Image"
            />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
            <Image
              src={Slide2}
              width={1600}
              //height={300}
              className="w-full"
              alt="About Us Image"
            />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
            <Image
              src={Slide3}
              width={1600}
              //height={300}
              className="w-full"
              alt="About Us Image"
            />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div><br /><br />



            </main>
        )

}

export default Carousel