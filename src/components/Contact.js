import React, { useRef } from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// emailJS
import emailjs from '@emailjs/browser';

const Contact = () => {
  // emailJSOpen
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
    'service_ogndvdm', 
    'template_529gy7j', 
    form.current, 
    '1LWbMqsrOodaDERxI')
      .then((result) => {
          console.log(result.text);
          alert('Message send successfully');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };  
  // emailJSClosed

  return (
    <section className="section pb-16 lg:selection" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: true}}
          className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">Have any question?</h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Send Me <br />
                a Message!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form 
          ref={form} onSubmit={sendEmail}
          variants={fadeIn('down', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: true}}          
          className="flex-1 border rounded-2xl flex flex-col gap-y-6
          pb-20 p-6 items-start mb-10">
            <input 
            name="user_name"
            type="text" 
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            placeholder='Your Name'
            />
            <input 
            name='user_email'
            type="email" 
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            placeholder='Your Email'
            />
            <textarea 
            name='message'
            cols="30" rows="7" className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' 
            placeholder='Your Message' ></textarea>
            <input type='submit' value='Send Message' className='btn btn-lg'></input>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
