import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar as CalendarIcon, Users } from 'lucide-react';

const SessionsPreview = () => {
  const sessions = [
    {
      sport: 'Football',
      emoji: '⚽',
      title: '5v5 Casual Match',
      date: 'Today',
      time: '19:00 - 20:00',
      venue: 'Downtown Turf',
      slots: 2,
      totalSlots: 10
    },
    {
      sport: 'Basketball',
      emoji: '🏀',
      title: 'Pickup Game (Intermediate)',
      date: 'Tomorrow',
      time: '08:00 - 10:00',
      venue: 'Community Center',
      slots: 4,
      totalSlots: 10
    },
    {
      sport: 'Badminton',
      emoji: '🏸',
      title: 'Doubles Practice',
      date: 'Friday',
      time: '18:30 - 20:30',
      venue: 'Sports Hub Complex',
      slots: 1,
      totalSlots: 4
    }
  ];

  return (
    <section id="dashboard" className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Live <span className="text-accent-cyan">Sessions</span>
          </motion.h2>
          <p className="text-text-secondary text-lg">Join matches happening around you right now.</p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {sessions.map((session, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.5, type: 'spring' }}
              className="glass-panel p-5 rounded-2xl flex flex-col md:flex-row items-center gap-6 border-white/5 hover:border-accent-cyan/30 transition-colors"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl shrink-0">
                {session.emoji}
              </div>

              {/* Details */}
              <div className="flex-1 text-center md:text-left w-full">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white/10 text-text-secondary uppercase">
                    {session.sport}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3">{session.title}</h3>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-text-secondary">
                  <div className="flex items-center gap-1"><CalendarIcon className="w-4 h-4"/> {session.date}</div>
                  <div className="flex items-center gap-1"><Clock className="w-4 h-4"/> {session.time}</div>
                  <div className="flex items-center gap-1 text-accent-cyan"><MapPin className="w-4 h-4"/> {session.venue}</div>
                </div>
              </div>

              {/* Action */}
              <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto shrink-0">
                <div className="text-sm font-medium flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-accent-indigo" />
                  <span>{session.slots} slots left</span>
                  <span className="text-text-secondary">/ {session.totalSlots}</span>
                </div>
                <button className="w-full md:w-auto px-6 py-2.5 rounded-lg bg-accent-cyan text-bg-primary font-bold hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-shadow">
                  Join Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="text-text-secondary hover:text-text-primary transition-colors underline underline-offset-4">
            Browse all sessions
          </button>
        </div>
      </div>
    </section>
  );
};

export default SessionsPreview;
