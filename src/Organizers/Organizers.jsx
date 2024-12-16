import React, { useEffect } from 'react';
import manavpic from './images/manav.jpg';
import sagarpic from './images/sagar.jpg';



// Array to manage organizer details
const organizersData = [
  {
    name: 'David Luzzi',
    role: 'Executive Chair',
    imageUrl: 'https://via.placeholder.com/100', // Dummy image URL
  },
  {
    name: 'Aanjhan Ranganathan',
    role: 'Dir of Competitions',
    imageUrl: 'https://via.placeholder.com/100', // Dummy image URL
  },
  {
    name: 'Justin Wang',
    role: 'Dir of Challenge Creations',
    imageUrl: 'https://via.placeholder.com/100', // Dummy image URL
  },
  {
    name: 'Ziming Zhao',
    role: 'Dir of Platforms',
    imageUrl: 'https://via.placeholder.com/100', // Dummy image URL
  },
  {
    name: 'Gregory D\'Angelo',
    role: 'Accommodation Chair & Treasurer',
    imageUrl: 'https://via.placeholder.com/100', // Dummy image URL
  },
  {
    name: 'Marsha Robinson',
    role: 'Program Manager & Non-Competition Programming Chair',
    imageUrl: 'https://via.placeholder.com/100', // Dummy image URL
  },
];

// Array to manage technical committee details
const techCommitteeData = [
  {
    name: 'Manav Jain',
    role: 'Technical Committee',
    imageUrl: manavpic // Dummy image URL
  },
  {
    name: 'Sagar Mohan',
    role: 'Technical Committee',
    imageUrl: sagarpic, // Dummy image URL
  },
  {
    name: 'Eric Nie',
    role: 'Technical Committee',
    imageUrl: 'https://via.placeholder.com/100', // Dummy image URL
  },
  {
    name: 'Junbeom In',
    role: 'Technical Committee',
    imageUrl: 'https://via.placeholder.com/100', // Dummy image URL
  },
  {
    name: 'Ritik Karayat',
    role: 'Technical Committee',
    imageUrl: 'https://via.placeholder.com/100', // Dummy image URL
  },
  {
    name: 'MD Armanuzzaman',
    role: 'Technical Committee',
    imageUrl: 'https://via.placeholder.com/100', // Dummy image URL
  },
];

function Organizers() {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-br font-poppins bg-white text-gray-700 pt-8 pb-10 px-6 sm:px-12 md:px-20 lg:px-36">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Organizers & Technical Committee</h2>

      {/* Organizing Committee Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold  mb-4 text-gray-700 border-b-2 border-[#000000ae] inline-block">Organizing Committee</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizersData.map((organizer, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-4 border border-gray-100 rounded-lg shadow-md">
              <img
                src={organizer.imageUrl}
                alt={organizer.name}
                className="rounded-full w-28 h-28 object-cover mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">{organizer.name}</h4>
              <p className="text-sm text-gray-600">{organizer.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Committee Section */}
      <div>
        <h3 className="text-2xl font-semibold  text-gray-700 border-b-2 border-[#000000ae] inline-block mb-4">Technical Committee</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCommitteeData.map((member, index) => (
            <div key={index} className="flex flex-col items-center border border-gray-100 bg-white p-4 rounded-lg shadow-md">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="rounded-full w-28 h-28 object-cover mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-[#000000ae] inline-block  mb-4">Contact</h3>
        <p className="text-lg text-gray-800">
          If you have any questions, please reach out to us via email at
          <a href="mailto:contact@example.com" className="text-[#e74c3c] ml-1">contact@example.com</a>
        </p>
      </div>
    </div>
  );
}

export default Organizers;
