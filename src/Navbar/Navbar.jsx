import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"; // Icons for hamburger menu
import logo from "../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [navitems, setnavitems] = useState([
    { name: "Home", path: "/" },
    { name: "Competition Format", path: "/competitionformat" },
    { name: "Rules", path: "/rules" },
    { name: "FAQ", path: "/faq" },
    { name: "Organizers", path: "/organizers" },
    { name: "History", path: "/history" },
    { name: "Sponsors", path: "/sponsors" },
    // { name: "Winners", path: "/winners" },
    
  ]);

  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate()

  const handleregister = () => {
    navigate("mention url of form to tranfer")

  }

  return (
    <div className="bg-black h-[70px] text-white font-poppins sticky top-0 left-0 w-full z-50 shadow-lg">
      <div className="flex items-center justify-between px-6 h-full">
        {/* Logo */}
        <div className="mt-2 cursor-pointer" onClick={()=>{navigate("/")}}>
          <img src={logo} alt="Logo" className="w-28" />
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8">
          {navitems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-[#e74c3c] hover:text-[#e74c3c] transition duration-300"
                  : "hover:text-[#e74c3c] transition duration-300"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Register Now Button (Desktop) */}
        <div className="hidden lg:flex">
            <button
              //  onClick={()=>handleregister()} 
                className="px-4 py-2 text-white text-sm font-semibold rounded-lg transition duration-300 ease-in-out bg-[#e74c3c] hover:bg-[#c0392b]"
            >
                Register Now
            </button>
            </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-black fixed top-[70px] left-0 w-full transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "!max-h-screen" : "max-h-0 overflow-hidden"
        }`}
        // full nav background
        // className={`lg:hidden bg-black fixed top-[70px] left-0 w-full transition-all duration-300 ease-in-out z-40 ${
        //     isOpen ? "h-screen max-h-screen" : "max-h-0 overflow-hidden"
        //   }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          {navitems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#e74c3c] hover:text-[#e74c3c] transition duration-300"
                    : "hover:text-[#e74c3c] transition duration-300"
                }
                onClick={toggleMenu} // Close menu on click
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Register Now Button (Mobile) */}
        <div className="flex justify-center py-4">
          <button
          //  onClick={()=>handleregister()}
            className="px-6 py-3 text-white text-[14px] font-semibold rounded-lg transition duration-300 ease-in-out bg-[#e74c3c] hover:bg-[#c0392b]"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
