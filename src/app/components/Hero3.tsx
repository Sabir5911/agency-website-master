"use client"
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import imageData from "../assets/image";
import Section from "../lib/Section";

let data = {
  Heading: "Project Showcase",
  text1: "Highlighting Top-notch Project Innovation",
  text2:
    "Explore the Brilliant Creations and Transformative Impact of Our Featured Projects",
  center: false,
};



export default function Hero3() {
 
  return (
    <div id="How It Works?" className="bg-[url(./assets/bg.svg)] bg-cover bg-center gap-y-10 flex flex-col   pb-10 mt-20 px-5 lg:px-20">
      
      <div className="flex flex-col lg:flex-row items-center justify-between mt-20 ">
        <Section {...data} />
        <Button variant={"Blue"} size={"lg"} className="mt-8 md:mt-7 lg:mt-0">
          Explore All Projects
        </Button>
      </div>
      
      
      <div className="flex flex-wrap justify-center gap-8 lg:justify-between items-center  ">
      {imageData.map((elm, i) => (
        <div key={elm.id} className="mt-5 lg:mt-0 flex">
          <Image
            alt=""
            src={elm.image}
            width={440}
            height={440}
            className={`lg:w-[360px]  `}
          />
        </div>
      ))}
    </div>      </div>
    
  );
}
