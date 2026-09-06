import Image from 'next/image';
import React from 'react'
import CountDown from './CountDown';

const Offer = () => {
  return (
    <div className=' h-screen flex flex-col md:flex-row md:h-[70vh]'>

        <div className='flex-1 text-white flex flex-col gap-8 p-6 justify-center text-center items-center'>
            <h1 className='text-5xl font-bold xl:text-7xl '>Delicious Burger & French Fry</h1>
            <p className='lg:text-xl'>Progressively simplify effective e-toilers and process-centric methods of empowerment. Quickly pontificate parallel.</p>
            <CountDown />
            <button className=' bg-red-500 py-3 px-6 rounded-md '>Order Now</button>
        </div>

        <div className='flex-1 w-full relative'>
            <Image src='/offerProduct.png' alt="" fill className='object-contain' ></Image>
        </div>
    </div>
  )
}

export default Offer