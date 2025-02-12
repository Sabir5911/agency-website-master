import { Button } from "@/components/ui/button";
import React from "react";
import logo from "../assets/2.svg";
import Image from "next/image";


export default function Header() {

  return (

      <div className="  flex justify-between   py-16">
        <div className="">
          <Image
            src={logo}
            width={90}
            height={90}
            alt="logo"
            className=" w-[80px]"
          />
        </div>

        <Button variant={"Blue"} size={"lg"}>Get Started</Button>

      </div>
  
  );
}
