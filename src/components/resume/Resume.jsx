import React from "react";

const Resume = () => {
  return (
    <div id="resume">
    <div className=" container m-auto mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="fade-right"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              School
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                 Suraj Convent School
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  class 12 th
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  July-2020 to April-2021
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  I completed my school level study in Suraj Convent School
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="fade-left"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.Tech, Information Technology
                </h1>
                
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  College : Jabalpur Engineering College
                </span>
                <div className="flex justify-between  ">
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Batch : 2021 - 25 
                </span>
                <span className=" block lg:hidden  text-[.9rem] font-semibold  text-yellow-500  sm:text-base">CGPA : 7.60</span>
                </div>
                <p className=" text-[.9rem] text-justify text-gray-500">
                 Hello I am Hariom Bamboriya. I'm currently pursuing my Bachelor of Technology Degree in Information Technology from Jabalpur Engineering College.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Resume;
