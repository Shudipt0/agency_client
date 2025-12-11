import React from 'react'
import banner from '../images/banner.png'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='relative w-full ' >
      <button className='absolute z-10 bg-blue-500 text-white p-2 rounded-md m-4'>
        <Link href='/'>Back to Home</Link>
        </button>      
      <Image src={banner} alt='banner' className='absolute bg-cover h-screen' />
    </div>
  )
}

export default page
