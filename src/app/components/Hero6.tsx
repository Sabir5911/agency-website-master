
import { TextIcon } from "lucide-react";
import React from "react";
import Texticons from "../lib/Texticons";
import Icons1 from "../assets/icon1.svg";
import FormComponent from "../lib/FormComponent";
import { Button } from "@/components/ui/button";
import Section from "../lib/Section";

let data = {
  Heading: "Contact Us",
  text1: "Connect with Us: Shape Your Digital Vision",
  text2: "Reach out today and let's bring your innovative app ideas to vibrant life together.",
  center:false,

};

export default function Hero6() {
  return (

    <div className="bg-[url(./assets/bg2.svg)] w-full bg-cover bg-center  pb-7  mt-20 py-20 lg:px-20 " id="contact">
  
  
  <div className=" px-5  flex flex-col justify-center items-center lg:flex-row lg:justify-between">

  <div className="flex flex-col justify-center flex-shrink-0 w-auto md:max-w-[450px]">
  <Section {...data} />

  
  <div className="text-left flex flex-col gap-2 mt-2">
    <Texticons gmail="contact@demo.co" link={Icons1} text="Email" />
    <Texticons gmail="contact@demo.co" link={Icons1} text="Email" />
  </div>

</div>


<div className=" text-sm mt-12 lg:mt-0 flex flex-col gap-2 justify-center p-5 rounded-2xl bg-[rgba(255,255,255,0.6)] bg-blend-color">
  <div className="text-[#1D2939]">
    <p className="font-semibold text-3xl">Get in Touch With Us!</p>
    <p className="text-[#475467] text-sm font-medium">
      Don't hesitate to contact us for more information or help.
    </p>
  </div>
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
  <Button variant="Blue" className="mt-10">
    Contact Us
  </Button>
</div>

      
               </div>

  </div>
  
  );
}