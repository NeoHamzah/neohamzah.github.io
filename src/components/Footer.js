import React from 'react';
// images
import Logo from '../assets/logo.png';
// link
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="mb-0 mt-10">
      <div className='flex w-full bg-accent h-[50px] justify-center items-center rounded-xl'>
        <p>©Copyright 2023 | Made With Love | NeoHamzah</p>
      </div>
    </footer>
  );
};

export default Footer;
