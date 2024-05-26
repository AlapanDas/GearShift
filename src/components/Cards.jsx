import { useState } from 'react'
import car from '../assets/images/car.svg'
import brand from '../assets/images/brand.svg'
import { Dialog, DialogPanel } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'



export default function Card({ Data }) {
     let [isOpen, setIsOpen] = useState(false)
     const carData = Data;
     return (
          <button onClick={() => setIsOpen(true)}>


               <div>
                    <AnimatePresence>
                         {isOpen && (
                              <Dialog static open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                                   <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="fixed inset-0 bg-black/30"
                                   />
                                   <div className="fixed inset-0 flex w-screen items-center justify-center p-4 rounded-custom ">
                                        <DialogPanel
                                             as={motion.div}
                                             initial={{ opacity: 0, scale: 0.95 }}
                                             animate={{ opacity: 1, scale: 1 }}
                                             exit={{ opacity: 0, scale: 0.95 }}
                                             className=" relative max-w-4xl space-y-4 bg-white p-8 rounded-custom shadow-custom dark:bg-primary dark:text-white"
                                        >
                                             <button className='absolute top-4 left-4' onClick={() => setIsOpen(false)}>{'<-'}</button>
                                             <div className='flex gap-2 p-2 opacity-70'>
                                                  <div className='grid grid-rows-2 gap-2'>
                                                       <div className='dark:bg-onprimary bg-primary rounded-xl row-span-2'>
                                                            <img width={300} src={car} alt="" />
                                                       </div>
                                                       <div className='dark:bg-onprimary bg-primary rounded-xl dark:text-primary text-onprimary row-span-1 p-4 font-medium text-lg flex flex-col'>
                                                            <p>Petrol Price: ${carData.id}</p>
                                                       </div>
                                                  </div>
                                                  <div className='grid grid-rows-2 gap-1'>
                                                       <div className='text-lg font-semibold p-6 row-span-2 dark:bg-onprimary bg-primary rounded-xl dark:text-primary text-onprimary '>
                                                            <p>Name :{carData.name}</p>
                                                            <p>Brand :{carData.brand}</p>
                                                            <p>Fuel Type :{carData.fueltype}</p>
                                                            <p>Transmission :{carData.trany}</p>
                                                            <p>Year :{carData.year}</p>
                                                       </div>
                                                       <div className=' text-lg font-semibold   row-span-1 rounded-xl dark:text-primary text-onprimary flex  justify-around '>

                                                            <button className='rounded-xl text-notif border backdrop-blur-sm mt-2  px-4 py-2 text-lg font-bold' onClick={() => setIsOpen(false)}>BUY</button>

                                                            <button className='rounded-xl   text-alert border backdrop-blur-sm mt-2  px-4 py-2 text-lg font-bold' onClick={() => setIsOpen(false)}>ADD</button>

                                                       </div>
                                                  </div>
                                             </div>

                                        </DialogPanel>
                                   </div>
                              </Dialog>
                         )}
                    </AnimatePresence>
                    <div className='border border-primary mx-4 bg-onprimary dark:bg-primary  w-64  h-min  shadow-custom rounded-t-custom'>
                         <div>
                              <div className="image p-3 ">
                                   <img src={car} alt="Car" />
                              </div>
                         </div>
                    </div>
                    <div className="border-t-primary border-t flex justify-around dark:bg-white bg-primary dark:text-black text-white py-2 shadow-inner-custom w-64 mx-4 rounded-b-custom h-20  ">
                         <div className='m-2  font-semibold'>
                              <img src={brand} alt="Brand" />
                         </div>
                         <div className='text-start font-body m-2 font-semibold dark:text-primary text-onprimary text-sm'>
                              <p>Name: {carData.name}</p>
                              <p>Price: ${carData.id}</p>
                         </div>
                    </div>
               </div>

          </button>

     )
}

