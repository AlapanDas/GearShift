import { useState } from 'react'
import car from '../assets/images/car.svg'
import brand from '../assets/images/brand.svg'
import { Dialog, DialogPanel } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'


const data = {
     cars: [
          {
               "brand": "Ford",
               "name": "Explorer RWD",
               "barrels08": 12.39625,
               "barrelsa08": 0,
               "charge120": 0,
               "charge240": 0,
               "city08": 21,
               "city08u": 21.0347,
               "citya08": 0,
               "citya08u": 0,
               "citycd": 0,
               "citye": 0,
               "cityuf": 0,
               "co2": 370,
               "co2a": -1,
               "co2tailpipeagpm": 0,
               "co2tailpipegpm": 370,
               "comb08": 24,
               "comb08u": 23.8887,
               "comba08": 0,
               "comba08u": 0,
               "combe": 0,
               "combinedcd": 0,
               "combineduf": 0,
               "cylinders": 4,
               "displ": 2.3,
               "drive": "Rear-Wheel Drive",
               "engid": "1",
               "eng_dscr": [
                    "SIDI; Stop-Start"
               ],
               "fescore": 5,
               "fuelcost08": 2400,
               "fuelcosta08": 0,
               "fueltype": "Regular",
               "fueltype1": "Regular Gasoline",
               "ghgscore": 5,
               "ghgscorea": null,
               "highway08": 28,
               "highway08u": 28,
               "highwaya08": 0,
               "highwaya08u": 0,
               "highwaycd": 0,
               "highwaye": 0,
               "highwayuf": 0,
               "hlv": 0,
               "hpv": 0,
               "id": "46399",
               "lv2": 0,
               "lv4": 0,
               "mpgdata": "N",
               "phevblended": "false",
               "pv2": 0,
               "pv4": 0,
               "range": 0,
               "rangecity": 0,
               "rangecitya": 0,
               "rangehwy": 0,
               "rangehwya": 0,
               "trany": "Automatic 10-spd",
               "ucity": 26.7,
               "ucitya": 0,
               "uhighway": 40.8,
               "uhighwaya": 0,
               "vclass": "Standard Sport Utility Vehicle 2WD",
               "year": "2023",
               "yousavespend": -1500,
               "guzzler": null,
               "trans_dscr": null,
               "tcharger": "T",
               "scharger": null,
               "atvtype": null,
               "fueltype2": null,
               "rangea": null,
               "evmotor": null,
               "mfrcode": "FMX",
               "c240dscr": null,
               "charge240b": 0,
               "c240bdscr": null,
               "createdon": "2023-01-26",
               "modifiedon": "2023-06-01",
               "startstop": "Y",
               "phevcity": 0,
               "phevhwy": 0,
               "phevcomb": 0,
               "basemodel": "Explorer"
          }
     ]
}
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

