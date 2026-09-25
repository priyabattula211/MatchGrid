import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'Amateur Tennis Player',
      text: "MatchGrid completely changed how I find tennis partners. Before this, coordinating schedules was a nightmare. Now I just browse active sessions and join one that fits my calendar.",
      initials: 'SJ'
    },
    {
      name: 'Marcus Chen',
      role: 'Football League Organizer',
      text: "Managing a local 5-a-side league used to take hours of spreadsheets. The automated scheduling and roster management on MatchGrid has saved me so much time and headache.",
      initials: 'MC'
    },
    {
      name: 'Priya Patel',
      role: 'Venue Manager',
      text: "Since partnering with MatchGrid, our turf utilization has gone up by 40%. The analytics dashboard helps us understand peak times and optimize our pricing perfectly.",
      initials: 'PP'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Loved by <span className="text-accent-cyan">players & organizers</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative h-[300px] md:h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <div className="glass-panel p-8 md:p-10 rounded-3xl h-full flex flex-col justify-center relative border border-white/10 shadow-2xl">
                  <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5" />
                  
                  <div className="flex gap-1 mb-6 text-accent-cyan">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 italic">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-cyan to-accent-indigo flex items-center justify-center font-bold text-bg-primary text-lg">
                      {testimonials[currentIndex].initials}
                    </div>
                    <div>
                      <div className="font-bold text-lg">{testimonials[currentIndex].name}</div>
                      <div className="text-sm text-text-secondary">{testimonials[currentIndex].role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-accent-cyan w-6' : 'bg-white/20'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
