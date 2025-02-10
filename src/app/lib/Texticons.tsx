// import React from "react";
// import Image from "next/image";
// export default function Texticons({
//   link,
//   text,
//   gmail,
// }: {
//   link: string;
//   text: string;
//   gmail: string;
// }) {
//   return (
//     <>
//       <div className="flex justify-center gap-x-5">
//         <div>
//           <Image src={link} width={35} height={35} alt="icons" />
//         </div>

//         <div className="flex flex-col font-semibold text-[#4A4C56]">
//           <text>{text}</text>
//           <text className="font-medium">{gmail}</text>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import Image from "next/image";

export default function Texticons({
  link,
  text,
  gmail,
}: {
  link: string;
  text: string;
  gmail: string;
}) {
  return (
    <div className="flex items-center justify-center md:justify-start gap-x-3"> {/* Adjusted alignment and gap for responsiveness */}
      <div>
        <Image src={link} width={35} height={35} alt="icons" />
      </div>
      <div className="flex flex-col text-[#4A4C56] text-xs md:text-sm"> {/* Adjusted font size for responsiveness */}
        <span className="font-semibold max-w-sm">{text}</span>
        <span className="font-medium">{gmail}</span>
      </div>
    </div>
  );
}
