import React, { useEffect, useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaRegCalendarAlt, FaUserGraduate, FaDollarSign } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import { BiSupport } from 'react-icons/bi';

function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // Keep the first FAQ open by default
  useEffect(() => {
      // Scroll to the top of the page when the component is mounted
      window.scrollTo(0, 0);
    }, []); 

  const faqData = [
    {
      question: 'Who is eligible to participate in the competition?',
      answer:
        'Participants must be currently enrolled in a university at the time of the qualifier (February 2025). They must be 18 years or older and apply using their university email before the registration deadline. Students who graduate after Feb 2025 but before the finals are still eligible. Applicants from comprehensively sanctioned countries may face restrictions due to U.S. federal regulations.',
      icon: <FaUserGraduate />,
    },
    {
      question: 'What are the key differences between the qualifier and the final event?',
      answer:
        'The qualifier is an individual, remote event where participants compete independently. The finals are team-based and held in-person at Northeastern University between July 6-9, 2025. Teams of five will be assigned by the organizers.',
      icon: <FaRegCalendarAlt />,
    },
    {
      question: 'How will the teams be formed for the finals?',
      answer:
        'Teams will be formed by the organizers to ensure a diverse mix of skills, backgrounds, and capabilities. Each team will consist of five participants selected from the qualifier. Team leaders will also be designated by the organizers. Participants cannot choose their teammates, as the focus is on fostering collaboration among individuals with varied expertise.',
      icon: <FaPeopleGroup />,
    },
    {
      question: 'Can I register using a non-university email address?',
      answer:
        'No, participants must register using their university email address. The same email must be used for all subsequent competition communications, including registering on the competition platform for the finals.',
      icon: <HiOutlineMail />,
    },
    {
      question: 'Can I transfer my registration to someone else if I can’t participate?',
      answer:
        'No, registrations are non-transferable. Only the individual who registered and meets the eligibility criteria may participate.',
      icon: <FaQuestionCircle />,
    },
    {
      question: 'What should I bring to the in-person finals?',
      answer:
        'Participants must bring their own laptops and necessary peripherals (e.g., chargers, adapters). Internet access and power outlets will be provided at the venue. Personal travel expenses are the participant\'s responsibility, but accommodation and meals will be provided during the event.',
      icon: <FaRegCalendarAlt />,
    },
    {
      question: 'What happens if I violate the ethics or rules during the competition?',
      answer:
        'Violations, such as collusion, cheating, or unauthorized attacks, will result in penalties, including point deductions, disqualification, and potential notification of your university. The organizers reserve the right to take further action to maintain the competition’s integrity.',
      icon: <FaQuestionCircle />,
    },
    {
      question: 'Will there be any support during the competition?',
      answer:
        'Yes, participants will have access to support:\n\nFor the qualifier, a virtual helpdesk channel using Discord will be set up.\nFor the finals, on-site support will address any technical or logistical issues.',
      icon: <BiSupport />,
    },
    {
      question: 'Are there any costs involved in participating?',
      answer:
        'Qualifier: Participants must cover their own costs, such as internet access and equipment.\n\nFinals: Travel expenses are the responsibility of participants unless otherwise specified. However, accommodation and meals will be provided.',
      icon: <FaDollarSign />,
    },
    {
      question: 'Can the rules change during the competition?',
      answer:
        'Yes, rules and policies are subject to change. Participants will be notified promptly of any updates and reminded of relevant rules at each stage of the competition.',
      icon: <FaQuestionCircle />,
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Close the current one if it's already open, else open the clicked one
  };

  return (
    <div className="font-poppins bg-gradient-to-br bg-white text-gray-700 pb-10 pt-8 px-8 md:px-20 lg:px-36 rounded-lg shadow-md space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
        Frequently Asked Questions (FAQs)
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <div
              onClick={() => toggleAccordion(index)}
              className="cursor-pointer flex justify-between items-center text-lg font-semibold text-gray-800 hover:text-[#e74c3c]"
            >
              <div className="flex items-center space-x-2 hover:text-[#e74c3c]">
                {faq.icon}
                <span>{faq.question}</span>
              </div>
              <span
                className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
              >
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            <div
              className={`mt-2 text-sm md:text-base text-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'height-auto opacity-100' : 'height-0 opacity-0'}`}
              style={{
                height: openIndex === index ? 'auto' : '0',
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
