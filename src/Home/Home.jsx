import React, { useEffect } from "react";
import homeimg from "./images/home.jpg";
import homevideo from './images/v1.mp4'
import './home.css'
import c2cimg from './images/c2c.jpg'

function Home() {
    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
      }, []); 
  return (
    <>
   
    <div className="relative">
      {/* Responsive full-screen image */}
      <div className="w-full h-screen relative adjustContainer">
  <img
    src={homeimg}
    alt="Home"
    className="w-full h-full object-cover absolute top-0 left-0  md:h-full adjustimgmain"
  />
</div>
      {/* Optional overlay text */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <h1 className="text-white text-4xl md:text-6xl font-bold makesmallfont">
          Welcome to C2C CTF 2025
        </h1>
      </div>
    </div>

    <div className="font-poppins bg-gradient-to-br bg-white text-gray-700 py-10 px-8 md:px-20 lg:px-36 rounded-lg shadow-md space-y-8">
    
    <h1 className="text-3xl md:text-4xl font-semibold text-center">
        A Premier Capture-the-Flag Event!
    </h1>
    <p className="text-base md:text-lg leading-7 md:leading-9 text-justify">
        The Country to Country CTF (C2C) Cybersecurity Challenge is a series of international CTF competitions organized by the International Cyber Security – Center of Excellence (INCS-CoE) with leading international universities. The 2025 competition is hosted by Northeastern University.
    </p>
    <p className="text-base md:text-lg leading-7 md:leading-9 text-justify">
        C2C is an exciting opportunity for students to work together as international teams to solve interesting CTF challenges, learn new skills, socialize, and promote international collaboration and friendship. Interested university students across the US, UK, France, Israel, Japan, and Australia participated in the qualifying competition on Feb ??, 2025. The final round of team competition will be held at Northeastern University, Boston on July 6 - 10, 2025.
    </p>
    </div>

    <section className="section font-poppins" id="aboutussection">
    <video className="video-slider" src={homevideo} autoPlay muted loop></video>
    <div className="content">
        {/* <h1 className="font-500">Welcome to C2C CTF 2025</h1>
        <p className="text-white para-style">The Country to Country CTF (C2C) Cybersecurity Challenge is a series of international CTF competitions organized by the International Cyber Security</p>
        <p className="para mt-2">A CTF Organized by Northeastern University</p> */}

        <h1 class="font-extrabold text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center mb-6">Welcome to C2C CTF 2025</h1>
        <p class="text-white text-base sm:text-sm md:text-base lg:text-lg text-center mb-4">The Country to Country CTF (C2C) Cybersecurity Challenge is a series of international CTF competitions organized by the International Cyber Security</p>
        <p class="text-base text-[#ddd] sm:text-sm md:text-base lg:text-lg text-center mt-2">A CTF Organized by Northeastern University</p>
        <button className="cta-button mt-5">Learn More</button>


    </div>
    </section>

    <div className="font-poppins bg-gradient-to-br bg-white text-gray-700 py-10 !pb-14 px-8 md:px-20 lg:px-36 rounded-lg shadow-md space-y-8">
        <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
            About C2C-CTF
            </h1>
            <p className="text-sm md:text-base text-gray-600">A global Capture the Flag competition.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 flexchange">
            {/* Text Section */}
            <div className="flex-1 text-base md:text-[16px] text-gray-700 text-justify fonttexting">
            <p>
                INCS-CoE is an International Charter of six universities from Japan, US, and UK, and is operated by 25 universities from Japan, US, UK, Israel, France, Australia, and other countries for international and inter-university research collaboration in cyber security.
            </p>
            <p className="pt-2">
                The Country-to-Country CTF (C2C CTF) is now nearing the end of the inaugural five-year plan that started in 2020. C2C-CTF events have been held (physically and/or virtually) at: Royal Holloway, University of London, UK in 2020; Ben-Gurion University and Israel Institute of Technology, Israel in 2021; Massachusetts Institute of Technology, USA in 2022; and Keio University, Japan in 2023.
            </p>
            <p className="py-2">
                In 2024, Edith Cowan University will host the C2C-CTF as a fully on-line, virtual event.
            </p>
            <p>
                We are delighted to pass on the hosting responsibilities to Northeastern University, Boston, USA for 2025. Further details to come soon!
            </p>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2">
            <img src={c2cimg} alt="C2C-CTF Event" className="w-full border border-gray-200 rounded-lg shadow-xl object-cover" />
            </div>
        </div>
        </div>





</>
    
  );
}

export default Home;
