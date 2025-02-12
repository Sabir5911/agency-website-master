import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../assets/2.svg";


export default function AIReplacementCTA() {
    return (
      <div className="flex items-center justify-between mt-16   shadow-[#0cc0df] shadow-lg p-6 rounded-lg max-w-4xl mx-auto font-roboto">
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
        <Button variant={"Blue"} size={"lg"}>
          GET STARTED →
        </Button>
      </div>
    );
  }
  