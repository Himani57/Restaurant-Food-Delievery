import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from 'next/image'

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 md:h-15 lg:px-20  uppercase border-b-2 border-b-red-500 flex items-center justify-between p-4 ">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="text-x md:text-center md:font-bold flex-1">
        <Link href="/">Massimo</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="flex md:absolute top-3 r-2 lg:static items-center gap-2 cursor-pointer bg-orange-300 rounded-md px-1">
          <Image src="/phone.png" alt="phone" height={20} width={20} />
          <span>123 456 789</span>
        </div>

        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}

        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
