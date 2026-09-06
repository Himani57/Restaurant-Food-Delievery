import { pizzas } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap bg-white text-red-500">
      {pizzas.map((item) => (
        <Link
          className="w-full odd:bg-fuchsia-50 group gap-7 flex flex-col justify-baseline p-4 h-[60vh] sm:w-1/2 lg:w-1/3 xl:w-1/4 border-red-500 border-b-2 border-r-2"
          key={item.id}
          href={`/product/${item.id}`}
        >
          {/* Image container */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image
                src={item.img}
                className="object-contain"
                alt=""
                fill
              ></Image>
            </div>
          )}
          {/* Text container */}
          <div className="flex font-bold items-center justify-between ">
            <h1 className="uppercase text-xl p-2 ">{item.title}</h1>
            <span className="group-hover:hidden text-xl">${item.price}</span>
            <button className= "hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md ">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
