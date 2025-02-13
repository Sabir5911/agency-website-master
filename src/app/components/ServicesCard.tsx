"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";

const servicesData = [
  {
    title: "Web Development",
    description: "Either 3D website or Full-Stack Application with modern design, we’ve got you covered!",
    buttonColor: "border-blue-600 text-white hover:bg-[#0cc0df] hover:text-white bg-transparent border border-[#0cc0df] text-white",
    features: [
      "3D Experience Websites",
      "Full Stack Applications",
      "Ecommerce Stores",
      "SEO Optimized",
      "Aesthetic Figma Designs"
    ]
  },
  {
    title: "Social Media Marketing",
    description: "Whether it’s viral campaigns or targeted ads with custom content, you're at the right place!",
    buttonColor: "bg-[#0cc0df] text-white hover:bg-[#0cc0df] ",
    features: [
      "Meta & Google Campaigns",
      "Organic Followers",
      "Lead Generation",
      "Branding & Viral Content"
    ],
    
  },
  {
    title: "App Development",
    description: "We build all kinds of apps—AI-powered, startup apps, or tailored to any niche. Let’s bring your idea to life!",
    buttonColor: "border-blue-600 text-white hover:bg-[#0cc0df] hover:text-white bg-transparent border border-[#0cc0df] text-white",
    features: [
      "Android & iOS",
      "AI-Powered Apps",
      "Blockchain & Web 3.0",
      "Flutter & iOS",
      "Cross-Platform"
    ]
  }
];

interface serviceProps {
  index: number;
  title: string;
  features: string[];
  description: string;
  buttonColor: string;
}

const Card = ({  features, index, title, description, buttonColor }: serviceProps) => {


  return (
    <motion.div
    initial={{ opacity: 0, y: -400 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.3 }}
    viewport={{ once: true }} // This ensures it animates every time it enters the viewport
    className={`p-6 rounded-lg shadow-md flex flex-col gap-1 `}
  >
    <h3 className="text-xl font-semibold ">{title}</h3>
    <p className=" mt-2 font-light text-sm max-w-[240px] text-muted-foreground">{description}</p>
    <Button className={` mt-6  ${buttonColor} hover:scale-100 group ho w-full  flex gap-2`} size={"default"}>
      <FaRocket  className=" transition-transform duration-300 group-hover:translate-x-2"/>         
      <text>Get Started</text>
    </Button>
    <ul className=" mt-6 text-left text-sm space-y-4">
      {features.map((feature, i) => (
        <div key={i} className="flex items-center gap-x-5">
          <FaCheck  />
          <li key={i}> {feature}</li>
          </div>
      ))}
    </ul>
  </motion.div>
  
  );
};
const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 text-center mt-16 overflow-hidden">
      {/* Title Animation - Comes from the Top */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-gray-500 text-sm uppercase">Our Popular Services</h2>
        <h1 className="text-4xl font-bold mt-2">
          Development & <span className="global-text-color">Marketing</span>
        </h1>
      </motion.div>

      {/* Cards Animation */}
      <div className="flex mt-10 justify-around mx-auto text-left flex-wrap">
        {servicesData.map((service, index) => (
          <Card key={index} index={index}  {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
