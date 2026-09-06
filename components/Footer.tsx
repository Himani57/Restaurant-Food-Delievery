import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
   <div className='flex border-2 h-12 md:h-24 p-4 md:p-14 xl:p-40 text-red-500 items-center justify-between'>
    <Link href='/' className='font-bold text-xl'>MASSIMO</Link>
    <p>ALL RIGHTS RESERVED</p>
   </div>
  )
}

export default Footer