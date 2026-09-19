import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check, Copy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'UI/UX Design & Development',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please enter a project message.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Ready for integration with backend or email API
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', projectType: 'UI/UX Design & Development', message: '' });
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-28 relative bg-[#080808] border-t border-[#1F1F1F]">
      {/* Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#D4FF00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#D4FF00]"></span>
          <span className="text-xs font-mono tracking-widest text-[#D4FF00] uppercase font-semibold">08 // GET IN TOUCH</span>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight uppercase leading-none">
            LET'S BUILD SOMETHING.
          </h2>
          <p className="text-base text-gray-400 font-sans mt-3">
            Have an idea, project, or problem worth solving? Drop me a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Reach Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card */}
            <div className="p-6 rounded-3xl glass-card border border-white/10 hover:border-[#D4FF00]/50 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#D4FF00]/10 text-[#D4FF00]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase">DIRECT EMAIL</span>
                    <h4 className="text-sm font-heading font-bold text-white uppercase">SEND AN EMAIL</h4>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(portfolioData.personal.email, 'email')}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors"
                  title="Copy Email"
                  data-cursor="pointer"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-[#D4FF00]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="text-base sm:text-lg font-mono font-medium text-[#D4FF00] hover:underline break-all"
              >
                {portfolioData.personal.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl glass-card border border-white/10 hover:border-[#D4FF00]/50 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#D4FF00]/10 text-[#D4FF00]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase">PHONE / WHATSAPP</span>
                    <h4 className="text-sm font-heading font-bold text-white uppercase">CALL OR TEXT</h4>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(portfolioData.personal.phone, 'phone')}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors"
                  title="Copy Phone"
                  data-cursor="pointer"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-[#D4FF00]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <a
                href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`}
                className="text-base sm:text-lg font-mono font-medium text-white hover:text-[#D4FF00] transition-colors"
              >
                {portfolioData.personal.phone}
              </a>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-3xl glass-card border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#D4FF00]/10 text-[#D4FF00]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase">LOCATION</span>
                  <h4 className="text-sm font-heading font-bold text-white uppercase">PRIMARY BASE</h4>
                </div>
              </div>
              <p className="text-sm text-gray-300 font-sans leading-relaxed font-light pl-2">
                {portfolioData.personal.location}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl glass-card border border-white/10 space-y-6 relative overflow-hidden">
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#0C0C0C]/95 backdrop-blur-md z-20 flex flex-col items-center justify-center p-8 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#D4FF00] text-black flex items-center justify-center mb-4 accent-glow">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-heading font-extrabold text-white uppercase">MESSAGE SENT!</h3>
                    <p className="text-sm text-gray-300 mt-2 max-w-sm">
                      Thank you for reaching out, {formData.name || 'friend'}. I will review your message and reply promptly!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block">
                    YOUR NAME <span className="text-[#D4FF00]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border ${
                      errors.name ? 'border-rose-500' : 'border-white/10'
                    } text-white placeholder-gray-500 focus:outline-none focus:border-[#D4FF00] transition-colors text-sm font-sans`}
                  />
                  {errors.name && <span className="text-[11px] text-rose-400 font-mono">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block">
                    YOUR EMAIL <span className="text-[#D4FF00]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border ${
                      errors.email ? 'border-rose-500' : 'border-white/10'
                    } text-white placeholder-gray-500 focus:outline-none focus:border-[#D4FF00] transition-colors text-sm font-sans`}
                  />
                  {errors.email && <span className="text-[11px] text-rose-400 font-mono">{errors.email}</span>}
                </div>
              </div>

              {/* Project Type Select */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block">
                  PROJECT TYPE
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#121212] border border-white/10 text-white focus:outline-none focus:border-[#D4FF00] transition-colors text-sm font-sans"
                >
                  <option value="UI/UX Design & Development">UI/UX Design & Full Stack Build</option>
                  <option value="UI/UX Product Design Only">UI/UX Product Design Only</option>
                  <option value="Front-End Web Application">Front-End Web Application</option>
                  <option value="Full Stack System / API Integration">Full Stack System / API Integration</option>
                  <option value="Other Creative Collaboration">Other Creative Collaboration</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-300 uppercase tracking-wider block">
                  YOUR MESSAGE <span className="text-[#D4FF00]">*</span>
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project vision, timeline, or requirements..."
                  className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border ${
                    errors.message ? 'border-rose-500' : 'border-white/10'
                  } text-white placeholder-gray-500 focus:outline-none focus:border-[#D4FF00] transition-colors text-sm font-sans resize-none`}
                />
                {errors.message && <span className="text-[11px] text-rose-400 font-mono">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#D4FF00] text-black font-heading font-extrabold text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#c4ed00] transition-all accent-glow"
                data-cursor="pointer"
              >
                <span>SEND MESSAGE</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
