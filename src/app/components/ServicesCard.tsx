"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

const servicesData = [
  {
    title: "Web Development",
    description: "Either 3D website or Full-Stack Application with modern design, we’ve got you covered!",
    buttonColor: "border-blue-600 text-white hover:bg-blue-600 hover:text-white",
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
    buttonColor: "bg-white text-red-600 hover:bg-red-700 hover:text-white",
    features: [
      "Meta & Google Campaigns",
      "Organic Followers",
      "Lead Generation",
      "Branding & Viral Content"
    ],
    bgColor: " text-white"
  },
  {
    title: "App Development",
    description: "We build all kinds of apps—AI-powered, startup apps, or tailored to any niche. Let’s bring your idea to life!",
    buttonColor: "border-blue-600 text-white hover:bg-blue-600 hover:text-white",
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
  bgColor?: string;
  title: string;
  features: string[];
  description: string;
  buttonColor: string;
}

const Card = ({ bgColor, features, index, title, description, buttonColor }: serviceProps) => {


  return (
    <motion.div
    initial={{ opacity: 0, y: -400 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.3 }}
    viewport={{ once: false }} // This ensures it animates every time it enters the viewport
    className={`p-6 rounded-lg shadow-md ${bgColor || ""}`}
  >
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-4 font-light text-sm max-w-[240px]">{description}</p>
    <Button className={`mt-8 w-full px-6 py-2 border rounded-lg ${buttonColor} text-black border-none`}>
      🚀 Get Started
    </Button>
    <ul className="mt-4 text-left text-sm space-y-4">
      {features.map((feature, i) => (
        <li key={i}>✔ {feature}</li>
      ))}
    </ul>
  </motion.div>
  
  );
};
const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

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
          <Card key={index} index={index} bgColor={service.bgColor} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
