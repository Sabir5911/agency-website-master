import { Button } from "@/components/ui/button";
import React from "react";
import logo from "../assets/2.svg";
import Image from "next/image";
import CustomButton from "../lib/Button";
import Link from "next/link";


export default function Header() {

  return (

      <div className="  flex justify-between   py-16">
        <Link  href={"/"} className="cursor-pointer">
          <Image
            src={logo}
            width={90}
            height={90}
            alt="logo"
            className=" w-[60px]"
          />
        </Link >
        <CustomButton  Text="Book Demo" size="sm" variant="Blue" className="mt-5 rounded-md"/>

      </div>
  
  );
}
