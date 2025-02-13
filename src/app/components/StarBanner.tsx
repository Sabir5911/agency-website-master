export default function StatsBanner() {
  const stats = [
    "5+ Years of Innovation",
    "Serving 40+ Global Brands",
    "Impacting 25+ Industries",
    "96% Client Satisfaction",
  ];

  return (
    <>
      <div className="bg-[#0cc0df] text-white py-6  absolute left-0 right-0 mt-32 font-roboto">
  <div className="container justify-start items-start  flex flex-col md:flex-row md:justify-around md:items-center gap-4">
    {stats.map((stat, index) => (
      <div key={index} className="flex items-center gap-3">
        {/* Icon Container */}
        <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md">
          <svg
            className="w-5 h-5 text-[#0cc0df]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        {/* Text */}
        <span className="font-medium text-lg font-roboto">{stat}</span>
      </div>
    ))}
  </div>
</div>

    </>
  );
}
