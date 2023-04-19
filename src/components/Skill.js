import React from 'react';
// img
import Skill1 from '../assets/skill/skill1.png';
import Skill2 from '../assets/skill/skill2.png';
import Skill3 from '../assets/skill/skill3.png';
import Skill4 from '../assets/skill/skill4.png';
import Skill5 from '../assets/skill/skill5.png';
import Skill6 from '../assets/skill/skill6.png';
import Skill7 from '../assets/skill/skill7.png';
import Skill8 from '../assets/skill/skill8.png';
import Skill9 from '../assets/skill/skill9.png';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Services = () => {
  return (
    <section className="section w-full " id="skill">
      <div className="container mx-auto lg:flex lg:flex-row lg:items-center lg:justify-between">
        <div className="w-[100%] h2 leading-tight text-accent lg:text-[40px]">
          Skill <br /> I Have Learned.
        </div>
        <motion.div 
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true}}
        className='flex flex-wrap flex-row justify-center gap-x-10 gap-y-10 lg:gap-x-24'>
          <div className="group w-[120px] h-[117px] border-4 border-[#00f7ff] rounded-full p-7 shadow-[inset_0_0_15px_2px_#ffffff] hover:shadow-[inset_0_0_3px_2px_#ffffff] transition-all duration-500">
            <img className="object-fill group-hover:scale-125 transition-all duration-500" src={Skill1} alt="" />
          </div>
          <div className="group w-[120px] h-[117px] border-4 border-[#00f7ff] rounded-full p-7 shadow-[inset_0_0_15px_2px_#ffffff] hover:shadow-[inset_0_0_3px_2px_#ffffff] transition-all duration-500">
            <img className="object-fill group-hover:scale-125 transition-all duration-500" src={Skill2} alt="" />
          </div>
          <div className="group w-[120px] h-[117px] border-4 border-[#00f7ff] rounded-full p-7 shadow-[inset_0_0_15px_2px_#ffffff] hover:shadow-[inset_0_0_3px_2px_#ffffff] transition-all duration-500">
            <img className="object-fill group-hover:scale-125 transition-all duration-500" src={Skill3} alt="" />
          </div>
          <div className="group w-[120px] h-[117px] border-4 border-[#00f7ff] rounded-full p-7 shadow-[inset_0_0_15px_2px_#ffffff] hover:shadow-[inset_0_0_3px_2px_#ffffff] transition-all duration-500">
            <img className="object-fill group-hover:scale-125 transition-all duration-500" src={Skill4} alt="" />
          </div>
          <div className="group w-[120px] h-[117px] border-4 border-[#00f7ff] rounded-full p-7 shadow-[inset_0_0_15px_2px_#ffffff] hover:shadow-[inset_0_0_3px_2px_#ffffff] transition-all duration-500">
            <img className="object-fill group-hover:scale-125 transition-all duration-500" src={Skill5} alt="" />
          </div>
          <div className="group w-[120px] h-[117px] border-4 border-[#00f7ff] rounded-full p-7 shadow-[inset_0_0_15px_2px_#ffffff] hover:shadow-[inset_0_0_3px_2px_#ffffff] transition-all duration-500">
            <img className="object-fill group-hover:scale-125 transition-all duration-500" src={Skill6} alt="" />
          </div>
          <div className="group w-[120px] h-[117px] border-4 border-[#00f7ff] rounded-full p-7 shadow-[inset_0_0_15px_2px_#ffffff] hover:shadow-[inset_0_0_3px_2px_#ffffff] transition-all duration-500">
            <img className="object-fill group-hover:scale-125 transition-all duration-500" src={Skill7} alt="" />
          </div>
          <div className="group w-[120px] h-[117px] border-4 border-[#00f7ff] rounded-full p-7 shadow-[inset_0_0_15px_2px_#ffffff] hover:shadow-[inset_0_0_3px_2px_#ffffff] transition-all duration-500">
            <img className="object-fill group-hover:scale-125 transition-all duration-500" src={Skill8} alt="" />
          </div>
          <div className="group w-[120px] h-[117px] border-4 border-[#00f7ff] rounded-full p-7 shadow-[inset_0_0_15px_2px_#ffffff] hover:shadow-[inset_0_0_3px_2px_#ffffff] transition-all duration-500">
            <img className="object-fill group-hover:scale-125 transition-all duration-500" src={Skill9} alt="" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
