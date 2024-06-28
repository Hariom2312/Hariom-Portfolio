import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import HBLogo from "../../assets/HBLogo1.avif";
import { HiArrowCircleLeft } from "react-icons/hi";
// import Resume from "../resume/Resume";

const navItems = [
  {
    id: 0,
    name: "home",
  },
  {
    id: 1,
    name: "skills",
  },
  {
    id: 2,
    name: "reference",
  },
  {
    id: 3,
    name: "works",
  },
  {
    id: 4,
    name: "resume",
  },
  {
    id: 5,
    name: "contact",
  },
];

const NavBar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [navshow, setNavShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState("");

  // Toggle the navbar
  const toggleNav1 = () => {
    setNavShow(!navshow);
    setIsOpen(!isOpen);
  };

  const toggleNav2 = (name)=>{
    setActiveIndex(name === activeIndex ? null : name);
  }


  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      // console.log(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToHeroPage = ()=>{
    window.scrollTo(0,0);
    setActiveIndex("home");
  }

  return (
    <div
      className={`w-full mx-auto fixed top-0 py-5 sm:py-4 z-20 ${
        scrollPosition > 0 ? `bg-white shadow-md` : "bg-transparent"
      }`}
    >
      <nav className="container m-auto flex items-center justify-between gap-12 ">
       
        <div data-aos="fade-down" className="logo ">
           <Link
            onClick={() => goToHeroPage()}
            to="/"
            className="text-3xl font-bold sm:text-3xl flex items-center gap-3"
          >
           <img src={HBLogo} alt="Logo" className="w-[50px] h-[50px] sm:w-[40px] sm:h-[40px] aspect-auto ring-2 ring-slate-700 p-1 mix-blend-hard-light rounded-full hover:rotate-[360deg] duration-200" />
            <p className="ml-2 hover:scale-105 sm:text-xl pr-14">Hariom Bamboriya</p> 
          </Link> 
        </div>
        
        <div
          data-aos="fade-down"
          className="nav-items flex items-center space-x-11 relative"
        >
          {/* hamburger */}
          <button
            onClick={toggleNav1}
            className="z-10 cursor-pointer absolute right-6 sm:right-12 text-2xl hidden md:block"
          >
           {
             !isOpen ? <HiMenu size={25} /> : <RxCross2 size={25} />
           } 
          </button>

          {/* <ul
            className={`flex flex-row items-center space-x-9 md:hidden ${
              !isOpen ? "flex" : "absolute" 
             } ${!isOpen ? `flex-col absolute m-auto top-0 right-[120px] space-y-12 items-center sm:bg-gray-300 h-screen w-[78%] `: `hidden` }
             `
          }> */}

            <ul className={ `flex items-center space-x-9 bg-transparent ${isOpen ? ` md:bg-white md:absolute md:top-5 md:w-[300px] md:pt-8 md:pb-[120px] md:pl-12 md:pr-12 z-10 md:flex md:flex-col md:space-y-10 md:right-0  text-center md:items-center` : `hidden`} `}
            >

            
            <button className={ `cursor-pointer ${isOpen ? " hidden md:block absolute top-[440px] right-[115px] " : "hidden" }`}
             onClick={toggleNav1}
             >
              <HiArrowCircleLeft size={35}/>
            </button>

            {/* <button
              onClick={toggleNav}
              className={`text-3xl hidden md:block relative right-0 top-4 container mx-auto`}
            >
            </button>
             */}

            {navItems.map((item) => (
              <li
                key={item.id}
                className={`mx-auto text-center hover:scale-110 md:hover:text-yellow-500 ${
                !navshow ? "flex" : "hidden"}`}
              >
                <a
                  onClick={() => toggleNav2(item.name)}
                  href={`#${item.name}`}
                  className={`uppercase cursor-pointer text-black hover:scale-105 hover:text-yellow-600 font-bold ${
                    item.name === activeIndex ? "text-yellow-600" : ""
                  }`}
                >
                  {item.name}
                </a>
                
              </li>
            ))}
            {/* <a
              href=" "
              className= " bg-black text-[1rem] text-white px-8 py-2 rounded-lg font-bold hover:text-yellow-400 md:m-5 md:block md:mx-auto md:w-fit lg:px-3"
            >
              HIRE ME
            </a> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
