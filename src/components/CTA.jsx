import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden border border-white/20 shadow-2xl bg-bg-secondary/40 backdrop-blur-xl"
        >
          {/* Animated Gradient Background inside the card */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 via-transparent to-accent-indigo/20 opacity-60"></div>
          
          {/* Glowing blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md bg-accent-cyan/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Ready to organize your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-indigo">next match?</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
              Join thousands of players and organizers who are already using MatchGrid to power their sports communities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent-cyan text-bg-primary font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(214,204,153,0.3)]">
                Start Scheduling
              </Link>
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-text-primary font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <Play className="w-5 h-5 fill-current" />
                View Live Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
