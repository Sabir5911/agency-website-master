// components/Footer.js
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.svg';

import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F1016] text-white py-8">
      <div className="  flex flex-col justify-start md:flex-row md:justify-between px-6 md:px-16 lg:px-20">
        <div className="mb-6 md:mb-0 flex flex-col ">
          <div className='flex items-center justify-start  '>
          <Image src={logo} width={120} height={120} alt="logo" className=' -ml-10' />
<p>Mitali Studio</p>

          </div>
          <p className="text-gray-400 max-w-[350px] mt-4">
            High-quality, natural links to help you boost your rankings and generate more traffic to your site.
          </p>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Services</h3>
          <ul className="text-gray-400 space-y-2">
            <li><Link href="#">Managed Subscription</Link></li>
            <li><Link href="#">Guest post packages</Link></li>
            <li><Link href="#">Link Audit</Link></li>
            <li><Link href="#">Link Insertion Outreach</Link></li>
            <li><Link href="#">Digital PR</Link></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul className="text-gray-400 space-y-2">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Case Study</Link></li>
            <li><Link href="#">FAQs</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
          <ul className="text-gray-400 space-y-2">
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">List Your Site</Link></li>
            <li><Link href="#">Schedule a Call</Link></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Social Media</h3>
          <ul className="flex space-x-4">
            <li><Link href="#"><i className="fab fa-linkedin"></i></Link></li>
            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
            <li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
            <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
          </ul>
        </div>
      </div>
      <hr className='mt-10 bg-[#727B7B]' />
      <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
        <div className="mb-4 md:mb-0">
          <Link href="#"><span className="mr-4">Terms & Conditions</span></Link>
          <Link href="#"><span className="mr-4">Privacy Policy</span></Link>
          <Link href="#"><span>Cookie preferences</span></Link>
        </div>
        <div className="flex space-x-4">
          <span>© 2024 LogoIpsum All Rights Reserved.</span>
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
