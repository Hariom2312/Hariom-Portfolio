import React, { useState } from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay,FaPause } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Resume.pdf";
import HariomPic from "../../assets/HariomPic.jpg";
import "../../style/BgColor.css"

const Hero = () => {
  const [stop, setStop ] = useState(false);

  return (
    // <div id="home" className={`bg-gradient-to-r from-green-200 to-blue-200 `}>
     <div id="home" className={"herobg"}> 
      <div className="container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px] flex sm:pt-0 pb-3">
        <div className="left mt-4 md:mt-12 flex-1 flex flex-col items-center justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-center justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className="text-center text-5xl font-bold sm:text-[2rem]"
            >
              Hello, I'm Hariom Bamboriya
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={["Web Developer", 2000, "Programmer", 2000, ""]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              I am currently a Final year undergrad pursuing Bachelor of
              Technology in Information Technology from Jabalpur Engineering
              college.
            </p>
          </div>
          <div className="flex justify-center items-center gap-3 flex-col">
            <div data-aos="fade-up" className="buttons flex gap-5">
              <a
                href="/"
                className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500"
              >
                <span>Hire Me</span>
              </a>

              <a
                href={resumePDF}
                className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
                download="Hariom Bamboriya Resume"
              >
                <div className="flex items-center gap-1">
                  Resume <FiDownload className="hover:animate-bounce "/>
                </div>
              </a>
            </div>
            <div className="icons flex mt-5 justify-center">
              <ul
                data-aos="fade-up"
                data-aos-duration="1500"
                className=" flex gap-5 pb-4 -mb-[50px] md:mb-3"
              >
                <li className="hover:animate-pulse-one">
                  <a href="https://github.com/Hariom2312">
                    {" "}
                    <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                  </a>
                </li>
                <li className="hover:animate-pulse-one">
                  <a href="https://www.linkedin.com/in/hariom-bamboriya-4b345522b">
                    {" "}
                    <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                  </a>
                </li>
                <li className="hover:animate-pulse-one">
                  <a href="https://www.instagram.com/om_dhakad_13/">
                    {" "}
                    <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                  </a>
                </li>
                <li className="hover:animate-pulse-one">
                  <a href="https://www.facebook.com/hariom.dhakad.7355079/">
                    {" "}
                    <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                  </a>
                </li>
                <li className="hover:animate-pulse-one">
                  <a href="https://x.com/om_dhakad_13">
                    {" "}
                    <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="right -mb-[140px] flex-1 flex items-center justify-center">
          <div className="animate-bounce-slow mb-[180px] md:mb-0 relative md:hidden sm:block  w-fit flex items-center sm:items-end">
            <img
              
              data-aos="fade-up"
              className="w-full h-[70%]  sm:h-[300px] md:h-[450px] lg:h-[500px]  object-cover md:m-auto sm:m-0 rounded-xl mt-3"
              src={HariomPic}
              alt="HariomPic"
            />

            <div className="absolute -bottom-10 sm:-bottom-1 sm:-right-1 md:bottom-3 -right-10 md:right-2 ">
              <div
                onClick={()=> setStop(!stop)}
                data-aos="zoom-in"
                data-aos-duration="1000"
                className=" relative cursor-pointer"
              >
                <img
                  className={`w-[135px] md:w-[90px] 
                    ${stop ? "null" : "circle-text"
                  }`}
                  src="https://ik.imagekit.io/2lzi3lqgg/circle.png?updatedAt=1719390896639"
                  alt=""
                />
                
                {!stop ? <FaPlay 
                   className=" text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                /> : <FaPause
                   className=" text-white absolute top-[50%] left-[49%] translate-x-[-50%] translate-y-[-50%]"
                />} 
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
