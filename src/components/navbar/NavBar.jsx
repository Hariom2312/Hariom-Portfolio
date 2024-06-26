import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import HBLogo from "../../assets/HBLogo1.avif";
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
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState("home");

  // Toggle the navbar
  const toggleNav = (name) => {
    setIsOpen(!isOpen);
    setActiveIndex(name);
  };

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


  return (
    <div
      className={`w-full mx-auto fixed top-0 py-5 sm:py-4 z-30 ${
        scrollPosition > 0 ? `bg-white shadow-md` : "bg-transparent"
      } `}
    >
      <nav className=" container m-auto flex items-center justify-between">
       
        <div data-aos="fade-down" className="logo">
           {/* <Link
            onClick={() => {window.scrollTo(0, 0),setActiveIndex("home")}}
            to="/"
            className="text-3xl font-bold sm:text-3xl flex items-center gap-3"
          >
           <img src={HBLogo} alt="Logo" className="w-[50px] h-[50px] aspect-auto ring-2 ring-slate-700 p-1 mix-blend-hard-light rounded-full hover:rotate-[360deg] duration-200" />
            <p className="ml-2 hover:scale-105">Hariom Bamboriya</p> 
          </Link> */}
        </div>
        
        <div
          data-aos="fade-down"
          className="nav-items flex items-center space-x-11"
        >
          {/* hamburger */}
          <button
            onClick={toggleNav}
            className="cursor-pointer text-2xl hidden md:block"
          >
            <HiMenu size={25} />
          </button>

          <ul
            className={`flex items-center space-x-9 ${
              !isOpen ? "md:flex" : "md:right-[0%]"
            } md:flex-col md:absolute m-auto md:top-0 md:right-[-100%] md:w-[78%] md:h-screen md:bg-white `}
          >
            {/* Use a button tag for better accessibility */}
            <button
              onClick={toggleNav}
              className={`text-3xl hidden md:block relative right-0 top-4 container mx-auto`}
            >
              <RxCross2 size={25} />
            </button>
            {navItems.map((item) => (
              <li
                key={item.id}
                className=" md:m-6 md:flex md:gap-6 md:items-center md:justify-center hover:scale-110 md:hover:text-yellow-500"
              >
                <a
                  onClick={() => toggleNav(item.name)}
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
