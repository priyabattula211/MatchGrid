import React from 'react';
import { motion } from 'framer-motion';

const SportsGrid = () => {
  const sports = [
    { name: 'Football', emoji: '⚽', sessions: 24, players: 342, bg: 'from-green-500/20 to-emerald-900/20' },
    { name: 'Basketball', emoji: '🏀', sessions: 18, players: 156, bg: 'from-orange-500/20 to-red-900/20' },
    { name: 'Cricket', emoji: '🏏', sessions: 12, players: 180, bg: 'from-blue-500/20 to-indigo-900/20' },
    { name: 'Badminton', emoji: '🏸', sessions: 45, players: 90, bg: 'from-yellow-500/20 to-amber-900/20' },
    { name: 'Volleyball', emoji: '🏐', sessions: 8, players: 64, bg: 'from-cyan-500/20 to-blue-900/20' },
    { name: 'Kabaddi', emoji: '🏃‍♂️', sessions: 5, players: 35, bg: 'from-purple-500/20 to-fuchsia-900/20' }
  ];

  return (
    <section id="sports" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Play your <span className="text-accent-indigo">favorite sport</span>
            </motion.h2>
            <p className="text-text-secondary text-lg">Join active communities across multiple disciplines.</p>
          </div>
          <button className="mt-4 md:mt-0 text-accent-cyan font-medium hover:underline flex items-center gap-2">
            View All Sports <span>→</span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {sports.map((sport, idx) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className={`relative overflow-hidden rounded-2xl glass-panel p-6 flex flex-col justify-end min-h-[220px] bg-gradient-to-br ${sport.bg} group cursor-pointer border border-white/5`}
            >
              <div className="absolute -top-6 -right-6 text-9xl opacity-20 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
                {sport.emoji}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">{sport.name}</h3>
                <div className="flex items-center gap-4 text-xs font-medium text-text-secondary">
                  <span className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></div>
                    {sport.sessions} Sessions
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-indigo"></div>
                    {sport.players} Players
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsGrid;
