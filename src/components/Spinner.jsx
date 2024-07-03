import React,{useEffect} from 'react'
import Loader from "../assets/images/loader.gif";

function Spinner() {

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }
    }, [])

  return (
    <>
        <div className='fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-onprimary bg-opacity-70'>
            <img src={Loader} alt="loading" className='h-28 w-28'/>
        </div>
    </>
  )
}

export default Spinner