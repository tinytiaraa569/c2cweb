import React, { useEffect } from 'react';

// Dummy data for organizers
const organizers = [
  {
    id: 1,
    name: 'John Doe',
    description: 'Lead Organizer of C2C CTF, with over 10 years of experience in cybersecurity.',
    image: 'https://via.placeholder.com/150', // Replace with real image URL
  },
  {
    id: 2,
    name: 'Jane Smith',
    description: 'A passionate security enthusiast and the co-organizer of C2C CTF.',
    image: 'https://via.placeholder.com/150', // Replace with real image URL
  },
  {
    id: 3,
    name: 'Michael Johnson',
    description: 'Event coordinator ensuring the smooth execution of the C2C event.',
    image: 'https://via.placeholder.com/150', // Replace with real image URL
  },
  {
    id: 4,
    name: 'Emily Davis',
    description: 'Technical advisor for challenges and mentor to participants.',
    image: 'https://via.placeholder.com/150', // Replace with real image URL
  },
  {
    id: 5,
    name: 'John Doe',
    description: 'Lead Organizer of C2C CTF, with over 10 years of experience in cybersecurity.',
    image: 'https://via.placeholder.com/150', // Replace with real image URL
  },
  {
    id: 6,
    name: 'Jane Smith',
    description: 'A passionate security enthusiast and the co-organizer of C2C CTF.',
    image: 'https://via.placeholder.com/150', // Replace with real image URL
  }
];

function Organizers() {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-br font-poppins bg-white text-gray-700 pt-8 pb-10 px-6 sm:px-12 md:px-20 lg:px-36">
      <div className="text-center mb-8">
        <h1 className="text-center text-4xl sm:text-5xl font-[700] text-gray-900 mb-3 leading-tight">
          Meet Our Organizers
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get to know the amazing team behind the C2C CTF event. Their dedication and expertise make it all possible.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-20">
        {organizers.map((organizer) => (
          <div
            key={organizer.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden group"
          >
            {/* Image */}
            <img
              src={organizer.image}
              alt={organizer.name}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {organizer.name}
              </h2>
              <p className="text-gray-700 text-sm">{organizer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Organizers;
