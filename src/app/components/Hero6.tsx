"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import FormComponent from "../lib/FormComponent";

const data = {
  Heading: "Contact Us",
  text1: "Connect with Us: Shape Your Digital Vision",
  text2:
    "Reach out today and let's bring your innovative app ideas to vibrant life together.",
};

export default function Hero6() {
  return (
    <div className="w-full flex  justify-between  mt-20" id="contact">

      <div className="flex justify-between  w-full">
        
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="flex flex-col justify-start flex-shrink-0 w-auto md:max-w-[450px]"
        >
          <h1 className="max-w-md font-roboto scroll-m-20 text-4xl font-semibold lg:text-6xl">
            {data.Heading}
          </h1>

          {/* Animated Typing Effect */}
          <TypeAnimation
            sequence={["Application", 1000, "Websites", 1000, "& others", 1000]}
            cursor={false}
            speed={50}
            className="flex h-[100px] font-roboto text-6xl font-semibold global-text-color"
            repeat={Infinity}
          />

          <p className="max-w-sm text-sm text-muted-foreground">{data.text2}</p>

          {/* Button Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <Button size={"lg"} className="mt-5" variant={"Blue"}>
              Our Services
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-sm mt-12 lg:mt-0 flex flex-col gap-2 justify-center p-5 rounded-2xl font-roboto"
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
            <Button variant="Blue" className="mt-10" size={"lg"}>
              Contact Us
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
