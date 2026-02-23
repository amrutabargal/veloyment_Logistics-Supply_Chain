import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { TrackingPage } from './pages/TrackingPage';
import { AboutContactPage } from './pages/AboutContactPage';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Zap } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#030014] flex items-center justify-center z-[9999]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 flex items-center justify-center shadow-[0_0_60px_rgba(139,92,246,0.5)]"
          >
            <Zap className="text-white" size={32} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            LogiFlow
          </motion.h1>
          <div className="w-48 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1/2 h-full bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030014] text-white">
      <ScrollToTop />
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/tracking" element={<TrackingPage />} />
            <Route path="/about" element={<AboutContactPage />} />
            <Route path="/contact" element={<AboutContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
