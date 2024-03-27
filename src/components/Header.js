import React from 'react';
// images
import Logo from '../assets/logo.png';
// link
import { Link } from 'react-scroll';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Header = () => {
  return (
    <header className="py-8">
      <motion.div variants={fadeIn('down', 0.7)} initial="hidden" whileInView={'show'} viewport={{ once: true }} className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* {Logo} */}
          <a href="home">
            <img src={Logo} alt="Logo NeoHamzah" className="w-[60%]" />
          </a>
          {/* button */}
          <button className="btn btn-sm">
            <Link smooth={true} to="contact" className="cursor-pointer w-full h-full" offset={50}>
              Work With Me
            </Link>
          </button>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
