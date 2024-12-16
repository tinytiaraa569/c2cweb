import React, { useEffect } from "react";
import winner2023 from "./images/winning2023.png";
import winner2022 from "./images/winning2022.png";
import winner2021 from "./images/winning2021.png";
import { GiPodiumWinner } from "react-icons/gi";

function Winners() {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (year) => {
    const urls = {
      2023: "https://c2c-ctf-2023.cysec-lab.keio.ac.jp/index.php/winner-teams/",
      2022: "https://c2c-ctf-2022.mit.edu/country-country-award-winners-2022",
      2021: "https://www.c2c-ctf-2021.org/winningteams",
    };

    // Open the URL in a new tab
    if (urls[year]) {
      window.open(urls[year], "_blank");
    }
  };

  return (
    <div className="w-full font-poppins bg-gray-50 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 winnerlineofborder">
          Previous Winners
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore the champions of C2C for the past years and celebrate their
          achievements in the cybersecurity world.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-20 mb-5">
        {/* Card Template */}
        {[
          { year: 2023, image: winner2023 },
          { year: 2022, image: winner2022 },
          { year: 2021, image: winner2021 },
        ].map((winner) => (
            <div
            key={winner.year}
            className="relative bg-white border-2 border-gray-200 rounded-lg overflow-hidden cursor-pointer group hover:scale-105"
            onClick={() => handleNavigation(winner.year)}
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
            }}
          >
            {/* Image */}
            <img
              src={winner.image}
              alt={`${winner.year} Winner`}
              className="w-full h-[280px]"
            />

            {/* Read More Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">Read More</p>
            </div>

            {/* Year */}
            <div className="bg-gray-900 text-white text-center py-2 flex items-center justify-center">
            <GiPodiumWinner size={30} className="text-[#FFD700]"/> 
              <h2 className="ml-2 text-xl font-bold">{winner.year}</h2>
              <GiPodiumWinner size={30} className="ml-2 text-[#FFD700]"/> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Winners;
