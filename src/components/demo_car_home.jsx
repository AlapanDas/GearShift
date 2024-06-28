import React from 'react'
import Card from './Cards'
import all_data from '../assets/car-data.json'
import { Link } from 'react-router-dom'


const demo_car_home = (props) => {
    return (
        <div className='pt-24'>
            <h1 className='text-center font-sans font-semibold text-6xl pb-16 dark:text-white'>
                Start Your Journey
            </h1>
            <div className='mx-auto grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-6 p-4 justify-items-center'>
                {
                    all_data.cars
                        .filter(item => props.category === item.category)
                        .map((item) => {
                            return <Card Data={item} />
                        })


                }
            </div>
            
        </div>
    )
}

export default demo_car_home
