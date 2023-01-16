import React from 'react';
import Contact from './Contact/Contact';
import Experience from './Experience/Experience';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Navbar from './Navbar';
import Portfolio from './Portfolio/Portfolio';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';
import Works from './Works/Works';


export default function Home() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Services/>
        <Experience/>
        <Works/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </>
  )
}
