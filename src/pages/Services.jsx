import React from "react";
import TireRotation_img from "../assets/images/tire-rotations.jpg";
import Diagnostics_img from "../assets/images/diagnostics.jpg";
import EngineService_img from "../assets/images/engine-service.jpg";


async function handleMail(event){
  event.preventDefault();
  const email=document.getElementById("email").value;
  const service=document.getElementById("service").value;
  const about=document.getElementById("about").value;

  fetch('https://gearshift-backend.onrender.com/user/send_email',{
    method:'POST',
      headers: {
        'Content-Type': 'application/json',
   },
   body: JSON.stringify({
    email: email,
    service:service,
    about:about
   }),
   credentials: 'include',
  })
  .then((response) => response.json()
  ).catch((error)=>{
    console.log("error:",error)
  });
}

function Services() {
  return (
    <div className=" pt-14 px-8 flex flex-col justify-center items-center dark:bg-black dark:text-white">
      <div>
        <p className="text-center text-[#686767] dark:text-white text-xl max-sm:text-md">
          Gearshift offers comprehensive car services, including tyre rotations,
          engine services, and diagnostics. Our certified technicians use
          state-of-the-art equipment to ensure your vehicle runs smoothly.
          Convenient online booking and transparent pricing make Gearshift your
          go-to destination for all your automotive needs.
        </p>
      </div>
      <div
        id="services-title"
        className="font-semibold font-sans pb-24 flex items-center justify-center flex-col"
      >
        <h2 className=" mb-4 text-6xl text-center mt-[50px] max-sm:ml-4 max-sm:mr-4 ">
          Services We Offer
        </h2>
        <div className="container flex max-lg:w-full max-lg:flex-col lg:flex-row items-center max-lg:justify-center max-lg:items-center justify-around pt-16 pb-16">
          <div
            className='card max-lg:mt-20 max-lg:w-[80%] h-[400px] w-[25%] bg-white shadow-2xl  flex items-end transition ease-in-out delay-150 relative hover:translate-y-[20px] before:content-[""] before:absolute before:top-0 before:left-0 before:block before:w-full before:h-full before:bg-[#0e0b0551] before:z-20 before:transition-all before:opacity-0 hover:before:opacity-100 rounded-2xl group before:rounded-2xl max-lg:before:bg-[#0e0b0551] max-lg:before:opacity-100
            max-lg:hover:translate-y-0'
          >
            <img
              className="h-full w-full object-cover top-0 left-0 absolute rounded-2xl"
              src={TireRotation_img}
              alt="services_img"
            />
            <div className="info relative z-30 text-white lg:opacity-0 lg:translate-y-8 lg:transition-all lg:group-hover:opacity-100 lg:group-hover:translate-y-0 mb-31 p-6 ">
              <h4 className=" text-3xl mb-5">Tyre Rotations</h4>
              <p className=" pt-4">
                Gearshift provides expert tyre rotation services to ensure even
                wear, extend tire life, and enhance your vehicle's performance.
              </p>
            </div>
          </div>
          <div
            className='card max-lg:mt-20 max-lg:w-[80%] h-[400px] w-[25%] bg-white shadow-2xl  flex items-end transition ease-in-out delay-150 relative hover:translate-y-[20px] before:content-[""] before:absolute before:top-0 before:left-0 before:block before:w-full before:h-full before:bg-[#0e0b0551] before:z-20 before:transition-all before:opacity-0 hover:before:opacity-100 rounded-2xl group before:rounded-2xl
            max-lg:before:bg-[#0e0b0551] max-lg:before:opacity-100
            max-lg:hover:translate-y-0'
          >
            <img
              className="h-full w-full object-cover top-0 left-0 absolute rounded-2xl"
              src={EngineService_img}
              alt="services_img"
            />
            <div className="info relative z-30 text-white lg:opacity-0 lg:translate-y-8 lg:transition-all lg:group-hover:opacity-100 lg:group-hover:translate-y-0 mb-14 p-6">
              <h4 className=" text-3xl mb-5">Engine Services</h4>
              <p className=" pt-4">
                Gearshift offers comprehensive engine services, including
                repairs, and maintenance, ensuring optimal performance and
                longevity for your vehicle.
              </p>
            </div>
          </div>
          <div
            className='card max-lg:mt-20 max-lg:w-[80%] h-[400px] w-[25%] bg-white shadow-2xl  flex items-end transition ease-in-out delay-150 relative hover:translate-y-[20px] before:content-[""] before:absolute before:top-0 before:left-0 before:block before:w-full before:h-full before:bg-[#0e0b0551] before:z-20 before:transition-all before:opacity-0 hover:before:opacity-100 rounded-2xl group before:rounded-2xl max-lg:before:bg-[#0e0b0551] max-lg:before:opacity-100
            max-lg:hover:translate-y-0'
          >
            <img
              className="h-full w-full object-cover top-0 left-0 absolute rounded-2xl"
              src={Diagnostics_img}
              alt="services_img"
            />
            <div className="info relative z-30 text-white lg:opacity-0 lg:translate-y-8 lg:transition-all lg:group-hover:opacity-100 lg:group-hover:translate-y-0 p-6 max-lg:z-30 mb-20">
              <h4 className=" text-3xl mb-5">Car diagnostics</h4>
              <p className=" pt-4">
                Gearshift provides advanced car diagnostics, identifying issues
                quickly and accurately to ensure your vehicle runs smoothly and
                efficiently.
              </p>
            </div>
          </div>
        </div>
        <h2 className=" mb-4  text-6xl text-center mt-[50px] max-sm:ml-4 max-sm:mr-4 max-sm:text-4xl">
          Fill the form to reach us
        </h2>
      </div>
      <form onSubmit={handleMail}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-lg max-sm:text-sm font-medium leading-6 text-gray-900 "
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-black"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="service"
                className="block text-lg max-sm:text-sm font-medium leading-6 text-gray-900"
              >
                Service
              </label>
              <div className="mt-2">
                <select
                  id="service"
                  name="service"
                  autoComplete="service-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 dark:text-black"
                >
                  <option>Tyre rotation</option>
                  <option>Engine services</option>
                  <option>Car diagnostics</option>
                </select>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-lg max-sm:text-sm font-medium leading-6 text-gray-900"
                >
                  About
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={5}
                    className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-black"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write an overview of the service you want.We will contact you
                  shortly
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900 rounded-md px-3 py-2 dark:text-white dark:bg-gray "
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md  px-3 py-2 text-sm font-semibold text-black shadow-sm   dark:text-white dark:bg-gray"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Services;
