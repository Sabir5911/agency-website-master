export default function StatsBanner() {
  const stats = [
    "5+ Years of Innovation",
    "Serving 40+ Global Brands",
    "Impacting 25+ Industries",
    "96% Client Satisfaction",
  ];

  return (
    <>
      <div className="bg-[#0cc0df] text-white py-6 px-4 absolute left-0 right-0 mt-20 font-roboto ">
        <div className="container mx-auto flex flex-wrap justify-center gap-6 md:justify-around">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-md">
                <svg
                  className="w-4 h-4 text-[#0cc0df]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="font-medium text-lg font-roboto">{stat}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
