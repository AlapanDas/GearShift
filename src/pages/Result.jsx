import React, { useState } from 'react'
import Card from '../components/Cards'
import { useLocation } from 'react-router-dom';
import FilterEngine from '../components/FilterEngine'
import Cookies from 'js-cookie';

export default function Result(Params) {
     const location = useLocation();
     const [searchdata, setData] = useState(location.state);

     const ClickAtFilter = (data) => {
          setData({ ...data });
     }

     return (
          <>
          <div className=' dark:bg-primary'>
               <div className=' pt-10'>
                <FilterEngine whenClick={ClickAtFilter} />
               </div>
               <div className='min-h-40'>
               {!searchdata || searchdata.car.length === 0 ?
                    <div className='flex flex-col justify-center items-center'>
                         <div className=' flex justify-center items-center min-h-40'>
                              <div className='font-bold text-3xl text-notif opacity-80'>
                                   No Results Found
                              </div>
                         </div>
                         <div className='flex flex-col justify-center items-center'>
                              <div className=' text-4xl font-semibold text-primary dark:text-white'>Your Previous Searches are here</div>
                              {document.cookie.includes("filterData") ? <div className='mx-auto grid 2xl:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-6 p-4 justify-items-center pb-16 h-80 overflow-scroll mt-12 mb-8'>
                                   {JSON.parse(decodeURIComponent(Cookies.get("filterData"))).car.map((element) => {
                                        return <div><Card Data={element} /></div>
                                   })}
                              </div> : <div className=' min-h-20 mt-10 text-lg font-semibold opacity-80'>There's No Search history</div>}
                              
                         </div>
                    </div>
                    :
                    <div><div className='mx-auto grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-6 p-4 justify-items-center'>
                         {searchdata.car.map((element) => {
                              return <div><Card Data={element} /></div>
                         })}
                    </div>
                    </div>
               }
               </div>

          </div>
          </>
     )
}
