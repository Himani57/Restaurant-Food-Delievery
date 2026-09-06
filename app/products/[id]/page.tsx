import { singleProduct } from "@/app/data";
import Price from "@/components/Price";
import Image from "next/image";
import React from "react";

const SingleProductPage = () => {
  return (
    <div className="p-4 md:items-center bg-white text-red-500 lg:px-20 xl:px-40 h-screen justify-around flex md:gap-8 flex-col md:flex-row">
      {/* Image Container */}
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={singleProduct.img}
            alt=""
            fill
            className="object-contain"
          ></Image>
        </div>
      )}
      {/* Text Container */}
      <div className="h-1/2 flex flex-col gap-4">
        <h1 className="text-3xl md:text-4xl font-bold uppercase ">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
      </div>
    </div>
  );
};

export default SingleProductPage;
