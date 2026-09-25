import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Timeline from '../components/Timeline';
import SportsGrid from '../components/SportsGrid';
import SessionsPreview from '../components/SessionsPreview';
import ReportsPreview from '../components/ReportsPreview';
import WhyMatchGrid from '../components/WhyMatchGrid';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div className="bg-bg-primary min-h-screen text-text-primary overflow-x-hidden selection:bg-accent-cyan selection:text-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Timeline />
        <SportsGrid />
        <SessionsPreview />
        <ReportsPreview />
        <WhyMatchGrid />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
