import { featuredProducts } from "@/app/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen bg-white overflow-x-scroll scrollbar-none text-red-500  ">
      {/* WRAPPER */}
      <div className="w-max flex ">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen hover:bg-fuchsia-50 transition-all duration-300 pt-2 h-[60vh] flex flex-col items-center justify-around md:w-[50vw] lg:w-[33vw] lg:h-[70vh] "
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full p-4 hover:rotate-[60deg] transition-all duration-500 ">
                <Image
                  src={item.img}
                  alt=""
                  fill
                  className="object-contain"
                ></Image>
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex items-center justify-center text-center flex-col gap-4">
              <h1 className="uppercase font-bold text-xl lg:text-2xl ">{item.title}</h1>
              <p className="p-3 lg:p-5">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-red-500 mb-3 lg:px-7 px-3 py-1 text-white rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
