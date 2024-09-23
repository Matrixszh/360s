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
          360 Marketing Solutions is a 
          leading providerof comprehensive marketing strategiesdesigned to drive growth
          and elevate brandpresence. We specialize in creating integratedmarketing campaigns that deliver
          measurableresults across various channels.
          <span className="hidden lg:flex lg:pt-4 tracking-tight">
            To be the go-to partner for business seeking to acheive marketing excellence through innovative and 
            integrated strategies. We aim to empower brands with the tools and insights needed navigate complex digital 
            landscape achieve sustainable growth. 
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
