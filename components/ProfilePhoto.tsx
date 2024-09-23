import React from "react";
import Image from "next/image";
import company from "../public/logo2.png";
import ellipsel from "../public/Ellipsel.png";
import ellipser from "../public/Ellipser.png";

export const ProfilePhoto = () => {
  return (
    <div className="hidden lg:block relative">
      

      <div
        className="p-4 shadow-2xl z-10 relative"
        style={{
          background: "linear-gradient(132deg, #c2c2c2 0%, #969696 100%)",
          width: "30vw", // Adjust width based on your design
        }}
      >
        <Image
          src={company}
          alt="abdullah"
          className="rounded-lg z-10"
          style={{ width: "100%" }} // Image width is relative to the parent div
          priority
        />
      </div>

      
    </div>
  );
};
