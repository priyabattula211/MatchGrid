import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Shield, Smartphone } from 'lucide-react';

const WhyMatchGrid = () => {
  const benefits = [
    { text: 'Lightning fast match creation', icon: <Zap className="w-5 h-5 text-accent-cyan" /> },
    { text: 'Automated reminders and notifications', icon: <CheckCircle2 className="w-5 h-5 text-accent-cyan" /> },
    { text: 'Secure payments and split bills', icon: <Shield className="w-5 h-5 text-accent-cyan" /> },
    { text: 'Mobile optimized experience', icon: <Smartphone className="w-5 h-5 text-accent-cyan" /> },
  ];

  return (
    <section className="py-24 bg-bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Premium Illustration Mockup */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square max-w-md mx-auto w-full"
        >
          {/* Abstract background shapes */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/20 to-accent-indigo/20 rounded-full blur-[80px]"></div>
          
          <div className="relative h-full w-full flex items-center justify-center">
            {/* Main glass ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-10 rounded-full border border-white/10 border-t-accent-cyan/50"
            ></motion.div>
            
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-20 rounded-full border border-white/10 border-b-accent-indigo/50"
            ></motion.div>

            {/* Center piece */}
            <div className="w-48 h-48 rounded-full glass-panel flex flex-col items-center justify-center text-center shadow-[0_0_50px_rgba(0,240,255,0.2)]">
              <span className="text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">M</span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-accent-cyan mt-2 font-semibold">MatchGrid System</span>
            </div>

            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -right-4 px-4 py-2 glass-panel rounded-lg text-xs font-semibold shadow-xl"
            >
              99.9% Uptime
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 -left-4 px-4 py-2 glass-panel rounded-lg text-xs font-semibold shadow-xl flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              System Active
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Benefits List */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Why choose <span className="text-accent-indigo">MatchGrid?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg mb-10 max-w-lg"
          >
            Built from the ground up for performance and reliability. We handle the logistics so you can focus on the game.
          </motion.p>

          <div className="space-y-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent-cyan/10 transition-colors">
                  {benefit.icon}
                </div>
                <span className="text-lg font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 px-8 py-3 rounded-xl border border-accent-indigo text-accent-indigo font-semibold hover:bg-accent-indigo hover:text-white transition-all shadow-[0_0_15px_rgba(99,102,241,0.2)]"
          >
            Learn more about our technology
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default WhyMatchGrid;
