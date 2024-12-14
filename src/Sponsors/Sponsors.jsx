import React, { useEffect } from 'react';
import Sponsorsimg from './images/Sponsors.png';

function Sponsors() {
     useEffect(() => {
            // Scroll to the top of the page when the component is mounted
            window.scrollTo(0, 0);
          }, []); 
  return (
    <div className="bg-gradient-to-br font-poppins bg-white text-gray-700 pt-3 pb-10 px-6 sm:px-12 md:px-20 lg:px-36">
      <div className="w-full max-w-7xl p-8 space-y-8">
        
        {/* Title Section */}
        <div className="text-center">
          
          <h1 className="text-center text-4xl sm:text-5xl font-[700] text-gray-900 mb-3 leading-tight sponserslineofborder">
          Our Sponsors
        </h1>
          <p className="text-lg text-gray-600 mb-6">We are proud to be supported by leading organizations in the cybersecurity field. Their contributions help make C2C 2025 a success!</p>
        </div>

        {/* Platinum Sponsor Section */}
        <div className=" space-y-4">
        <h2 
        className="
          text-xl sm:text-2xl md:text-3xl 
          font-semibold text-gray-800 
          border-b-2 border-[#000000ae] 
          inline-block
          pb-1 sm:pb-2 md:pb-3
        "
      >
        Platinum Sponsor
      </h2>
          <div className="bg-black p-6 rounded-[10px] border border-gray-200 shadow-xl">
            <img src={Sponsorsimg} alt="Platinum Sponsor" className="w-full !max-h-[400px] h-auto object-contain rounded-lg " />
          </div>
        </div>

        {/* Silver Sponsor Section */}
        <div className=" space-y-4">
          <h2 className=" text-xl sm:text-2xl md:text-3xl 
          font-semibold text-gray-800 
          border-b-2 border-[#000000ae] 
          inline-block
          pb-1 sm:pb-2 md:pb-3">Silver Sponsor</h2>
          <p className="text-lg text-gray-600">
            We invite leaders in the area of cybersecurity to support the next generation of cyber-defenders as a sponsor of C2C 2025.
            These events will provide a unique opportunity for industry supporters to:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
            <li>Gain exposure amongst the wider cyber-community via our PR and social media campaigns.</li>
            <li>Engage with some of the brightest students across the globe who are considering taking up challenging job roles in cyber.</li>
            <li>Align your brand with the competition hosted by the International Cyber Security Center of Excellence (INCS-CoE) and five leading universities.</li>
            <li>Showcase your brand’s corporate social responsibility projects in cyber-defense.</li>
          </ul>
          <p className="text-lg text-gray-600 mt-4">
            Reach out to <span className="font-semibold text-blue-600">???</span> to discuss sponsorship opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
