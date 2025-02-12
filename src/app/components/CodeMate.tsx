import { Button } from "@/components/ui/button";
import { FaCheckCircle } from "react-icons/fa";

export default function DevmateLanding() {
    return (
      <div className="flex flex-col items-start gap-1 justify-start text-left   font-roboto max-w-md">
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
        <Button size={"lg"}  variant={"Blue"} className=" text-white hover:bg-transparent border mt-6">
          UNLOCK FREE SESSION →
        </Button>
      </div>
    );
  }
  