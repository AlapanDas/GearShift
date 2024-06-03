import React from 'react'
import Card from '../components/Cards'
import data from '../assets/data.json'
export default function CardPage() {
  return (
     <div className='mx-auto grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-6 p-4 justify-items-center'>
     {data.results.map((carData) => (
       <Card Data={carData} />
     ))}
   </div>
  )
}
