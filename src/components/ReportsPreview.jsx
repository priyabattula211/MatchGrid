import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value, 10);
      if (start === end) return;
      
      const incrementTime = (duration / end) * 1000;
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
    }
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}</span>;
};

const ReportsPreview = () => {
  const chartBars = [30, 45, 20, 60, 80, 50, 95]; // Heights in percentage

  return (
    <section id="reports" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-indigo/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Measure every <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-indigo">performance</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-secondary text-lg mb-8 leading-relaxed"
            >
              Powerful analytics let you track your progress, measure facility usage, and understand community engagement. All visualized in real-time.
            </motion.p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Sessions Played', value: 1240, suffix: '+' },
                { label: 'Active Players', value: 850, suffix: '+' },
                { label: 'Weekly Matches', value: 145, suffix: '' },
                { label: 'Venues Partnered', value: 32, suffix: '' }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  <div className="text-3xl font-bold text-text-primary mb-1 flex">
                    <AnimatedCounter value={stat.value} />{stat.suffix}
                  </div>
                  <div className="text-sm text-text-secondary uppercase tracking-wider font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Chart Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-6 rounded-2xl border border-white/10 shadow-2xl relative"
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="font-semibold text-lg">Activity Overview</h3>
                <p className="text-xs text-text-secondary">Matches played over the last 7 days</p>
              </div>
              <div className="px-3 py-1 bg-white/5 rounded text-xs font-medium border border-white/10">This Week</div>
            </div>

            {/* Chart Area */}
            <div className="h-64 relative flex items-end justify-between gap-2 md:gap-4 pb-6 border-b border-white/10">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pb-6 pointer-events-none opacity-20">
                <div className="w-full border-t border-dashed border-white"></div>
                <div className="w-full border-t border-dashed border-white"></div>
                <div className="w-full border-t border-dashed border-white"></div>
                <div className="w-full border-t border-dashed border-white"></div>
              </div>

              {/* Bars */}
              {chartBars.map((height, idx) => (
                <div key={idx} className="relative w-full h-full flex items-end justify-center group">
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + (idx * 0.1), ease: "easeOut" }}
                    className={`w-full max-w-[40px] rounded-t-sm relative z-10 transition-colors ${
                      idx === 6 ? 'bg-gradient-to-t from-accent-cyan/80 to-accent-indigo/80 shadow-[0_0_15px_rgba(0,240,255,0.3)]' : 'bg-white/10 group-hover:bg-white/20'
                    }`}
                  ></motion.div>
                </div>
              ))}
            </div>
            
            {/* X Axis Labels */}
            <div className="flex justify-between mt-3 text-xs text-text-secondary px-2">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span className="text-accent-cyan font-semibold">Sun</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReportsPreview;
