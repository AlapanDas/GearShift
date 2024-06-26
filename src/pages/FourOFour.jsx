import React from 'react'

export default function FourOFour() {
  return (
    <div className='lg:text-8xl md:text-6xl sm:text-5xl  font-semibold text-onprimary bg-gray p-8 text-center  h-96'><marquee behavior="alternate">
      <span className='text-primary dark:text-onprimary ' >Four</span>
      <span className='text-alert dark:alert ' >O</span>
      <span className='text-primary dark:text-onprimary ' >Four</span>
      </marquee></div>
  )
}
