"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import FormComponent from "../lib/FormComponent";
import CustomButton from "../lib/Button";

const data = {
  Heading: "Contact Us",
  text1: "Connect with Us: Shape Your Digital Vision",
  text2:
    "Reach out today and let's bring your innovative app ideas to vibrant life together.",
};

export default function Hero6() {
  return (
    <div className=" w-full flex  justify-between  mt-20" id="contact">

      <div className="flex flex-col justify-between  w-full md:flex-row">
        
        {/* Left Side - Text Content */}
        <motion.div   
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="flex flex-col justify-start gap-2 flex-shrink-0 w-auto md:max-w-[450px]"
        >
            <h1 className="max-w-md font-roboto scroll-m-20 text-4xl font-semibold lg:text-5xl">
            {data.Heading}
          </h1>
       
        
          <h6  className="flex  font-roboto text-5xl font-semibold" >For You Betterr</h6>
       
          <TypeAnimation
            sequence={["Business ", 1000, "Websites", 1000, "Startup", 1000]}
            cursor={false}
            speed={50}
            className="flex h-[50px] max-w-sm font-roboto text-5xl font-semibold global-text-color"
            repeat={Infinity}
          />

        
       

          <p className="max-w-sm text-sm text-muted-foreground">{data.text2}</p>

          {/* Button Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: false }}
            className="mt-6 flex flex-col gap-y-3 font-roboto cursor-pointer"
          >
            <div className="flex gap-2  items-center">
              <div className="bg-[#0cc0df]  rounded-full p-1 ">
              < MdEmail className="text-4xl  " size={20}/>
                </div> 
              <text className="global-icon-text">Email</text>
            </div>

            <div className="flex gap-2  items-center">
              <div className="bg-[#0cc0df]  rounded-full p-1 ">
              < FaLinkedin className="text-4xl  " size={20}/>
                </div> 
              <text className="global-icon-text">Linkdin</text>
            </div>

            <div className="flex gap-2  items-center">
              <div className="bg-[#0cc0df]  rounded-full p-1 ">
              < AiFillInstagram className="" size={16}/>
                </div> 
              <text className="global-icon-text">Instagram</text>
            </div>

      
      


       


          </motion.div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-sm mt-12 lg:mt-0 flex flex-col gap-2 justify-center  rounded-2xl font-roboto"
        >
          <div>
            <p className="font-semibold text-3xl">Get in Touch With Us!</p>
            <p className="text-[#475467] text-sm font-medium mt-2 mb-2">
              Don't hesitate to contact us for more information or help.
            </p>
          </div>

          {/* Input Fields */}

          <div className="flex flex-wrap gap-4 justify-between">
            <FormComponent placeHolder="Enter your Name" text="Name" full={false} />
            <FormComponent placeHolder="Enter your Email" text="Email" full={false} />
          </div>
          <div className="flex flex-wrap gap-4 justify-between">
            <FormComponent placeHolder="Enter your Subject" text="Subject" full={false} />
            <FormComponent placeHolder="Enter your Message" text="Message" full={false} />
          </div>
          <div className="flex">
            <FormComponent placeHolder="Enter your Message" text="Message" full={true} />
          </div>

          {/* Button Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false }}
          >
                                    <CustomButton  Text="Contact Us" size="lg" variant="Blue" className="mt-6"/>
      
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
