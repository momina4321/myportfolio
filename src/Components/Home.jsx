import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me2 from '../assets/me2.JPG';
import { Link } from "react-scroll"; 
import Navbar from './NavBar';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';

const Home = () => {
  return (
    <div>
      <Navbar/>
  
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm a Web Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
           I have interest in new and emerging web development technologies. 
          Currently, I love to work on web application using technologies like
          React, Tailwind, Next.js and Mongodb.
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={me2}  
          alt="my profile"
          
          className="rounded-full"
        />
      </div>
    </div>
    </div>
    <About />
      <Skills />
      <Projects />
      <Contact />
  
  </div>
  );
};
export default Home;