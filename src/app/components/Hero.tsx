import React from "react";
import Section from "../lib/Section";
import image from "../assets/Hero.svg"; // Correct import
import Image from "next/image";
import Header from "./Header";
import icons from "../assets/icons.svg";
import Burger from "./Burger";

export default function Hero() {
  let data = {
    text1: "Discover App Magic for  Your Digital Future!",
    text2:
      "Embark on a Journey of Innovation: Unleash the Power of Mobile App Magic for  Your Digital Future!",
  };

  return (
    <div className="bg-[url(./assets/bg.svg)] bg-cover bg-center">

      <Header />
  
      <div className="flex flex-col justify-between pt-10 items-center  h-[700px]">

        <div className=" text-center text-black max-w-xl px-4 lg:px-0">
          <Section {...data} />
          <div className="flex justify-center items-center mt-5 gap-x-3">
            <Image src={icons} width={40} height={40} alt="pla" />
            <p>Explore</p>
          </div>
        </div>
        <div className="">
          {image &&  <Image src={image} width={800}  alt="mobile pic" className="w-[600px] lg:w-[700px]" />}
          </div>
      </div>
      </div>
    
  );
}
