import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Login = () => {
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
    const data = new URLSearchParams();
    data.append('email', formData.get('email'));
    data.append('password', formData.get('password'));
    data.append('_csrf', csrfToken);

    try {
      const res = await fetch('/api/login', {
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
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-indigo/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[100px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-panel p-10 rounded-3xl w-full max-w-md relative z-10 border border-white/10 shadow-2xl"
      >
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent-cyan mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
        <p className="text-text-secondary mb-6">Sign in to manage your sessions and teams.</p>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm">
            {error}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
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
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-cyan transition-colors"
              placeholder="••••••••"
            />
          </div>
          
          <div className="flex justify-between items-center text-sm mt-2 mb-6">
            <label className="flex items-center gap-2 text-text-secondary cursor-pointer">
              <input type="checkbox" className="rounded border-white/20 bg-white/5 text-accent-cyan focus:ring-accent-cyan/50" />
              Remember me
            </label>
            <a href="#" className="text-accent-cyan hover:underline">Forgot password?</a>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-accent-indigo text-bg-primary font-bold hover:brightness-110 transition-all disabled:opacity-70"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-text-secondary mt-8 text-sm">
          Don't have an account? <Link to="/signup" className="text-accent-cyan hover:underline font-medium">Get Started</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
