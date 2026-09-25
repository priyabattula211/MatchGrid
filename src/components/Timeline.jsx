import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const steps = [
    { num: '01', title: 'Create account', desc: 'Sign up in seconds and build your player profile.' },
    { num: '02', title: 'Choose sport', desc: 'Select from a wide variety of supported sports.' },
    { num: '03', title: 'Create session', desc: 'Set a time, venue, and rules for your match.' },
    { num: '04', title: 'Invite players', desc: 'Share the link or let others find your open slots.' },
    { num: '05', title: 'Play together', desc: 'Meet up, compete, and track your results.' }
  ];

  return (
    <section className="py-24 bg-bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            How it <span className="text-accent-cyan">works</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>

          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="flex flex-col items-center text-center flex-1"
              >
                <div className="w-16 h-16 rounded-full bg-bg-primary border-2 border-white/20 flex items-center justify-center text-xl font-bold text-accent-cyan mb-6 relative group transition-colors duration-300 hover:border-accent-cyan shadow-lg">
                  {step.num}
                  {/* Subtle pulse behind circle */}
                  <div className="absolute inset-0 rounded-full bg-accent-cyan/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
