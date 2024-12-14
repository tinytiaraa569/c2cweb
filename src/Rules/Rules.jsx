import React, { useEffect } from 'react';

function Rules() {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-br bg-white text-gray-700 py-10 px-6 sm:px-12 md:px-20 lg:px-36">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-center text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
          Rules 
        </h1>

        <div className="mb-12 px-6 sm:px-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4  border-b-2 border-[#000000ae] inline-block">Rules and Regulations</h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-600">
            <li>Participants must be currently enrolled in a university at the time of the qualifier, Feb 2025.</li>
            <li>Participants must have applied with their university email to participate before the deadline and have received a confirmation of being selected for the final event. After the confirmation, participants must have registered on the provider's platform by using their same university email address used during registration by the deadline stated in the confirmation email.</li>
            <li>Registering twice (e.g., using multiple email addresses) to participate in the event is prohibited.</li>
            <li>If a participant is found at any time to not meet the above requirements, she/he would not be eligible for participating in the final and/or winning prizes.</li>
            <li>Students are not allowed to transfer the rights to participate to someone else.</li>
          </ul>
        </div>

        <div className="mb-12 px-6 sm:px-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#000000ae] inline-block">Scoring and Event Logistics</h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-600">
            <li>To attend all the events (e.g., Qualifier and Final Event), each participant will have to provide their own appropriate Internet connection and IT equipment, as well as take responsibility for any other requirement (e.g., space).</li>
            <li>Any cost associated with events participation (e.g., Internet access) is not covered by the organizers.</li>
            <li>There will be a maximum of 1,000 competitors in the qualifiers and 100 teams in total in the finals (each team will consist of 5 individuals).</li>
            <li>Each team must have a team leader (chosen by the organizers) and a team name (inappropriate names will not be accepted).</li>
            <li>We will provide basic scoreboard provisions including best team and best individual for each category challenge type.</li>
            <li>We will provide a scoreboard which reports on the positions of all teams until the final two hours of the competition when it will be hidden from the teams.</li>
            <li>We will communicate updates during the competition via appropriate channels (e.g., Discord).</li>
            <li>We will provide helpdesk-based support through a ticketing system to competitors during the 24-hour competition window to address any issues relating to competitors’ access to their platform or platform-based issues.</li>
          </ul>
        </div>

        <div className="mb-12 px-6 sm:px-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#000000ae] inline-block">Ethics</h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-600">
            <li>Any activities or actions that would interfere, obstruct, or disturb other teams, participants, and event organizers.</li>
            <li>Spying on other teams, participants, and event organizers.</li>
            <li>Providing hints, clues, or answers to participants other than your own team members.</li>
            <li>Seeking or receiving hints, clues, or answers from participants other than your own team members – a hint or a clue provided by event organizers to all participants would be acceptable.</li>
            <li>Participating in multiple teams.</li>
            <li>Any attacks on networks and systems.</li>
            <li>In a nutshell: have fun and do not cheat!</li>
          </ul>
        </div>

        <div className="mb-12 px-6 sm:px-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-[#000000ae] inline-block">Tiebreakers</h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-600">
            <li>The total time between a team's first challenge opened and the last successful flag submission.</li>
            <li>The smallest number of total challenges solved between equal points teams (hardest challenges solved).</li>
          </ul>
          <p className="text-lg text-gray-600 mt-4">
            If the event organizers find any prohibited activities, they have the right to deduct points or disqualify a team. Same penalties would be applied even if event organizers find any prohibited activities before and after the competition (e.g., Dry Run, Award Ceremony). In all these cases, the organizers reserve the right to contact the University of the applicant to notify them about this behavior. Please note that this document can be updated at any time without prior notice. The latest version of this document and more information on the competition can be found at: <a href="https://???" className="text-blue-600 hover:underline">https://???</a>
          </p>
        </div>

        <div className="px-6 sm:px-12">
          <p className="text-lg text-gray-600">
            These apply to all events organized within C2C CTF 2025 (e.g., Dry Run, Qualifier, Webinars, Final Event, Award Ceremony, etc.)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Rules;
