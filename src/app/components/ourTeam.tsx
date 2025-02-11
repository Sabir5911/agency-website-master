"use client"
import React, { useState, useRef, useEffect } from 'react';
import Section from '../lib/Section';

export default function OurTeam() {
    const profiles = [
        { name: "Sabir Ali", role: "Full Stack Web Developer", image: "https://cdn.pixabay.com/photo/2020/03/11/17/32/engineer-4922781_640.jpg" },
        { name: "Abdullah Ahsan", role: "Frontend Developer", image: "https://cdn.pixabay.com/photo/2020/03/11/17/32/engineer-4922781_640.jpg" },
        { name: "Munwar", role: "Backend Developer", image: "https://cdn.pixabay.com/photo/2020/03/11/17/32/engineer-4922781_640.jpg" },
        { name: "Mutte", role: "UI/UX Designer", image: "https://cdn.pixabay.com/photo/2020/03/11/17/32/engineer-4922781_640.jpg" },
        { name: "Haseeb Tariq", role: "UI/UX Designer", image: "https://cdn.pixabay.com/photo/2020/03/11/17/32/engineer-4922781_640.jpg" },
    ];

    let data = {
        Heading: "our team",
        text1: "Meet Our Experts.",
        center: true,
    };

    const [startIndex, setStartIndex] = useState(0);
    const [profilesPerPage, setProfilesPerPage] = useState(3);
    const scrollRef = useRef(null);

    useEffect(() => {
        const updateProfilesPerPage = () => {
            if (window.innerWidth <= 640) {
                setProfilesPerPage(1);
            } else if (window.innerWidth <= 1024) {
                setProfilesPerPage(2);
            } else {
                setProfilesPerPage(3);
            }
        };
        window.addEventListener("resize", updateProfilesPerPage);
        updateProfilesPerPage();
        return () => window.removeEventListener("resize", updateProfilesPerPage);
    }, []);

    const nextProfiles = () => {
        if (startIndex + profilesPerPage < profiles.length) {
            setStartIndex(startIndex + profilesPerPage);
        }
    };

    const prevProfiles = () => {
        if (startIndex - profilesPerPage >= 0) {
            setStartIndex(startIndex - profilesPerPage);
        }
    };

    return (
        <section className="flex flex-col items-center justify-center text-center mt-20 py-20 lg:px-20" id="reviews">
            <Section {...data} />

            <div className="relative w-full py-10">
                <button onClick={prevProfiles} disabled={startIndex === 0} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full disabled:opacity-50">‹</button>
                <div ref={scrollRef} className="w-full flex justify-center gap-5 px-5 transition-transform duration-500 ease-in-out">
                    {profiles.slice(startIndex, startIndex + profilesPerPage).map((profile, index) => (
                        <div key={index} className="text-left rounded-lg w-[300px] flex-shrink-0">
                            <img src={profile.image} alt={profile.name} className="w-full h-64 object-cover rounded-lg" />
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-white">{profile.name}</h2>
                                <p className="text-gray-600 text-sm pt-1">{profile.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={nextProfiles} disabled={startIndex + profilesPerPage >= profiles.length} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full disabled:opacity-50">›</button>
            </div>
        </section>
    );
}
