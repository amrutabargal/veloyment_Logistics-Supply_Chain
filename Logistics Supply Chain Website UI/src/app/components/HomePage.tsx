import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  ArrowRight, Package, Warehouse, Truck, MapPin, Users, Shield, Clock,
  TrendingUp, Play, Star, ChevronRight, Globe, Zap, BarChart3,
  CheckCircle, Plane, Ship
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

function AnimatedCounter({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-violet-500/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const services = [
    {
      icon: <Truck size={28} />,
      title: 'Freight Solutions',
      description: 'End-to-end freight management across air, sea, and ground transportation networks worldwide.',
      gradient: 'from-violet-600 to-indigo-600',
      shadowColor: 'shadow-violet-500/20',
    },
    {
      icon: <Warehouse size={28} />,
      title: 'Smart Warehousing',
      description: 'AI-powered storage facilities with automated inventory management and real-time monitoring.',
      gradient: 'from-blue-600 to-cyan-600',
      shadowColor: 'shadow-blue-500/20',
    },
    {
      icon: <Package size={28} />,
      title: 'Last-Mile Delivery',
      description: 'Lightning-fast delivery to your customers\' doorsteps with real-time tracking and proof of delivery.',
      gradient: 'from-amber-500 to-orange-600',
      shadowColor: 'shadow-amber-500/20',
    }
  ];

  const industries = [
    { name: 'E-Commerce', icon: <Package size={24} />, color: 'from-violet-600 to-purple-600' },
    { name: 'Manufacturing', icon: <Zap size={24} />, color: 'from-blue-600 to-indigo-600' },
    { name: 'Healthcare', icon: <Shield size={24} />, color: 'from-emerald-600 to-teal-600' },
    { name: 'Retail', icon: <BarChart3 size={24} />, color: 'from-amber-500 to-orange-600' },
    { name: 'Technology', icon: <Globe size={24} />, color: 'from-cyan-600 to-blue-600' },
    { name: 'Automotive', icon: <Truck size={24} />, color: 'from-rose-600 to-pink-600' }
  ];

  const processSteps = [
    { step: '01', title: 'Pickup', description: 'We collect your shipment from your location with real-time scheduling and confirmation.', icon: <MapPin size={24} />, color: 'from-violet-600 to-indigo-600' },
    { step: '02', title: 'Transit', description: 'Your goods are transported via the most efficient route with live GPS tracking.', icon: <Truck size={24} />, color: 'from-blue-600 to-cyan-600' },
    { step: '03', title: 'Delivery', description: 'Safe and timely delivery to the destination with digital proof of delivery.', icon: <Package size={24} />, color: 'from-amber-500 to-orange-600' }
  ];

  const testimonials = [
    {
      company: 'TechCorp Industries',
      quote: 'LogiFlow has completely transformed our supply chain operations. Their AI-powered platform gives us unprecedented visibility and control over every shipment.',
      author: 'Sarah Johnson',
      role: 'VP of Supply Chain',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      rating: 5
    },
    {
      company: 'Global Retail Co.',
      quote: 'Exceptional service and unmatched reliability. LogiFlow handles our complex multi-channel logistics with ease, reducing our costs by 35% in the first year.',
      author: 'Michael Chen',
      role: 'Chief Operations Officer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5
    },
    {
      company: 'MediSupply Solutions',
      quote: 'The real-time tracking and temperature-controlled transport have been absolute game-changers for our sensitive healthcare deliveries. Zero compromise on quality.',
      author: 'Dr. Emily Rodriguez',
      role: 'Director of Logistics',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const stats = [
    { value: 10, suffix: 'K+', label: 'Daily Shipments', icon: <Package size={20} /> },
    { value: 99, suffix: '.8%', label: 'On-Time Rate', icon: <Clock size={20} /> },
    { value: 50, suffix: '+', label: 'Countries', icon: <Globe size={20} /> },
    { value: 24, suffix: '/7', label: 'Live Support', icon: <Users size={20} /> }
  ];

  const clientLogos = ['Amazon', 'Walmart', 'Target', 'FedEx', 'DHL', 'UPS', 'Maersk', 'DB Schenker'];

  return (
    <div className="bg-[#030014]">
      {/* Hero Section with Video */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1672870152741-e526cfe5419b?w=1920&q=80"
        >
          <source src="https://videos.pexels.com/video-files/2800214/2800214-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
        <div className="absolute inset-0 hero-gradient" />
        <FloatingParticles />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8"
              >
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300">Trusted by 10,000+ businesses worldwide</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Global Logistics,
                <span className="block gradient-text mt-2">Reimagined.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                Enterprise-grade supply chain solutions powered by AI and cutting-edge technology.
                Move your business forward with confidence and speed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(139, 92, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate('contact')}
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center group shadow-[0_0_30px_rgba(139,92,246,0.3)]"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate('services')}
                  className="glass text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center group"
                >
                  <Play className="mr-2" size={20} />
                  Watch Demo
                </motion.button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-center sm:text-left"
                  >
                    <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 60 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-3xl blur-xl" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1672870152741-e526cfe5419b?w=800&q=80"
                    alt="Global Logistics Operations"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/80 via-transparent to-transparent" />
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 shadow-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                      <TrendingUp className="text-white" size={22} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>99.8%</div>
                      <div className="text-sm text-gray-400">On-Time Rate</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 glass rounded-2xl p-5 shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Globe className="text-white" size={18} />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">50+ Countries</div>
                      <div className="text-xs text-gray-400">Global Coverage</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030014] to-transparent" />
      </section>

      {/* Scrolling Client Logos */}
      <section className="py-16 border-y border-white/5 bg-[#030014] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-sm uppercase tracking-widest mb-10"
          >
            Trusted by the world&apos;s leading companies
          </motion.p>
          <div className="relative">
            <div className="flex items-center justify-center gap-12 md:gap-16 flex-wrap">
              {clientLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, color: '#a78bfa' }}
                  className="text-xl md:text-2xl text-gray-600 hover:text-violet-400 transition-all cursor-pointer font-bold"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {logo}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#030014] relative">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Logistics Solutions That <span className="gradient-text">Scale</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive, technology-driven logistics solutions designed to accelerate your business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-8 h-full card-hover relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full" />
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg ${service.shadowColor}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-violet-400 hover:text-violet-300 flex items-center group/btn font-medium text-sm"
                  >
                    Learn more
                    <ChevronRight className="ml-1 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Tracking CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-[#030014] to-indigo-900/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Real-Time Tracking</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Track Every Shipment in <span className="gradient-text-gold">Real-Time</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Get complete visibility of your cargo from pickup to delivery with our advanced AI-powered tracking technology and predictive ETAs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Enter tracking number..."
                  className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500/50 transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('tracking')}
                  className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold whitespace-nowrap shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all"
                >
                  Track Now
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-violet-600/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Tracking #TRK-89234</div>
                    <div className="text-xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>In Transit</div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center animate-pulse-glow">
                    <Truck className="text-white" size={22} />
                  </div>
                </div>
                <div className="space-y-5">
                  {[
                    { status: 'Picked up', location: 'Los Angeles, CA', done: true },
                    { status: 'In transit', location: 'Phoenix, AZ', done: true },
                    { status: 'Out for delivery', location: 'Dallas, TX', done: false }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${item.done ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-gray-600 border-2 border-gray-500'}`} />
                      <div className="flex-1">
                        <span className={`block text-sm ${item.done ? 'text-white' : 'text-gray-500'}`}>{item.status}</span>
                        <span className="text-xs text-gray-500">{item.location}</span>
                      </div>
                      {item.done && <CheckCircle size={16} className="text-emerald-500" />}
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">ETA: Feb 20, 2026</span>
                    <span className="text-emerald-400 font-medium">On Schedule</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-[#030014] relative">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Industries</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Serving Every <span className="gradient-text">Sector</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tailored logistics solutions for diverse industry verticals
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.08, y: -5 }}
                className="glass-card rounded-2xl p-6 text-center cursor-pointer group transition-all"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:shadow-lg transition-shadow`}>
                  {industry.icon}
                </div>
                <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{industry.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-violet-950/20 to-[#030014]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              How It <span className="gradient-text-gold">Works</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Seamless logistics in three simple steps
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-px bg-gradient-to-r from-violet-600/50 via-blue-600/50 to-amber-500/50 -translate-y-1/2" />
            <div className="grid md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="glass-card rounded-2xl p-8 text-center relative overflow-hidden card-hover">
                    <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br opacity-5 rounded-full" />
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto shadow-lg`}>
                      {step.icon}
                    </div>
                    <div className="text-5xl font-bold text-white/5 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Technology That <span className="gradient-text">Delivers</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Our proprietary AI platform optimizes every aspect of your supply chain, from route planning to warehouse management.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Zap size={20} />, title: 'AI-Powered Optimization', desc: 'Smart routing saves up to 30% on shipping costs' },
                  { icon: <Shield size={20} />, title: 'Enterprise Security', desc: 'Bank-grade encryption for all shipment data' },
                  { icon: <BarChart3 size={20} />, title: 'Real-Time Analytics', desc: 'Live dashboards with predictive insights' }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-3xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto"
                  poster="https://images.unsplash.com/photo-1770910195585-825a1181a704?w=800&q=80"
                >
                  <source src="https://videos.pexels.com/video-files/6169041/6169041-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#030014] relative">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`glass-card rounded-2xl p-8 card-hover relative overflow-hidden ${
                  activeTestimonial === index ? 'border-violet-500/30' : ''
                }`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-violet-600/5 rounded-bl-full" />
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-violet-500/30"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-violet-400 mt-0.5">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-[#030014] to-indigo-900/40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-3xl animate-blob" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Ready to Transform Your
              <span className="block gradient-text mt-2">Supply Chain?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join 10,000+ businesses that trust LogiFlow for their global logistics operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(139, 92, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('contact')}
                className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center group shadow-[0_0_30px_rgba(139,92,246,0.3)]"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('contact')}
                className="glass text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
