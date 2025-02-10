

import React from "react";
import Image from "next/image";
import image4 from "../assets/payment.svg";
import { Button } from "@/components/ui/button";
import Section from "../lib/Section";

export default function Hero4() {
  let data = {
    Heading: "Secured Payment",
    text1: "Secured Payments: Your Safety Comes First!",
    text2:
      "Experience Unmatched Peace of Mind with Our Unwavering Commitment to Ensure Secure Transactions for Your Complete Safety and Satisfaction.",
    Btntext: "Get Started",
    ibutton: true,
    center:false,

  };

  return (
    <>
      <div className="flex flex-col  lg:flex-row justify-between px-5 md:px-10 lg:px-20 items-center mt-10 lg:mt-20  ">
        <Section {...data} />

        <div className="pt-12">
          <Image src={image4} width={600} height={600} alt="Secured Payment"  />
        </div>
      </div>
    </>
  );
}
