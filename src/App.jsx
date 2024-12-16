import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import { FaArrowUp } from 'react-icons/fa'; // Importing Arrow Up Icon
import History from './History/History'
import Footer from './Footer/Footer'
import Organizers from './Organizers/Organizers'
import Rules from './Rules/Rules'
import Sponsors from './Sponsors/Sponsors'
import Winners from './Winners/Winners'
import Faq from './Faq/Faq'
import CompetitionFormat from './CompetitionFormat/CompetitionFormat'

function App() {
  const [showScroll, setShowScroll] = useState(false);

  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check scroll position and set showScroll accordingly
  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setShowScroll(true); // Show the button when scrolled more than 100px
    } else {
      setShowScroll(false); // Hide the button when less than 100px
    }
  };

  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener('scroll', checkScrollPosition);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    <>
    <Navbar />
    <Routes>
      <Route path={"/"} element={<Home />}/>
      <Route path="/history" element={<History />}/>
      <Route path={"/organizers"} element={<Organizers />}/>
      <Route path={"/rules"} element={<Rules />}/>
      <Route path={"/faq"} element={<Faq />}/>
      <Route path={"/competitionformat"} element={<CompetitionFormat />}/>

      

      <Route path={"/sponsors"} element={<Sponsors />}/>
      <Route path={"/winners"} element={<Winners />}/>


      



      


      
    </Routes>

    <Footer />

    {showScroll && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 p-3 bg-[#c5c3c3] text-black rounded-full shadow-lg hover:bg-black hover:text-white transition duration-300"
        title="Scroll to top"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    )}
    </>
  )
}

export default App
