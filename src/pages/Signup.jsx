import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Signup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    fetch('/api/csrf')
      .then(res => res.json())
      .then(data => setCsrfToken(data.csrf))
      .catch(err => console.error('Failed to fetch CSRF token', err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.target);
    const fullName = `${formData.get('firstName')} ${formData.get('lastName')}`.trim();
    
    const data = new URLSearchParams();
    data.append('name', fullName);
    data.append('email', formData.get('email'));
    data.append('password', formData.get('password'));
    data.append('_csrf', csrfToken);

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data.toString()
      });
      const result = await res.json();
      if (res.ok) {
        if (import.meta.env.DEV && window.location.port === '5173') {
          window.location.href = 'http://localhost:3000' + result.redirect;
        } else {
          window.location.href = result.redirect;
        }
      } else {
        setError(result.error || 'Something went wrong.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary relative overflow-hidden px-6">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-accent-cyan/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-indigo/10 rounded-full blur-[100px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-panel p-10 rounded-3xl w-full max-w-md relative z-10 border border-white/10 shadow-2xl my-10"
      >
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent-cyan mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <h2 className="text-3xl font-bold mb-2">Create Account</h2>
        <p className="text-text-secondary mb-6">Join MatchGrid to start playing smarter.</p>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm">
            {error}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">First Name</label>
              <input 
                name="firstName"
                type="text" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-cyan transition-colors"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Last Name</label>
              <input 
                name="lastName"
                type="text" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-cyan transition-colors"
                placeholder="Doe"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Email Address</label>
            <input 
              name="email"
              type="email" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-cyan transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">Password</label>
            <input 
              name="password"
              type="password" 
              required
              minLength={12}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-cyan transition-colors"
              placeholder="••••••••"
            />
          </div>
          
          <div className="pt-2 pb-4">
            <label className="flex items-start gap-2 text-text-secondary cursor-pointer text-xs leading-relaxed">
              <input type="checkbox" className="rounded border-white/20 bg-white/5 text-accent-cyan focus:ring-accent-cyan/50 mt-1" required />
              I agree to the MatchGrid Terms of Service and Privacy Policy.
            </label>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-accent-cyan text-bg-primary font-bold hover:brightness-110 transition-all shadow-[0_0_15px_rgba(214,204,153,0.3)] disabled:opacity-70"
          >
            {loading ? 'Creating...' : 'Create Account'}
          </button>
        </form>

        <p className="text-center text-text-secondary mt-8 text-sm">
          Already have an account? <Link to="/login" className="text-accent-cyan hover:underline font-medium">Sign In</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
