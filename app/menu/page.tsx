import React from "react";
import { menu } from "@/app/data";
import Link from "next/link";

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20  h-[calc(100vh-6rem)] flex flex-col md:flex-row bg-white items-center xl:px-40 md:h-[calc(100vh-9rem)] ">
      {menu.map((category) => (
        <Link
          key={category.id}
          href={`/menu/${category.slug}`}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2 "
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className="text-black w-1/2 " >
            <h1 className="uppercase font-bold text-3xl ">{category.title}</h1>
            <p className="text-sm my-6">{category.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
