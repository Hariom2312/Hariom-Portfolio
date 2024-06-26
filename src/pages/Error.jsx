import React from 'react'
import { Link } from 'react-router-dom'
import ErrorImg from '../assets/ErrorImg.gif';

const Error = () => {
  return (
    <>
    <section className="w-100% h-[550px] bg-white ">
          <div className='flex flex-col justify-center items-center gap-5'>
              <div className="flex justify-center bg-center ">
                <h1 className=" text-center text-6xl font-extrabold text-black z-40 mt-5">404</h1>
              </div>
              <img src={ErrorImg} alt="Img" className='mx-auto -mt-[120px] -mb-24'/>
              <div className='space-y-2 text-center -mt-3 '>
                <h3 className="text-2xl md:text-4xl mb-1 mt-3">
                  Look like you're lost
                </h3>

                <p>The page you are looking for not available!</p> 

                 <Link to='/'
                  className="-mt-3 py-[13px] px-10 text-lg bg-caribbeangreen-200 hover:bg-caribbeangreen-400 my-5 inline-block rounded-full font-semibold duration-300"
                >
                 <button className='border-2 border-black rounded-full px-8 py-2 hover:bg-black hover:text-white hover:transition-all hover:duration-500 text-center font-bold text-xl' >Home</button>
                </Link>
            </div>
          </div>
        
    </section>
    </>
  )
}

export default Error;