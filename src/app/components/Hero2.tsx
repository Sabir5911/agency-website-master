

import React from "react";
import Image from "next/image";
import image4 from "../assets/Hero2.svg";
import { Button } from "@/components/ui/button";
import Section from "../lib/Section";

export default function Hero2() {
  let data = {
    Heading: "About Us",
    text1: "Dive into the World of Mobile App Magic",
    text2: "Embark on a Journey of Innovation: Unleash the Power of Mobile App Magic for Your Digital Future!",
    Btntext: "Explore More Videos",
    ibutton: true,
    center:false,

  };

  return (
    <div className="flex  flex-col  lg:flex-row justify-between px-5 lg:px-20 items-center mt-20  ">
    <div className="text-center"> 
        <Section {...data} />
      </div>
      <div className="mt-10 lg-mt-0 ">
        <Image src={image4} width={543} height={556} alt='"' />
      </div>
    </div>
  );
}
