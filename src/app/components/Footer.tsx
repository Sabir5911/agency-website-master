import Link from 'next/link';
import Image from 'next/image';
import logo from "../assets/2.svg";

import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F1016] mt-16">
   
      <div className=" max-w-screen-xl mx-auto py-6 flex flex-col md:flex-row  text-gray-400 text-sm px-5">
    
        <div className="flex space-x-4 items-center ">
          <span>©2025 Code Mate All Rights Reserved.</span>
          <div className="flex space-x-2">
            <i className="fab fa-cc-visa"><IoLogoFacebook color='white' /></i>
            <i className="fab fa-cc-mastercard"><FaTwitter color='white'  /></i>
            <i className="fab fa-cc-amex"><FaInstagram  color='white' /></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
