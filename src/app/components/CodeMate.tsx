import { Button } from "@/components/ui/button";
import { FaCheckCircle } from "react-icons/fa";
import CustomButton from "../lib/Button";
import Link from "next/link";

export default function DevmateLanding() {
    return (
      <div className="flex flex-col items-start gap-1 justify-start text-left mt-32   font-roboto max-w-md">
       <p className={`max-w-sm text-sm text-muted-foreground`}> Pioneering Digital Revolution Since 2022</p>
        <h1 className="text-4xl/10 md:text-5xl font-bold mt-2 leading-snug" >
        Elevate your business with <span className="global-text-color">CODE MATE</span>

        </h1>
        <ul className="mt-6 space-y-4">
          {[
            "Top-Notch Websites ",
            "Ui/Ux Design",
            "Api Development",
            "Mobile App Developemnt",
          ].map((item, index) => (
            <li key={index} className="flex items-center space-x-3 text-md">
              <FaCheckCircle  color=""/>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Link href="https://calendly.com/sabirali786692/30min">

        <CustomButton  Text=" UNLOCK FREE SESSION" size="lg" variant="Blue" className="mt-5"/>
        
        </Link>  
        
      </div>
    );
  }
  