"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import image from "../assets/2.svg";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const data = {
    Heading: "Code Mate Agency",
    text2:
      "Embark on a Journey of Innovation: Unleash the Power of Mobile App Magic for Your Digital Future!",
  };

  return (
    <div ref={ref} className="flex mt-16 justify-between items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl px-4 flex flex-col"
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
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Button size={"lg"} className="mt-5" variant={"Blue"}>
            Our Services
          </Button>
        </motion.div>
      </motion.div>

      {/* Right Image - Comes from Right */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=""
      >
        <Image src={image} width={400} alt="mobile pic" className="object-cover" />
      </motion.div>
    </div>
  );
}
