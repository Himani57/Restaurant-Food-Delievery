"use client";
import React, { useEffect, useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price);
  const [selected, setSelected] = useState(0);

  useEffect(()=>{
    setTotal(
        quantity * (options ? price + options[selected].additionalPrice : price)
    );
  },[quantity, selected, options, price])

  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* Option container */}
      <div className="flex gap-4">
        {options?.map((option,index) => (
          <button className="border min-w-[6rem] p-2 rounded-xl" key={option.title}
          style={{
            background: selected === index ? "rgb(248 113 113)" : "white",
            color : selected === index ? "white" : "red"
          }}

          onClick={()=>setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* Quantity container */}
      <div className="flex items-center justify-between">
        <div className="flex p-3 justify-between w-full border">
          <span>Quantity</span>
          <div className="flex gap-2 items-center">
            <button
              onClick={() =>setQuantity(prev=>(prev>1 ? prev-1 : 1))
              }
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(prev=>(prev<9 ? prev+1 : 9))}>
              {">"}
            </button>
          </div>
        </div>

        <button
          onClick={() => setQuantity(quantity + 1)}
          className="bg-red-500 w-56 uppercase text-white p-3.5"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
