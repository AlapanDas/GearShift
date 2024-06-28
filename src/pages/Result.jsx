import React, { useState } from 'react'
import Card from '../components/Cards'
import { useLocation } from 'react-router-dom';
import FilterEngine from '../components/FilterEngine'

export default function Result(Params) {
     const location = useLocation();
     const [searchdata, setData] = useState(location.state);
     const ClickAtFilter = (data) => {
          setData({ ...data });

     }
     return (
          <div className='dark:bg-black'>
               <div className='flex items-center justify-center'>
                    <FilterEngine whenClick={ClickAtFilter} />
               </div>

               {!searchdata || searchdata.length === 0 ?
                    <div></div>
                    :
                    <div><div className='mx-auto grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-6 p-4 justify-items-center'>
                         {searchdata.car.map((element) => {
                              return <Card Data={element} />
                         })}
                    </div>
                    </div>
               }


          </div>
     )
}
