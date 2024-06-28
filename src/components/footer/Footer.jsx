import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div id="contact">
     <div className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px] bg-yellow-400"
    >
      <div className="w-full overflow-hidden flex flex-row justify-evenly items-center">
        <div className=" h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
          <h2 data-aos="zoom-in" className=" font-bold text-5xl sm:text-3xl -mb-4">
            Let's Talk
          </h2>
          <div className=" flex items-center justify-center gap-8 sm:gap-5">
            <a
              data-aos="fade-up"
              data-aos-duration="1000"
              href="https://t.me/Hariom2312"
              className="box font-medium text-white   flex items-center justify-center flex-col"
            >
              <FaTelegramPlane className="hover:animate-pulse-one text-black text-3xl hover:scale-125 cursor-pointer rounded-full" />
              <p>Telegram</p>
            </a>
            <a
              data-aos="fade-up"
              data-aos-duration="1200"
              href="https://api.whatsapp.com/send/?phone=%2B919301670130&type=phone_number&app_absent=0"
              className="box font-medium text-white  flex items-center justify-center flex-col"
            >
              <IoLogoWhatsapp className=" hover:animate-pulse-one text-black text-3xl hover:scale-125 cursor-pointer" />
              <p>WhatsApp</p>
            </a>
            <a
              data-aos="fade-up"
              data-aos-duration="1400"
              href="https://www.instagram.com/om_dhakad_13/"
              className="box font-medium text-white  flex items-center justify-center flex-col"
            >
              <RiInstagramFill className="hover:animate-pulse-one text-black text-3xl hover:scale-125 cursor-pointer" />
              <p>Instagram</p>
            </a>
          </div>
          <div className="sm:text-[12px]" data-aos="fade-right">
            Copyright &copy; <span>2024 ❤️ Hariom Bamboriya </span> All rights
              reserved
          </div>
        </div>

        <div  data-aos="zoom-in" className="  block sm:hidden text-black text-center w-[40%] text-xl md:text-lg  flex flex-col justify-center items-start">
          <legend className=" w-auto ml-[60%]  font-semibold ">
            <div className="-ml-40 sm:ml-20 flex gap-2">
              <FiPhoneCall className="animate-square-fast" />
              <p>+919301670130</p>
            </div>
          </legend>

          <legend className="text-center w-auto md:ml-[-15%] font-semibold mx-auto ">
            <div className=" pl-2 flex justify-center items-center gap-2">
              <MdOutlineEmail className=" animate-bounce" />
              <a href="mailto:dhakadhariom007@gmail.com">dhakadhariom007@gmail.com</a>
            </div>
          </legend>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
