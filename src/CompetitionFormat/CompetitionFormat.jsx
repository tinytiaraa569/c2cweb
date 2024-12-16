import React, { useEffect } from 'react';

function CompetitionFormat() {
    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="bg-gradient-to-br bg-white text-gray-700 py-10 px-6 sm:px-12 md:px-20 lg:px-36 font-poppins">
      <div className="max-w-screen-lg mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">Competition Format</h2>
      
      <section className="mb-12 px-6 sm:px-12">
        <h3 className="text-xl font-semibold mb-3 text-gray-700 border-b-2 border-[#000000ae] inline-block">Qualifier</h3>
        <p className="text-base text-gray-600">
          The qualifier is an individual event. Each participant competes independently to solve challenges.
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Participants must provide their appropriate internet connection, IT equipment, and other necessary resources to participate in the qualifier.</li>
        </ul>
      </section>

      <section className="mb-12 px-6 sm:px-12">
        <h3 className="text-xl font-semibold mb-3 text-gray-700 border-b-2 border-[#000000ae] inline-block">Finals (In-Person, Team-based)</h3>
        <p className="text-base text-gray-600">
          The final is a team-based event. Teams will consist of five individuals assigned by the organizers.
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>The finals will be held in-person at Northeastern University between July 6-9, 2025. Detailed venue information and accommodations will be shared in advance.</li>
          <li>Participants are responsible for their travel.</li>
          <li>Accommodation and meals will be provided during the in-person finals.</li>
          <li>Competitors must bring their own laptops and peripherals for use during the competition. Internet and power outlets will be provided on-site.</li>
        </ul>
      </section>

      <section className="mb-12 px-6 sm:px-12">
        <h3 className="text-xl font-semibold  mb-3 text-gray-700 border-b-2 border-[#000000ae] inline-block">Team Structure</h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Final event teams will be created by the organizers to ensure diversity, inclusion, and a balance of skills and capabilities.</li>
          <li>Each team will consist of five participants.</li>
          <li>Team leaders will be designated by the organizers.</li>
          <li>Team names must adhere to appropriate standards; offensive or inappropriate names will not be accepted.</li>
        </ul>
      </section>

      <section className="mb-12 px-6 sm:px-12">
        <h3 className="text-xl font-semibold mb-3 text-gray-700 border-b-2 border-[#000000ae] inline-block">Ethics and Code of Conduct</h3>
        <p className="text-base text-gray-600">
          All participants must adhere to the highest standards of ethics and fair play. The following actions are strictly prohibited:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Interfering with, obstructing, or disturbing other teams, participants, or event organizers.</li>
          <li>Spying on or colluding with other teams or participants.</li>
          <li>Providing or seeking hints, clues, or answers from participants outside of your own team.</li>
          <li>Participating in multiple teams.</li>
          <li>Engaging in any unauthorized attacks on networks, systems, or infrastructure.</li>
        </ul>
        <p className="text-base text-gray-600">
          Violations of these rules may result in point deductions, disqualification, or notification of the participant’s university. In all cases, the organizers reserve the right to take appropriate actions to maintain the event's integrity.
        </p>
      </section>

      <section className="mb-12 px-6 sm:px-12">
        <h3 className="text-xl font-semibold mb-3 text-gray-700 border-b-2 border-[#000000ae] inline-block">Rules and Policy Changes</h3>
        <p className="text-base text-gray-600">
          Rules and policies are subject to change. Participants will be notified of any updates and provided with timely reminders about relevant rules at each stage of the competition.
        </p>
      </section>
      </div>
    </div>
  );
}

export default CompetitionFormat;
