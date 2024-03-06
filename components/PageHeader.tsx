import React from "react";
import Image from "next/image";
import Contact_Image from "@/public/assets/images/png/About_us_image.png";
import PropTypes from "prop-types";
import background from "@/public/assets/images/jpeg/subpage_background.jpg";
import searchIcon from "@/public/assets/images/svg/icons8-search.svg";

interface ChildProps {
  header: string;
}

const HeaderComponent: React.FC<ChildProps> = ({ header }) => {
  return (
    <div
    style={{ backgroundImage: "url(" + background.src + ")" }}
      className="bg-cover h-[30vh] lg:h-[20vh] text-white mb-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row lg:justify-around py-8">

        <h1 className="text-7xl font-Lobster text-center md:text-left mb-4 drop-shadow-md">
          { header }
        </h1>

        {/* Search Bar  */}
        <div className="group w-96 md:w-96 lg:w-6/12 rounded-full mx-auto lg:mx-0 bg-white px-6 py-4 flex items-center">
          <div className="relative flex items-center w-full shadow-lg">
            <input
              id="8"
              type="email"
              placeholder="Search entire store here..."
              className="text-black peer relative h-10 w-full rounded-md font-bold text-sm bg-gray-50 pl-3 pr-20 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
            />
            <button className="absolute flex items-center justify-center right-0 h-10 w-10 rounded-r-md bg-blue-200 text-xs font-semibold text-white transition-all duration-200 ease-in-out group-focus-within:bg-blue-400 group-focus-within:hover:bg-blue-600">

            {/*IMAGE*/}
            <Image
              src={searchIcon}
              //width={70}
              //height={30}
              className="h-6"
              alt="About Us Image"
          />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
