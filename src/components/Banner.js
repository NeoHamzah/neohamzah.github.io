import React from 'react';
// images
import Image from '../assets/avatar.png';
// icons
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
// type animations
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// link
import { Link } from 'react-scroll';
// cv
import CV from '../assets/CV.pdf';

const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center mt-[50px] lg:mt-0" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1 
            variants={fadeIn('up', 0.3)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{ once: true }}
            className="text-[55px] font-bold leading-[0.8] lg:text-[100px]">
              NEOHAMZAH
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.3)} 
              initial="hidden" 
              whileInView={'show'}
              viewport={{ once: true }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary
            font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation sequence={['Student', 2000, 'Designer', 2000, 'Technology Staff of HMIF', 2000]} speed={50} className="text-[#0EB1DA]" wrapper="span" repeat={Infinity} />
            </motion.div>
            <motion.p 
            variants={fadeIn('up', 0.3)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{ once: true }}
            className="mb-8 max-w-max mx-auto lg:mx-0">
              Holla! I'am NeoHamzah A.K.A Moh Amirul Hamzah. I'am an Undergraduate Informatics Student in University of Jember who is interested in Graphic Design, Video Editing, and Web Development. I can work as a team, and a hardworking
              person.
            </motion.p>
            <motion.div 
            variants={fadeIn('up', 0.3)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{ once: true }}
            className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">
              <Link smooth={true} to="contact" className="cursor-pointer w-full h-full" offset={50}>
              Contact Me</Link>
              </button>
              <a href={CV} className="flex items-center text-white font-primary btn-link border border-[#15b2f0] h-[55px] rounded-xl p-5">
                Download My CV
              </a>
            </motion.div>
            {/* socials */}
            <motion.div 
            variants={fadeIn('up', 0.3)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{ once: true }}   
            className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-9">
              <a target='_blank' href="https://github.com/NeoHamzah/">
                <FaGithub />
              </a>
              <a target='_blank' href="https://www.linkedin.com/in/moh-amirul-hamzah-0a64531a0/">
                <FaLinkedin />
              </a>
              <a target='_blank' href="https://www.instagram.com/amirull.hamzah/">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div 
          variants={fadeIn('down', 0.3)} 
          initial="hidden" 
          whileInView={'show'}
          viewport={{ once: true }}     
          className="flex justify-center w-[200] lg:w-[482] order-first lg:order-last">
            <img src={Image} alt="Foto Hamzah" className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
