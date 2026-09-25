import React from 'react';
import { motion } from 'framer-motion';
import { Target, CalendarDays, Users2, ShieldCheck, BarChart3, Medal } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Create Sports',
      description: 'Define your own sports, rules, and formats with complete flexibility.',
      icon: <Target className="w-6 h-6 text-accent-cyan" />,
      delay: 0.1
    },
    {
      title: 'Schedule Matches',
      description: 'Effortlessly plan and schedule upcoming matches with smart calendar integration.',
      icon: <CalendarDays className="w-6 h-6 text-accent-indigo" />,
      delay: 0.2
    },
    {
      title: 'Join Sessions',
      description: 'Browse active sessions and secure your spot in seconds.',
      icon: <Users2 className="w-6 h-6 text-accent-cyan" />,
      delay: 0.3
    },
    {
      title: 'Team Management',
      description: 'Organize rosters, assign roles, and track team performance over time.',
      icon: <Medal className="w-6 h-6 text-accent-indigo" />,
      delay: 0.4
    },
    {
      title: 'Reports & Analytics',
      description: 'Get deep insights into match stats, player performance, and venue usage.',
      icon: <BarChart3 className="w-6 h-6 text-accent-cyan" />,
      delay: 0.5
    },
    {
      title: 'Secure Authentication',
      description: 'Enterprise-grade security ensuring player data and payments are safe.',
      icon: <ShieldCheck className="w-6 h-6 text-accent-indigo" />,
      delay: 0.6
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-indigo">manage play</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto"
          >
            Powerful tools wrapped in a beautiful, intuitive interface. Designed for organizers and players alike.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative glass-panel rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]"
            >
              {/* Gradient Top Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-cyan to-accent-indigo opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>

              {/* Subtle hover glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
