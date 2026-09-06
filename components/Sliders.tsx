'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Sliders = () => {

    const[currentSlide, setCurrentSlide] = useState(0);

    // useEffect(()=>{
    //     const interval = setInterval(()=>
    //         setCurrentSlide(prev=>(prev === data.length-1 ? 0 : prev+1))
    //     ,2000)
    //     return ()=>clearInterval(interval);
    // },[])

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] bg-fuchsia-50 lg:flex-row ">
      <div className="flex-1 flex flex-col gap-8 items-center justify-center text-red-500 font-bold">
        <h1 className="text-5xl md:text-6xl md:p-10 xl:text-7xl text-center uppercase">
          {data[currentSlide].title}
        </h1>
        <button className="border bg-red-500 text-white py-2 px-3 rounded-lg">
          Order Now
        </button>
      </div>

      <div className="flex-1 w-full relative flex-1 ">
        <Image src={data[currentSlide].image} alt="" fill className="object-cover lg:overflow-hidden" />
      </div>
    </div>
  );
};

export default Sliders;
