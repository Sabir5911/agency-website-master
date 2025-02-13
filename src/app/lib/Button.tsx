import React from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";

interface Props {
  Text: string;
  size: "default" | "sm" | "lg" | "icon" | "xs";
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "Blue";
  className?: string;
}

export default function CustomButton({ Text, size, variant, className }: Props) {
  return (
    <Button
      size={size}
      className={`${className} flex items-center gap-2 sm:gap-3 md:gap-2 px-3 sm:px-4 md:px-5 text-sm sm:text-base md:transition-all duration-300 hover: group`}
      variant={variant}
    >
      <span >{Text}</span>
      <IoIosArrowRoundForward
      size={25}
      
        className="transition-transform duration-300 group-hover:translate-x-2 font-bold"
      />
    </Button>
  );
}
