import React, { useState } from 'react'
import Card from '../components/Cards'
import { useLocation } from 'react-router-dom';
import FilterEngine from '../components/FilterEngine'
import Cookies from 'js-cookie';
import Loader from "../assets/images/loader.gif";

export default function Result(Params) {
     const location = useLocation();
     const [searchdata, setData] = useState(location.state);
     const [spin, setSpin] = useState(false);

     const SpinAtClick = (allow)=>{
          setSpin(allow)
     }

     const ClickAtFilter = (data) => {
          setData({ ...data });
     }

     return (
          <>
               <div className=' dark:bg-primary'>
                    <div className=' pt-10'>
                         <FilterEngine whenClick={ClickAtFilter} isSpin={SpinAtClick}/>
                    </div>
                    <div className='min-h-56 py-16 flex justify-center items-center'>
                         {spin ? 
                         <div className=' flex flex-col justify-center items-center'>
                              <img src={Loader} alt="loading" className=' h-72 w-72 -mt-5'/>
                              <p className='mt-1 font-semibold text-xl'>Loading</p>
                         </div>
                         : 
                         <div>
                         {!searchdata || searchdata.car.length === 0 ?
                              <div className='flex flex-col justify-center items-center'>
                                   <div className=' flex justify-center items-start min-h-32'>
                                        <div className='font-bold text-3xl dark:text-btncol  opacity-80 text-darkbg'>
                                             No Results Found
                                        </div>
                                   </div>
                                   <div className='flex flex-col justify-center items-center'>
                                        <div className=' text-4xl font-semibold text-primary dark:text-white'>Your Previous Searches</div>
                                        {document.cookie.includes("filterData") ? <div className='dark:shadow-inner overflow-x-hidden mx-auto grid 2xl:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-6 p-4 justify-items-center pb-16 h-80 overflow-scroll mt-12 mb-8'>
                                             {JSON.parse(decodeURIComponent(Cookies.get("filterData"))).car.map((element) => {
                                                  return <div><Card Data={element} /></div>
                                             })}
                                        </div> : <div className=' min-h-20 mt-10 text-lg font-semibold opacity-80 dark:text-white'>There's No Search history</div>}

                                   </div>
                              </div>
                              :
                              <div className='pb-10'>
                                   <div className='mx-auto grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-6 p-4 justify-items-center'>
                                        {searchdata.car.map((element) => {
                                             return <div><Card Data={element} /></div>
                                        })}
                                   </div>
                              </div>
                         }
                         </div>}
                    </div>

               </div>
          </>
     )
}
