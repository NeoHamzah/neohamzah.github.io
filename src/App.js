import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import Summary from './components/Summary';
import Skill from './components/Skill';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover'>
      <Header />
      <Banner />
      <Summary />
      <Skill />
      <Work />
      <Contact />
      <Nav />
      <Footer />
    </div>
  );
};

export default App;
