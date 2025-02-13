import React from "react";

export default function OurTeam() {
  const profiles = [
    { name: "Sabir Ali", role: "Full Stack Web Developer", image: "https://cdn.pixabay.com/photo/2020/03/11/17/32/engineer-4922781_640.jpg" },
    { name: "Abdullah Ahsan", role: "Frontend Developer", image: "https://cdn.pixabay.com/photo/2020/03/11/17/32/engineer-4922781_640.jpg" },
    { name: "Munwar Abbas Golden", role: "Backend Developer", image: "https://cdn.pixabay.com/photo/2020/03/11/17/32/engineer-4922781_640.jpg" },
    { name: "Mutte Ur Rahman", role: "UI/UX Designer", image: "https://cdn.pixabay.com/photo/2020/03/11/17/32/engineer-4922781_640.jpg" },
  ];

  return ( 
    <section title="Meet Our Team" className="flex flex-col items-center justify-center text-center mt-16 font-roboto " id="reviews">

      <div className=" flex flex-col text-left justify-start w-full  ">
        <h6 className="uppercase">our team</h6>
        <h2 className="scroll-m-20  pb-2 text-5xl font-semibold tracking-tight first:mt-0 global-text-color ">
      Meet Our Expert
    </h2>

   
      </div>
  
        <div>
          

        </div>
      <div className="flex flex-wrap items-center  w-full justify-center md:justify-between mt-10 gap-5 ">
        {profiles.map((profile, index) => (
          <div key={index} className=" text-white  rounded-lg text-left hover:scale-105 transition-transform">
            <img src={profile.image} alt={profile.name} className="w-96 lg:w-64 aspect-square object-cover" />
            <div className="">
              <h2 className="text-lg font-normal mt-8">{profile.name}</h2>
              <p className="text-muted-foreground text-xs font-light">{profile.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
