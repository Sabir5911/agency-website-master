
import React from "react";
import { Button } from "@/components/ui/button";

export default function Section({
  Heading,
  text1,
  text2,
  Btntext,
  ibutton = false,
  center=true
}: any) {
  return (
    <div className={` flex-wrap flex flex-col  gap-5 justify-center    ${center?" text-center items-center ":"text-center lg:text-left "}`}>
      <p className="text-[#0076FF] font-medium  ">{Heading}</p>
      <p className="text-[#1D1F2C] text-4xl  font-semibold max-w-md">{text1}</p>
      <p className="max-w-sm">{text2}</p>

      {ibutton && (
        <div className="mt-5">
          <Button variant={"Blue"} size={"default"}>
            {Btntext}
          </Button>
        </div>
      )}
    </div>
  );
}


