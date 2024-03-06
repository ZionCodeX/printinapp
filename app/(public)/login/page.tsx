import { Suspense } from 'react'
import Image from "next/image";
import background from "@/public/assets/images/jpeg/background.jpg";
import Link from "next/link";
import Loading from '@/app/(public)/loading';

export default function Page() {
  return (
<main>
  
<Suspense fallback={<Loading />}>
<div
        style={{ backgroundImage: "url(" + background.src + ")" }}
        className="w-1/1 h-screen bg-no-repeat bg-cover bg-center opacity-30x relative bg-fixed"
      >


      
      <div className=" max-w-7xl mx-auto mb-20 mt-0 py-20 drop-shadow-md">

        <h2 className="text-center text-[#0064A3] font-bold text-2xl mb-6">
          Login
        </h2>

        <div className="flex justify-center">
          {/* LOGIN FORM  */}
          <form className="flex flex-col gap-8 bg-[#CAEFFF] py-10 px-6 lg:px-36 rounded-lg">
            {/* TEST EMAIL FIELD  */}
            {/* <div className="flex items-center">
              <label for="field1" className="w-32 font-semibold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-96 border border-gray-300 rounded-full p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div> */}

            {/* TEST PASSWORD FIELD  */}
            {/* <div className="flex items-center">
              <label for="field2" className="w-32 font-semibold">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-96 border border-gray-300 rounded-full p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div> */}

            {/* EMAIL FIELD */}
            <div className="group w-80 md:w-80 lg:w-96 mx-auto lg:ml-10 ">
              <div className="relative flex items-center space-x-10">
                <span className="material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  Email
                </span>
                <input
                  id="6"
                  type="text"
                  className="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-bold outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            {/* PASSWORD FIELD  */}
            <div className="group w-80 md:w-80 lg:w-96 mx-auto lg:ml-10 ">
              <div className="relative flex items-center space-x-4">
                <span className="material-symbols-outlined transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                  Password
                </span>
                <input
                  id="6"
                  type="password"
                  className="peer relative h-10 w-full rounded-full bg-gray-50 px-4 font-bold outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                />
              </div>
            </div>

            {/* LOGIN BUTTON  */}
            <div className="flex justify-center md:justify-end">
              <button className="bg-[#129FF7] px-10 py-2 rounded-xl text-white font-semibold">
                Login
              </button>
            </div>

            {/* FORGOT PASSWORD AND SIGN UP  */}
            <div className="flex justify-center md:justify-end text-[#0064A3] font-semibold">
              <p className="border-r-2 border-[#0064A3] pr-7">
                Forgot Password
              </p>
              <p className="ml-7">
                <Link href="/signup">SignUp</Link>
              </p>
            </div>
          </form>
        </div>
      </div></div>
</Suspense>
    
</main>
  );
}
