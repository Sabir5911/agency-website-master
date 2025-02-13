"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import image4 from "../assets/undraw_modern-design_yur1.svg";
import DevmateLanding from "./CodeMate";

export default function Hero2() {
  return (
    <div className="flex-col flex justify-between items-center mt-96 overflow-hidden md:flex-row">
      {/* Left Section (Text) - Slide in from Left */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="text-center"
      >
        <DevmateLanding />
      
      </motion.div>

      {/* Right Section (Image) - Slide in from Right */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="mt-32 lg-mt-0"
      >
        <Image src={image4} width={500} height={556} alt="Design" />
      </motion.div>
    </div>
  );
}
