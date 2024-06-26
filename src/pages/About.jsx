import React from 'react'
import Trusted_img from '../assets/images/trust.avif'
import Handshake_img from '../assets/images/hand_shake.avif'
import Verified_img from '../assets/images/verified.avif'
import User_img from '../assets/images/member-photos/user.jpeg'

const About = () => {
  return (
    <div className='dark:bg-black dark:text-white'>
      <div id='intro' className=' pb-20 font-semibold font-sans h-auto w-full flex flex-col gap-[40px]'>
        <h3 className='text-4xl text-center mt-[100px] max-sm:text-3xl'>Let's Gear Up</h3>
        <div id='main_heading' className='text-center text-7xl max-sm:text-5xl max-sm:ml-7 max-sm:mr-7'>
            <h1>Shift the Gear</h1>
            <h1>Make the life easier</h1>
        </div>
        <h3 className='text-4xl max-sm:text-2xl text-[#686767] dark:text-onprimary text-center ml-12 mr-12 lg:ml-36 lg:mr-36'>At Gearshift, we put the driver's seat in your hands. We're an online marketplace that simplifies car buying, making it easier than ever to find your dream ride.</h3>
      </div>
      <div id="why-gearshift" className='font-semibold font-sans pb-24 flex items-center justify-center flex-col'>
        <h2 className="text-6xl text-center mt-[50px] max-sm:ml-4 max-sm:mr-4">Why GearShift?</h2>
        <div className="container flex max-lg:w-full max-lg:flex-col lg:flex-row items-center max-lg:justify-center max-lg:items-center justify-around pt-16 pb-16">
            <div className='card max-lg:mt-20 max-lg:w-[80%] h-[400px] w-[25%] bg-white shadow-2xl  flex items-end transition ease-in-out delay-150 relative hover:translate-y-[20px] before:content-[""] before:absolute before:top-0 before:left-0 before:block before:w-full before:h-full before:bg-[#0e0b0551] before:z-20 before:transition-all before:opacity-0 hover:before:opacity-100 rounded-2xl group before:rounded-2xl max-lg:before:bg-[#0e0b0551] max-lg:before:opacity-100
            max-lg:hover:translate-y-0'>
                <img className='h-full w-full object-cover top-0 left-0 absolute rounded-2xl' src={Trusted_img} alt="image" />
                <div className="info relative z-30 text-white lg:opacity-0 lg:translate-y-8 lg:transition-all lg:group-hover:opacity-100 lg:group-hover:translate-y-0 mb-56 p-6">
                    <h4 className=' text-3xl mb-5'>100 % Trusted</h4>
                    <p>Payment guarantee, all transactions are verified</p>
                </div>
            </div>
            <div className='card max-lg:mt-20 max-lg:w-[80%] h-[400px] w-[25%] bg-white shadow-2xl  flex items-end transition ease-in-out delay-150 relative hover:translate-y-[20px] before:content-[""] before:absolute before:top-0 before:left-0 before:block before:w-full before:h-full before:bg-[#0e0b0551] before:z-20 before:transition-all before:opacity-0 hover:before:opacity-100 rounded-2xl group before:rounded-2xl
            max-lg:before:bg-[#0e0b0551] max-lg:before:opacity-100
            max-lg:hover:translate-y-0'>
            <img className='h-full w-full object-cover top-0 left-0 absolute rounded-2xl' src={Handshake_img} alt="image" />
                <div className="info relative z-30 text-white lg:opacity-0 lg:translate-y-8 lg:transition-all lg:group-hover:opacity-100 lg:group-hover:translate-y-0 mb-48 p-6">
                    <h4 className=' text-3xl mb-5'>24*7 Customer Support</h4>
                    <p className=' pt-4'>Make all transactions directly with the seller</p>
                </div>
            </div>
            <div className='card max-lg:mt-20 max-lg:w-[80%] h-[400px] w-[25%] bg-white shadow-2xl  flex items-end transition ease-in-out delay-150 relative hover:translate-y-[20px] before:content-[""] before:absolute before:top-0 before:left-0 before:block before:w-full before:h-full before:bg-[#0e0b0551] before:z-20 before:transition-all before:opacity-0 hover:before:opacity-100 rounded-2xl group before:rounded-2xl max-lg:before:bg-[#0e0b0551] max-lg:before:opacity-100
            max-lg:hover:translate-y-0'>
            <img className='h-full w-full object-cover top-0 left-0 absolute rounded-2xl' src={Verified_img} alt="image" />
                <div className="info relative z-30 text-white lg:opacity-0 lg:translate-y-8 lg:transition-all lg:group-hover:opacity-100 lg:group-hover:translate-y-0 p-6 max-lg:z-30 mb-60">
                    <h4 className=' text-3xl mb-5'>Verified</h4>
                    <p>All transactions are concluded legally with an agreement</p>
                </div>
            </div>
        </div>
      </div>
      <div id="team" className='font-semibold font-sans pb-24'>
      <h2 className="text-6xl text-center mt-[50px]">Our Team</h2>
      <div id="container" className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-16">
        <div className="member flex flex-col items-center h-[400px] pt-12">
          <img src={User_img} alt="profile" className='h-[150px] w-[150px] rounded-full shadow-custom dark:shadow-[#999797] z-20'/>
          <div className="info flex flex-col items-center justify-center mt-10">
          <h4 className='text-2xl'>Alapan Das</h4>
          <p className='mt-4 text-lg font-bold text-[#686767]'>Developer</p>
          <div className="socials flex items-center justify-around mt-4 w-32 h-10">
            <a target='_blank' className='text-2xl text-[#0077B5] lg:hover:text-black lg:dark:hover:text-white' href="https://www.linkedin.com/in/alapandas3/"><i class="fa-brands fa-linkedin"></i></a>
            <a target='_blank' className='text-2xl' href="https://github.com/AlapanDas"><i class="fa-brands fa-github"></i></a>
          </div>
          </div>
        </div>
        <div className="member flex flex-col items-center h-[400px] pt-12">
          <img src={User_img} alt="profile" className='h-[150px] w-[150px] rounded-full shadow-custom dark:shadow-[#999797] z-20'/>
          <div className="info flex flex-col items-center justify-center mt-10">
          <h4 className='text-2xl'>Aniruddha Mukherjee</h4>
          <p className='mt-4 text-lg font-bold text-[#686767]'>Developer</p>
          <div className="socials flex items-center justify-around mt-4 w-32 h-10">
            <a target='_blank' className='text-2xl text-[rgb(0,119,181)] lg:hover:text-black lg:dark:hover:text-white' href="https://www.linkedin.com/in/aniruddha-mukherjee-140840232/"><i class="fa-brands fa-linkedin"></i></a>
            <a target='_blank' className='text-2xl' href="https://github.com/anistdnt"><i class="fa-brands fa-github"></i></a>
          </div>
          </div>
        </div>
        <div className="member flex flex-col items-center h-[400px] pt-12">
          <img src={User_img} alt="profile" className='h-[150px] w-[150px] rounded-full shadow-custom dark:shadow-[#999797] z-20'/>
          <div className="info flex flex-col items-center justify-center mt-10">
          <h4 className='text-2xl'>Arkabrata Chandra</h4>
          <p className='mt-4 text-lg font-bold text-[#686767]'>Developer</p>
          <div className="socials flex items-center justify-around mt-4 w-32 h-10">
            <a target='_blank' className='text-2xl text-[#0077B5] lg:hover:text-black lg:dark:hover:text-white' href="https://www.linkedin.com/in/arkabrata-chandra-a26a61257/"><i class="fa-brands fa-linkedin"></i></a>
            <a target='_blank' className='text-2xl' href="https://github.com/itzarkabrata"><i class="fa-brands fa-github"></i></a>
          </div>
          </div>
        </div>
        <div className="member flex flex-col items-center h-[400px] pt-12">
          <img src={User_img} alt="profile" className='h-[150px] w-[150px] rounded-full shadow-custom dark:shadow-[#999797] z-20'/>
          <div className="info flex flex-col items-center justify-center mt-10">
          <h4 className='text-2xl'>Apratim Raha</h4>
          <p className='mt-4 text-lg font-bold text-[#686767]'>Developer</p>
          <div className="socials flex items-center justify-around mt-4 w-32 h-10">
            <a target='_blank' className='text-2xl text-[#0077B5] lg:hover:text-black lg:dark:hover:text-white' href="https://www.linkedin.com/in/apratim-raha-1948a1245?trk=contact-info"><i class="fa-brands fa-linkedin"></i></a>
            <a target='_blank' className='text-2xl' href="https://github.com/Appy-007"><i class="fa-brands fa-github"></i></a>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
