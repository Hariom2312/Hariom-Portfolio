import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  
  const[user,setUser] = useState({
    name:"",
    email:"",
    message:"",
  });

  let name,value;
  const handleSubmit = (e)=>{
    e.preventDefault();
     name = e.target.name;
     value = e.target.value;
     setUser({...user,[name]:value});
  }

  const postData = async (e)=>{
    e.preventDefault();
    const{name,email,message} = user;
   
    const checkEmail = email.slice(-10);

    if(!name || !email || (checkEmail !== "@gmail.com") || (email.length < 11)){
      console.log("Enter Data Properly");
      toast.error("Enter Data Properly");
      return ;
    }
   
    if(email)

    try{
       await fetch("https://hariom-dhakad-default-rtdb.firebaseio.com/portfolio.json" , {
        method : "POST",
        header: {
          "Content-Type" : "application/json",
        },
        body:JSON.stringify({
          name,
          email,
          message,
        })
      });
      // console.log(res);
      toast.success("Data Sent to Hariom 🎉")
      
    }catch(err){
      console.error(`Error occured ${err}`);
      console.log(err);
      toast.error("Data not send try again");
    }
  }

  return (
    <div id="contact">
    <div className=" container m-auto mt-16">
      {/* heading */}
       <div 
      // data-aos="fade-up"
       className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className=" card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4">
            <div 
            data-aos="zoom-in"
            >
              <h1 className="text-5xl font-bold sm:text-3xl mb-4">Need my
              services?</h1>
              <h3 className="text-xl sm:text-lg">
              Fill out the form  and I will contact you as soon as possible.
              </h3>
            </div> 
          </div>

          <div className=" flex p-5 items-center justify-center ">
            <button
              
              data-aos="zoom-in"
              
              className= " text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] "
            >
              <BsArrowRight className=" md:rotate-90" />
            </button>
          </div>
        </div>
        <div className="right flex-1">
          <form
            data-aos="zoom-in"
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
            action="mailto:dhakadhariom007@gmail.com"
            autoComplete="on"
          >
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="e.g. example@email.com"
              name="email" 
              required
              value={user.email}
              onChange={handleSubmit}
            />
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="e.g. John Doe"
              name="name"
              value={user.name}
              onChange={handleSubmit}
              required
            />
            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows="4"
              cols="50"
              placeholder="Write your message"
              name="message"
              value={user.message}
              onChange={handleSubmit}
            />
            <button
              onClick={postData}
              className= "hover:bg-gray-600 hover:scale-105 duration-500 bg-gray-500 w-full text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1"
            >
              <span>Send</span>
              <RiSendPlaneFill/>
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
