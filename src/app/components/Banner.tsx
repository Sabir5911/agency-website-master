import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../assets/2.svg";
import CustomButton from "../lib/Button";
import Link from "next/link";


export default function AIReplacementCTA() {
    return (
<div className="  hidden lg:flex  items-center justify-between mt-16 shadow-[#0cc0df] shadow-lg p-6 rounded-lg max-w-4xl mx-auto font-roboto">
{/* Left Section */}
        <div className="flex items-start space-x-4">
          {/* Icon */}
          <div className="">
          <Image
            src={logo}
            width={90}
            height={90}
            alt="logo"
            className=" w-[80px]"
          />
        </div>
  
          {/* Text */}
          <div className="leading-[1.3] text-pretty font-medium text-white">
            <p>🚀 We Can Help You Replace Humans with AI 🤖</p>
            <p>Save More with Our Smart Automation Solutions! 💡💸</p>
            <p>Why Hire Humans when AI does it better? 🤔✨</p>
          </div>
        </div>
  
        {/* Right Section - Button */}
        <Link href="https://calendly.com/sabirali786692/30min" target="_blank">
        <CustomButton  Text=" GET STARTED" size="lg" variant="Blue" className="" />

        </Link>
      
      </div>
    );
  }
  