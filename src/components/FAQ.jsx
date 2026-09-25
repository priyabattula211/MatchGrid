import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "Is MatchGrid free to use?",
      answer: "Yes, creating an account and joining basic sessions is completely free. We offer premium features for organizers who want advanced analytics and automated payments."
    },
    {
      question: "How do payments work for paid sessions?",
      answer: "MatchGrid handles payments securely via Stripe. When you join a paid session, your card is charged, and the funds are held safely until the session completes."
    },
    {
      question: "Can I create a private session for my friends?",
      answer: "Absolutely! You can create private sessions and share a unique invite link. These won't appear on the public dashboard."
    },
    {
      question: "What happens if a match is cancelled?",
      answer: "If the organizer cancels a match, all joined players receive an immediate full refund automatically."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Frequently Asked <span className="text-accent-indigo">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-text-secondary transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-accent-cyan' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-text-secondary">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
