import React from 'react';
// buat import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';

// import link
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className="sticky bottom-2 lg:bottom-[50px] w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* {nav inner} */}
        <div
          className="w-full bg-black/20  backdrop-blur-2xl
        rounded-full max-w-[460px] mx-auto px-5 flex justify-between
        text-2xl text-white/50"
        >
          <Link smooth={true} to="home" activeClass='active' spy={true} offset={-200} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BiHomeAlt />
          </Link>
          <Link smooth={true} to="summary" activeClass='active' spy={true} offset={-50} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BiUser />
          </Link>
          <Link smooth={true} to="skill" activeClass='active' spy={true} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsClipboardData />
          </Link>
          <Link smooth={true} to="work" activeClass='active' spy={true} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsBriefcase />
          </Link>
          <Link smooth={true} to="contact" activeClass='active' spy={true} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
