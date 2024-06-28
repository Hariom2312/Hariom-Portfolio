import React from "react";
import "../../style/button.scss";
// import CodingPic from "../../assets/coding.gif";
import GFG from "../../assets/GFG.png"
import Leetcode from "../../assets/Leetcode1.png"
import { Link } from "react-router-dom";

const Reference = ({ darkMode }) => {
  return (
    <>
      <div id="reference" className="w-full">
        <div className=" container m-auto  mt-16">
          {/* heading */}
          <div data-aos="fade-up" className="relative mb-5">
            <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
              References
            </h3>
            <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
          </div>
          {/* content*/}
          <div className="flex md:flex-col">
            <div className="left flex-1 w-full">
              <p
                data-aos="fade-up"
                className=" text-gray-700 font-medium w-[100%]"
              >
                Here I solved a lot of Coding Problems in C++ with Advance DSA
              </p>
              <div className="flex flex-row items-center gap-2 justify-center " data-aos="fade-up">
              <span className="h-[1.1px]   w-[12%] bg-gray-300 block"></span>
              <p>Visit Once</p>
              <span className="h-[1.1px] w-[12%] bg-gray-300 block"></span>
              </div>


              <div className=" flex flex-row justify-between items-center md:flex-col">
              {/* left box */}
              <div
                data-aos="zoom-in"
                className="flex items-center h-[100%] justify-start md:justify-center mt-5 mb-5"
              >
                <div
                  data-aos="fade-up"
                  className=" flex flex-row sm:flex-col gap-5 text-center mx-auto my-auto justify-center"
                >
                  <div className="border-2 px-10 py-24 rounded-xl border-amber-500  shadow-2xl  shadow-slate-400 hover:-translate-y-2 hover:duration-300">
                   <Link
                      to="https://www.geeksforgeeks.org/user/hariomdhakad23"
                    >
                   <div className="text-yellow-500 text-center font-bold text-2xl ">
                     <img src={GFG} alt="GFG" className="" />
                       <button class="buttonhover">GeekForGeek</button>        
                    </div>
                    </Link>

                  </div>

                  <div className="border-2 px-10 py-24 rounded-xl border-amber-500  shadow-2xl  shadow-slate-400 hover:-translate-y-2 hover:duration-300">
                     
                      <Link
                        to="https://leetcode.com/om_dhakad_13/"
                       >
                      <div className="text-yellow-500 text-center font-bold text-2xl ">
                       <img src={Leetcode} alt="Leetcode"  className="w-[180px] h-[150px]"/>
                      </div>
                      
                        <button className="buttonhover">Leetcode</button> 
                      </Link>
                    </div>
                </div>
              </div>

            {/* right box */}

            <div  data-aos="fade-down" className="w-[50%]">
              <img
                // src={CodingPic}
                src="https://ik.imagekit.io/2lzi3lqgg/random%20bg%20img/coding%20bg4.jpg?updatedAt=1719336417834"
                alt="CodingLogo"
                className="rounded block sm:hidden lg:w-[200px] lg:h-[350px] ml-5 mx-auto"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Reference;
