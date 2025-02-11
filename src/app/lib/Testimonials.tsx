import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star,Verified } from "lucide-react";


interface TestimonialCardProps {
    name: string;
    imageString: string;
    rating: number;
    review: string;
    role: string;
}

const TestimonialCard = ({name,imageString,rating,review,role}:TestimonialCardProps) => {
  return (
    <Card className="max-w-md p-6 rounded-2xl shadow-lg  relative hover:shadow-xl hover:-translate-y-1 transform transition duration-300 ease-in-out">
      <div className="absolute -top-6 left-4 w-12 h-12 rounded-full overflow-hidden border-4 shadow-md hover:scale-110 transition-transform duration-300">
        <img
          src={imageString}
          alt="User Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex-grow"></div>
        <div className="flex space-x-1 text-yellow-400">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" stroke="none" />
          ))}
        </div>
      </div>
      <CardContent className="mt-2">
        <p className=" text-sm text-left">
            {review}
        </p>
        <div className="mt-4 float-left text-left">
            <div className="flex items-center gap-1 ">
            <h4 className=" font-semibold">{name}</h4>
                <Verified size={16} fill="none" stroke="blue" />
            </div>
          <p className="text-gray-500 text-xs">{role}</p>
        </div>
      
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
