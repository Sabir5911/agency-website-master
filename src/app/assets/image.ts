import image1 from "./image1.svg"
import image2 from "./image2.svg"
import image3 from "./image3.svg"
import image4 from "./image4.svg"
import image5 from "./image5.svg"
import image6 from "./image6.svg"
let imageData = [
  {
    id: 0,
    image: image1,
    width: 389,
    height: 516, // Decreased by 30
  },
  {
    id: 1,
    image: image2,
    width: 389, // Decreased by 30
    height: 334, // Decreased by 30
  },
  {
    id: 2,
    image: image3,
    width: 389, // Decreased by 30
    height: 516, // Decreased by 30
  },
  {
    id: 3,
    image: image4,
    width: 389, // Decreased by 30
    height: 334, // Decreased by 30
  },
  {
    id: 4,
    image: image5,
    width: 389, // Decreased by 30
    height: 516, // Decreased by 30
    css: "-mt-[150px]" // Adjusted to maintain relative positioning
  },
  {
    id: 5,
    image: image6,
    width: 389,
    height: 334,
  },
];

export default imageData;
