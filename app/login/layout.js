"use client";
import React, { useEffect, useState } from "react";
import Sign from "../login/number/page";
// import coms from "../assets/Images/coms.png";
// import prosit from "../assets/Images/prosit.png";
// import topic from "../assets/Images/topic.png";
import Image from "next/image";

export default function loginLayout({ children }) {
  const [activeSlide, setActiveSlide] = useState(0);
  // const slides = [{ img: coms }, { img: prosit }, { img: topic }];

  // const nextSlide = () => {
  //   setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
  // };

  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 3000); // Auto-play every 3 seconds

  //   return () => {
  //     clearInterval(interval); // Cleanup on unmount
  //   };
  // }, []);

  return (
    <div className="h-screen w-screen bg-white flex pn:max-sm:flex-col">
      <div className="w-[50%] h-[100%] flex justify-center items-center pn:max-sm:w-[100%] pn:max-sm:h-[100%]">
        {children}
      </div>
    </div>
  );
}
