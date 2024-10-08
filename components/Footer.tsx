import React from "react";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="bg-black rounded-lg dark:bg-gray-900 m-4 pt-12">
      <div className="w-full  mx-auto p-4 md:py-8">
        <div className="flex flex-col items-center justify-between md:flex-row gap-4 md:gap-0">
          <Link href="/" passHref>
            <div className="inline-block">
              <Image
                src={logo}
                alt="logo"
                className="md:h-[100px] h-[100px] w-auto  hover:cursor-pointer"
                priority
              />
            </div>
          </Link>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-500">
            <li>
              <a href="#about" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#affiliate" className="hover:underline me-4 md:me-6">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
          </ul>
        </div>
        <div className="flex  items-center justify-center gap-8">
          <div className="flex flex-col justify-between gap-4">
            <Link href="mailto:360mkgtsolutions@gmail.com ">
              <IoMailOutline className="text-[#7384f0] md:text-3xl text-2xl animate-pulse" />
            </Link>
            <Link href="tel:+91 9885017861">
              <MdOutlinePhoneInTalk className="text-[#7384f0] md:text-3xl text-2xl animate-pulse" />
            </Link>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <Link
              href="mailto:360mkgtsolutions@gmail.com "
              className="md:text-xl text-gray-500 text-lg"
            >
              {" "}
              360mkgtsolutions@gmail.com
            </Link>
            <Link href="tel:+91 9885017861" className="md:text-xl text-gray-500 text-lg">
              {" "}
              9885017861
            </Link>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-white">
          © 2024{" "}
          <a href="/" className="hover:underline">
            360 Marketing Solutions™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
