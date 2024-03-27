import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const About = () => {
  return (
    <section className="section mt-24" id="summary">
      <div className="container mx-auto">
        <motion.div 
        variants={fadeIn('right', 0.3)} 
        initial="hidden" 
        whileInView={'show'}
        viewport={{ once: true }}        
        className="w-[100%] h2 text-center leading-tight text-accent lg:text-[40px] lg:text-left">
          Summary <br /> And Experience
        </motion.div>
        <motion.div 
        variants={fadeIn('up', 0.3)} 
        initial="hidden" 
        whileInView={'show'}
        viewport={{ once: true }}        
        className='lg:flex lg:flex-col-2'>
          <div className="md:p-1 p-2 text-lg lg:text-xl">
            <ol className="relative border-l ml-4">
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-accent rounded-full"></span>
                <h3 className="flex items-center mb-2 ml-2 font-semibold text-white">Mohammad Amirul Hamzah</h3>
                <time className="block mb-2 font-semibold leading-none text-accent ml-2">Student, Graphic Designer, Technology Staff of HMIF</time>
                <p className="mb-4 font-normal text-white ml-2 text-justify">
                  I'am an Undergraduate Informatics Student in University of Jember who is interested in Graphic Design, Video Editing, and Web Development. I can work as a team, and a hardworking person.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-accent rounded-full"></span>
                <h3 className="flex items-center mb-2 ml-2 font-semibold text-white">Bachelor in Informatics</h3>
                <time className="block mb-2 font-semibold leading-none text-accent ml-2">2022-2026 (Expected)</time>
                <p className="mb-4 font-normal text-white ml-2 text-justify">Course: Algorithms and Programming; Object-Oriented Programming; Discrete Mathematics; Linear Algebra; Software Development, and etc.</p>
              </li>
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-accent rounded-full"></span>
                <h3 className="flex items-center mb-2 ml-2 font-semibold text-white">Part of Informatics Student Association (HMIF)</h3>
                <time className="block mb-2 font-semibold leading-none text-accent ml-2">2022-2023 Periode</time>
                <p className="mb-4 font-normal text-white ml-2 text-justify">
                  I'am part of Informatics Student Association or also known as Himpunan Mahasiswa Informatika (HMIF) as a MEDIATEK or Media and Technology Division. My Jobdesk here is to provide and develop a good website to support the
                  needs of this organization.
                </p>
              </li>
            </ol>
          </div>
          <div className="md:p-1 p-2 text-lg lg:text-xl">
              <ol className="relative border-l ml-4">
                <li className="mb-10 ml-6">
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-accent rounded-full"></span>
                  <h3 className="flex items-center mb-2 ml-2 font-semibold text-white">Informatics Olympiad 2023 (I/O)</h3>
                  <time className="block mb-2 font-semibold leading-none text-accent ml-2">Coordinator of Publication and Documentation Division</time>
                  <p className="mb-4 font-normal text-white ml-2 text-justify">
                    I have a big responsibility in this event. I become the Coordinator, so it's mean i responsible for all of anything my members do. It needs a good teamwork and qualified skills in order to make this event succeed.
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-accent rounded-full"></span>
                  <h3 className="flex items-center mb-2 ml-2 font-semibold text-white">Informatics Charity Project 2023 (ICP)</h3>
                  <time className="block mb-2 font-semibold leading-none text-accent ml-2">Coordinator of Publication and Documentation Division</time>
                  <p className="mb-4 font-normal text-white ml-2 text-justify">Again, I become the Coordinator of Publication and Documentation Division, so it's my job to coordinate my staff to do the best and serve a good and nice graphic design (like poster, banner, and etc), so it will make people who see the poster want to do a charity.</p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-accent rounded-full"></span>
                  <h3 className="flex items-center mb-2 ml-2 font-semibold text-white">Informatics Competition 2023 (I-COM)</h3>
                  <time className="block mb-2 font-semibold leading-none text-accent ml-2">Staff of Publication and Documentation Division</time>
                  <p className="mb-4 font-normal text-white ml-2 text-justify">Slightly different from before, in this event i only became the staff of Publication and Documentation. But it doesn't mean it takes a lower responsibility. Still my job to make a good and nice graphic design and video to make people feel amazed.</p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-accent rounded-full"></span>
                  <h3 className="flex items-center mb-2 ml-2 font-semibold text-white">Informatics Connecting and Sharing 2023 (ICS)</h3>
                  <time className="block mb-2 font-semibold leading-none text-accent ml-2">Staff of Equipment & Logistics Division</time>
                  <p className="mb-4 font-normal text-white ml-2 text-justify">In this event, kinda different from the basic skills that I have. But it's still can improve my softskill in work as a team</p>
                </li>
              </ol>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
