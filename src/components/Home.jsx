import React from 'react';
import Experience from './Experience/Experience';
import Hero from './Hero/Hero';
import Navbar from './Navbar';
import Services from './Services/Services';


export default function Home() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Services/>
        <Experience/>
    </>
  )
}
