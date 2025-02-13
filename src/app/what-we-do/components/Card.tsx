import React from "react";

import image1 from "../assets/undraw_web-devices_i15y.svg";
import image2 from "../assets/undraw_web-devices_i15y.svg";
import image3 from "../assets/undraw_online-ad_t56y.svg";

import Image from "next/image";
import CustomButton from "@/app/lib/Button";

const services = [
  {
    title: "Web Development",
    image: image1,
  },
  {
    title: "App Development",
    image: image2,
  },
  {
    title: "Social Media Marketing",
    image: image3,
  },
];

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8 font-roboto flex-wrap">
      {services.map((service, index) => (
        <div
          key={index}
          className="shadow-[#0cc0df] h-[350px] shadow-lg rounded-2xl p-6 flex flex-col items-center w-80 text-center hover:scale-105 transition-transform"
        >
          {/* Image Container for Uniform Size */}
          <div className="w-[180px] h-[180px] relative">
            <Image src={service.image} alt={service.title} layout="fill" objectFit="contain w-96" />
          </div>

          <h3 className="text-lg font-semibold mt-4">{service.title}</h3>

          <CustomButton Text="Get Started" size="lg" variant="Blue" className="mt-5" />
        </div>
      ))}
    </div>
  );
};

export default Services;
