import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Users, Activity, Play, Trophy, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      y: [0, -15, 0],
      transition: { delay: i * 0.2, duration: 4, repeat: Infinity, ease: 'easeInOut' },
    }));
  }, [controls]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent-indigo/20 rounded-full blur-[100px] animate-aurora"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[100px] animate-aurora" style={{ animationDelay: '-5s' }}></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
            <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">Sports Scheduling Platform</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Plan Matches. <br />
            Build Teams. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-indigo animate-gradient bg-[length:200%_auto]">
              Play Smarter.
            </span>
          </h1>
          
          <p className="text-lg text-text-secondary mb-10 max-w-lg leading-relaxed">
            MatchGrid is the ultimate platform to organize, join, and track your sports sessions. 
            Experience the future of competitive and casual play.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link to="/signup" className="px-8 py-4 rounded-xl bg-accent-cyan text-bg-primary font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(214,204,153,0.3)]">
              Get Started
            </Link>
            <button className="px-8 py-4 rounded-xl glass-panel text-text-primary font-semibold hover:bg-white/10 transition-colors flex items-center gap-2">
              <Play className="w-5 h-5 fill-current" />
              Explore Sessions
            </button>
          </div>

          <div className="mt-16 flex items-center gap-6">
            <div className="text-sm text-text-secondary font-medium">Trusted by athletes from</div>
            <div className="flex gap-4 opacity-50 grayscale">
              {/* Fake logos */}
              <div className="font-bold flex items-center gap-1"><Activity className="w-5 h-5"/> FITCLUB</div>
              <div className="font-bold flex items-center gap-1"><Trophy className="w-5 h-5"/> ELITE</div>
            </div>
          </div>
        </motion.div>

        {/* Right Content - 3D Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: -5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative perspective-[1000px] h-[500px]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Main Dashboard Card */}
          <div className="absolute inset-0 glass-panel rounded-2xl p-6 border border-white/20 shadow-2xl overflow-hidden transform rotate-x-6 rotate-y-[-10deg] hover:rotate-y-0 transition-transform duration-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent-cyan" />
                Upcoming Match
              </h3>
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
            </div>

            {/* Match Details */}
            <div className="bg-white/5 rounded-xl p-4 mb-4 border border-white/5">
              <div className="flex justify-between items-center mb-4 text-sm text-text-secondary">
                <span>Today, 8:00 PM</span>
                <span className="text-accent-cyan">Downtown Arena</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/50 mb-2">
                    T1
                  </div>
                  <span className="font-medium text-sm">Wildcats</span>
                </div>
                <div className="text-xl font-bold italic text-text-secondary">VS</div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/50 mb-2">
                    T2
                  </div>
                  <span className="font-medium text-sm">Spartans</span>
                </div>
              </div>
            </div>

            {/* Player Slots */}
            <div>
              <div className="flex justify-between text-xs text-text-secondary mb-2">
                <span>Player Slots (8/10)</span>
                <span className="text-accent-cyan">2 Spots Left</span>
              </div>
              <div className="flex gap-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                ))}
                {[...Array(2)].map((_, i) => (
                  <div key={i+8} className="w-8 h-8 rounded-full border border-dashed border-white/30 flex items-center justify-center">
                    <Users className="w-4 h-4 text-text-secondary" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div custom={1} animate={controls} className="absolute -top-10 -right-10 w-20 h-20 glass-panel rounded-full flex items-center justify-center border-accent-cyan/50 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
            <span className="text-3xl">⚽</span>
          </motion.div>
          <motion.div custom={2} animate={controls} className="absolute top-1/2 -left-12 w-16 h-16 glass-panel rounded-xl flex items-center justify-center border-accent-indigo/50 shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <span className="text-2xl">🏀</span>
          </motion.div>
          <motion.div custom={3} animate={controls} className="absolute -bottom-8 right-10 glass-panel rounded-lg p-3 text-sm font-medium flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-ping"></div>
            14 Active Sessions
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
