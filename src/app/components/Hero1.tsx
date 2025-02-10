import React from "react";
import data from "../assets/Hero1/Image";
import Image from "next/image";
export default function Hero1() {
  return (
    <div className="text-center mt-20 px-20" >
      <text className="text-lg">
        More than 1.8 million people{" "}
        <span className="text-blue-500 font-medium italic">
          across 10,000 companies
        </span>{" "}
        with us
      </text>
      <div className="flex justify-center lg:justify-between   mt-10 flex-wrap gap-5">
        {data.map((elm) => (
          <div key={elm.id} >
            <Image src={elm.url} alt="100" width={80} height={80} className="md:w-[120px] md:h-[120px]" />
          </div>
        ))}
      </div>
    </div>
  );
}
