"use client"
// Burger.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CiMenuBurger } from "react-icons/ci";
import { RiCloseLine } from "react-icons/ri";
import Image from 'next/image';
import logo from "../assets/logo.svg";

export default function Burger() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className='px-4 py-2  w-full'>
        <div className="flex justify-between items-center mt-10">
            <Image src={logo} width={120} height={120} alt='logo' />
            <CiMenuBurger onClick={() => setIsOpen(!isOpen)} size={25} />
        </div>
        
        {isOpen && (
            <div className=' bg-white inset-0 flex flex-col items-center justify-center'>
                <div className='absolute top-12 right-11'>
                    <RiCloseLine onClick={() => setIsOpen(false)} />
                </div>
                
                <ul className='bg-white h-[300px] rounded-lg mt-4 flex flex-col text-center gap-10'>
                <li><Link href="#pricing" onClick={() => setIsOpen(false)} >Service</Link></li>
          <li><Link href="#pricing" onClick={() => setIsOpen(false)}>Pricing</Link></li>
          <li><Link href="#How It Works?" onClick={() => setIsOpen(false)}>How It Works?</Link></li>
                </ul>
            </div>
        )}
    </div>
    
    );
}
