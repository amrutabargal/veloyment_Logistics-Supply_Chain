import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Zap, Mail, Phone, MapPin, ArrowRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const serviceLinks = [
    { label: 'Freight Transportation', path: '/services' },
    { label: 'Air Freight', path: '/services' },
    { label: 'Ocean Freight', path: '/services' },
    { label: 'Smart Warehousing', path: '/services' },
    { label: 'Last-Mile Delivery', path: '/services' },
    { label: 'Supply Chain', path: '/services' }
  ];

  const companyLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Careers', path: '/about' },
    { label: 'News & Media', path: '/about' },
    { label: 'Sustainability', path: '/about' },
    { label: 'Partners', path: '/about' },
    { label: 'Investors', path: '/about' }
  ];

  const resourceLinks = [
    { label: 'Tracking', path: '/tracking' },
    { label: 'Documentation', path: '/' },
    { label: 'API', path: '/' },
    { label: 'Support Center', path: '/contact' },
    { label: 'Case Studies', path: '/' },
    { label: 'Blog', path: '/' }
  ];

  return (
    <footer className="bg-[#020010] text-white relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-10" />

      {/* Newsletter */}
      <div className="relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="glass rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Stay <span className="gradient-text">Updated</span>
              </h3>
              <p className="text-gray-400 max-w-md">
                Get the latest logistics insights, industry news, and company updates delivered to your inbox.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500/50 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(139, 92, 246, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-[0_0_15px_rgba(139,92,246,0.3)] whitespace-nowrap"
              >
                Subscribe
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <div className="w-11 h-11 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                <Zap className="text-white" size={20} />
              </div>
              <span className="ml-3 text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Logi<span className="gradient-text">Flow</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              Leading the future of global logistics with AI-powered technology, reliable service,
              and an unwavering commitment to excellence.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Twitter size={18} />, label: 'Twitter' },
                { icon: <Linkedin size={18} />, label: 'LinkedIn' },
                { icon: <Instagram size={18} />, label: 'Instagram' },
                { icon: <Github size={18} />, label: 'GitHub' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-gray-400 hover:text-violet-400 hover:border-violet-500/30 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-5">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="text-gray-500 hover:text-violet-400 transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-5">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="text-gray-500 hover:text-violet-400 transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-5">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="text-gray-500 hover:text-violet-400 transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-3">
              <Mail className="text-violet-500 flex-shrink-0" size={18} />
              <span>info@logiflow.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-violet-500 flex-shrink-0" size={18} />
              <span>+1 (800) 555-0100</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-violet-500 flex-shrink-0" size={18} />
              <span>Los Angeles, CA 90001</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">&copy; 2026 LogiFlow. All rights reserved.</div>
            <div className="flex gap-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, i) => (
                <a key={i} href="#" className="text-gray-600 hover:text-violet-400 transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
