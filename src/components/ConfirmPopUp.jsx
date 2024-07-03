import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function ConfirmPopUp(props) {

    const conf_delete = ()=>{
        props.deleteuser()
    }

    const conf_logout = () => {
        props.logout()
    }

    const cancel = () => {
        props.confLogout();
    }

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }
    }, [])


    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className=' fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-onprimary bg-opacity-70' onClick={cancel}>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className=' fixed w-80 sm:w-96 text-center bg-white px-7 py-5 rounded-lg'>
                        <div className=' font-bold text-primary text-2xl sm:text-3xl mb-2'>{props.text.title}</div>
                        <p className='text-sm mb-5'>{props.text.type==="Delete" ? "Your Account will be permanently deleted from our server":"Your credentials will be preserved by us for the next time you log in"}</p>
                        <div className='flex justify-evenly'>
                            {props.text.type==="Delete" ? <button className=' bg-alert text-white font-semibold py-1 px-2 rounded-md' onClick={conf_delete}><i className="fa-solid fa-circle-check mr-1"></i>Confirm Delete</button> : 
                            <button className=' bg-btncol text-primary font-semibold py-1 px-2 rounded-md' onClick={conf_logout}><i className="fa-solid fa-circle-check mr-1"></i>Confirm</button>}
                            <button className=' bg-darkbg text-white font-semibold py-1 px-2 rounded-md' onClick={cancel}><i className="fa-solid fa-ban mr-1"></i>Cancel</button>
                        </div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default ConfirmPopUp