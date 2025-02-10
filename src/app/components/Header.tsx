
"use client"
import { Button } from '@/components/ui/button';
import React from 'react';
import logo from "../assets/logo.svg";
import Image from 'next/image';
import Link from 'next/link';
import Burger from './Burger';
import { useTheme } from 'next-themes';

export default function Header() {
  

  return (
    <div className="w-full px-4 py-4 flex justify-between items-center lg:px-20">

     

      <div className="hidden lg:flex justify-between items-center w-full">
        <ul className="flex justify-center items-center gap-x-10 text-lg text-[#1D1F2C]">
          <li><Link href="#pricing">Service</Link></li>
          <li><Link href="#pricing">Pricing</Link></li>
          <li><Link href="#How It Works?">How It Works?</Link></li>
        </ul>
        <Image src={logo} width={160} height={160} alt="logo" />


        <ul className="flex justify-between items-center gap-x-10">
          <li><Link href="#contact">Contact Us</Link></li>
          <Button variant={"Blue"}>Get Started</Button>
        </ul>
      </div>
      <div className="lg:hidden  w-full">
          <Burger />
        </div>

    </div>
  );
}
