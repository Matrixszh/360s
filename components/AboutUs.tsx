import React from "react";
import Image from "next/image";
import underline from "../public/underline.png";
import company from "../public/logo2.png";
import { ProfilePhoto } from "./ProfilePhoto";
export const AboutUs = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-5  lg:px-16 gap-14">
      <div className="flex flex-col gap-6  lg:items-start items-center">
        <h1 className="flex gap-2 text-white text-3xl lg:text-4xl">
          Meet{" "}
          <span className="flex text-[#7384f0] flex-col items-center">
            <p>Abdullah Ghaffar</p>
            <Image
              src={underline}
              alt="underline"
              className="lg:w-[200px] w-[180px]"
              priority
            />
          </span>{" "}
        </h1>
        <p
          className="text-lg text-white lg:text-xl lg:pr-14 text-justify text-center  px-2 tracking-tight"
          style={{ lineHeight: "1.85" }}
        >
          360 Marketing Solutions is a dynamic, forward-thinking marketing agency founded by young entrepreneur Mohammed Abdul Ayaan. With a passion for innovation and a keen understanding of the digital landscape, Ayaan launched 360 Marketing Solutions to empower businesses with comprehensive, results-driven marketing strategies.
          <span className="hidden lg:flex lg:pt-4 tracking-tight">
          Our mission is simple: to provide brands with a full-circle marketing approach that maximizes their potential across all platforms—digital, social, and traditional. We believe that every brand has a unique story, and it’s our job to bring that story to life in a way that captivates audiences and drives measurable success. Led by a visionary young entrepreneur, 360 Marketing Solutions combines creativity with data-driven insights to deliver strategies that not only meet but exceed client expectations.
            </span>
        </p>
      </div>
      <div className="">
        <ProfilePhoto />
        <Image
          src={company}
          alt="abdullah"
          className="rounded-full lg:hidden  w-[70vw] shadow-2xl"
        />
      </div>
    </div>
  );
};
