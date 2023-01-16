import React from 'react';
import Hero from './Hero/Hero';
import Navbar from './Navbar';
import Services from './Services/Services';


export default function Home() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Services/>
    </>
  )
}
