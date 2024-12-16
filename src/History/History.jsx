import React, { useEffect, useState } from 'react';
import firstimg from './images/1.webp';
import secondimg from './images/2.webp';
import thirdimg from './images/3.webp';
import fourimg from './images/4.webp';
import fiveimg from './images/5.webp';
import Winners from '../Winners/Winners';

function History() {
  const [historydata, sethistorydata] = useState([
    { id: "1", year: "2024", university: "Edith Cowan University", imgurl: fiveimg },
    { id: "2", year: "2023", university: "Keio University", imgurl: fourimg },
    { id: "3", year: "2022", university: "Massachusetts Institute of Technology (CSAIL)", imgurl: thirdimg },
    { id: "4", year: "2021", university: "Technion - Israel Institute of Technology", imgurl: secondimg },
    { id: "5", year: "2020", university: "Royal Holloway, University of London", imgurl: firstimg },
  ]);
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []); 

  return (
    <>
    
    <div className="bg-gradient-to-br bg-white text-gray-700 py-10 px-6 sm:px-12 md:px-20 lg:px-36">
        <div className="text-center mb-12 px-6 sm:px-12">
        <h1 className="text-4xl sm:text-5xl font-[700] text-gray-900 mb-4 leading-tight">
            History
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Discover the journey through prestigious institutions, showcasing the global
            universities that have hosted our history over the years.
        </p>
        </div>

      {/* Grid layout for two cards per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10 ">
        {historydata.map((item) => (
          <div
            key={item.id}
            className="bg-white text-gray-700 rounded-lg border border-gray-200 shadow-xl overflow-hidden hover:scale-105 hover:shadow-2xl"
          >
            <div className="overflow-hidden rounded-t-lg mb-4">
              <img
                src={item.imgurl}
                alt={`University ${item.year}`}
                className="w-full h-auto max-h-64 "  // Adjusted to prevent cut-off
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">{item.year}</h3>
              <p className="text-md sm:text-lg text-gray-600">{item.university}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <Winners />


    </>

  );
}

export default History;
