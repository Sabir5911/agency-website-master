"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";

import Image from "next/image";
import Link from "next/link";
import Burger from "./Burger";
import { useTheme } from "next-themes";

export default function Header() {
  const { setTheme } = useTheme();
  setTheme("dark");

  return (
    <div className="w-full px-4 py-4 flex justify-between items-center lg:px-20">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-between items-center w-full">
        {/* Left Section */}
        <div className="flex-1 flex justify-start">
          
          <ul className="flex items-center gap-x-10 text-lg">
            <li>
              <Link href="#pricing">Service</Link>
            </li>
            <li>
              <Link href="#pricing">Pricing</Link>
            </li>
            <li>
              <Link href="#How It Works?">How It Works?</Link>
            </li>
          </ul>
        </div>

        <div className=" flex justify-center">
          <Image
            src={logo}
            width={200}
            height={200}
            alt="logo"
            className="rotate-180 w-[120px]"
          />
        </div>

        <div className="flex-1 flex justify-end">

          <ul className="flex items-center gap-x-10">
            <li>
              <Link href="#contact">Contact Us</Link>
            </li>
            <Button variant={"Blue"}>Get Started</Button>
          </ul>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden w-full">
        <Burger />
      </div>
    </div>
  );
}
