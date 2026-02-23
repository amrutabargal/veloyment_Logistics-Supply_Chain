import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Mail, Phone, MapPin, Clock, Send, Globe, Users, Award, Target,
  TrendingUp, CheckCircle, Loader2, ArrowRight, Linkedin, Twitter,
  Building2, Star, Shield, Zap, Calendar, Heart, Leaf
} from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export function AboutContactPage() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', company: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', company: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const stats = [
    { icon: <Globe size={28} />, value: 50, suffix: '+', label: 'Countries Served', gradient: 'from-violet-600 to-indigo-600' },
    { icon: <Users size={28} />, value: 5000, suffix: '+', label: 'Team Members', gradient: 'from-blue-600 to-cyan-600' },
    { icon: <TrendingUp size={28} />, value: 10, suffix: 'M+', label: 'Shipments/Year', gradient: 'from-amber-500 to-orange-600' },
    { icon: <Award size={28} />, value: 25, suffix: '+', label: 'Years Experience', gradient: 'from-emerald-600 to-teal-600' }
  ];

  const values = [
    { icon: <Target size={28} />, title: 'Customer First', description: 'We prioritize our clients\' needs and build long-term partnerships based on trust and transparency.', gradient: 'from-violet-600 to-indigo-600' },
    { icon: <Award size={28} />, title: 'Excellence', description: 'We maintain the highest standards in every aspect of our operations and service delivery globally.', gradient: 'from-blue-600 to-cyan-600' },
    { icon: <Zap size={28} />, title: 'Innovation', description: 'We leverage AI and cutting-edge technology to continuously improve our logistics solutions.', gradient: 'from-amber-500 to-orange-600' },
    { icon: <Leaf size={28} />, title: 'Sustainability', description: 'We are committed to reducing our environmental impact through eco-friendly logistics practices.', gradient: 'from-emerald-600 to-teal-600' }
  ];

  const teamMembers = [
    { name: 'Robert Chen', role: 'Chief Executive Officer', bio: 'Former McKinsey partner with 20+ years in global logistics. Led the company from startup to $2B revenue.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face', gradient: 'from-violet-600 to-indigo-600' },
    { name: 'Sarah Johnson', role: 'VP of Supply Chain', bio: 'Supply chain expert with experience at Amazon and FedEx. Architected our AI-powered routing system.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face', gradient: 'from-blue-600 to-cyan-600' },
    { name: 'David Park', role: 'Chief Technology Officer', bio: 'MIT CS graduate, former Google engineer. Leads our 200+ person engineering team building the LogiFlow platform.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face', gradient: 'from-emerald-600 to-teal-600' },
    { name: 'Dr. Emily Rodriguez', role: 'Head of AI & Analytics', bio: 'PhD in Machine Learning from Stanford. Pioneered our predictive delivery and demand forecasting algorithms.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face', gradient: 'from-amber-500 to-orange-600' },
    { name: 'Michael Torres', role: 'Chief Operations Officer', bio: '15 years in logistics operations across 30 countries. Manages our global fleet and warehouse network.', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face', gradient: 'from-rose-600 to-pink-600' },
    { name: 'Aisha Patel', role: 'VP of Client Success', bio: 'Customer experience leader from Salesforce. Maintains our industry-leading 98% client retention rate.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face', gradient: 'from-purple-600 to-violet-600' },
    { name: 'James Mitchell', role: 'CFO', bio: 'Goldman Sachs veteran managing $2B+ in revenue. Led our Series D funding of $450M and IPO preparation.', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face', gradient: 'from-indigo-600 to-blue-600' },
    { name: 'Lisa Wang', role: 'VP of Global Sales', bio: 'Grew our client base from 500 to 10,000+ companies. Previously led enterprise sales at Maersk.', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face', gradient: 'from-teal-600 to-cyan-600' }
  ];

  const milestones = [
    { year: '2001', title: 'Company Founded', description: 'LogiFlow started as a small freight forwarding company in Los Angeles with 12 employees.', icon: <Building2 size={20} /> },
    { year: '2005', title: 'National Expansion', description: 'Expanded to 10 warehouses across the US, serving 500+ businesses with ground freight services.', icon: <MapPin size={20} /> },
    { year: '2008', title: 'International Launch', description: 'Opened operations in Europe and Asia. Launched ocean freight and international air cargo services.', icon: <Globe size={20} /> },
    { year: '2012', title: 'Technology Platform', description: 'Built our proprietary logistics management platform with real-time tracking and analytics.', icon: <Zap size={20} /> },
    { year: '2015', title: '$100M Revenue', description: 'Crossed $100M annual revenue. Raised Series B of $75M to fuel technology and infrastructure growth.', icon: <TrendingUp size={20} /> },
    { year: '2018', title: 'AI Integration', description: 'Launched AI-powered route optimization and demand forecasting, reducing costs by 30% for clients.', icon: <Shield size={20} /> },
    { year: '2021', title: 'Global 50+ Countries', description: 'Expanded to 50+ countries with 5,000 employees. Processed over 5 million shipments annually.', icon: <Globe size={20} /> },
    { year: '2023', title: '$1B Milestone', description: 'Surpassed $1 billion in revenue. Named "Top 10 Logistics Company" by Supply Chain Digest.', icon: <Award size={20} /> },
    { year: '2025', title: 'Series D & IPO Prep', description: 'Raised $450M Series D. Launched EV fleet initiative targeting 50% electric vehicles by 2027.', icon: <TrendingUp size={20} /> },
    { year: '2026', title: 'Today', description: '$2B+ revenue, 10,000+ clients, 10M+ annual shipments. Leading the future of AI-powered logistics.', icon: <Star size={20} /> }
  ];

  const awards = [
    { title: 'Best Logistics Technology', org: 'Supply Chain Awards 2025', year: '2025', icon: <Award size={24} /> },
    { title: 'Top 10 Logistics Company', org: 'Supply Chain Digest', year: '2024', icon: <Star size={24} /> },
    { title: 'ISO 9001:2015 Certified', org: 'International Organization', year: '2023', icon: <Shield size={24} /> },
    { title: 'Green Supply Chain Award', org: 'Logistics Bureau', year: '2024', icon: <Leaf size={24} /> },
    { title: 'Best Workplace in Tech', org: 'Great Place to Work', year: '2025', icon: <Heart size={24} /> },
    { title: 'Innovation Award', org: 'World Logistics Forum', year: '2025', icon: <Zap size={24} /> }
  ];

  const offices = [
    { city: 'Los Angeles', country: 'USA (HQ)', address: '123 Logistics Blvd, Suite 500, LA, CA 90001', phone: '+1 (323) 555-0100', email: 'la@logiflow.com', timezone: 'PST (UTC-8)', employees: '800+', gradient: 'from-violet-600 to-indigo-600' },
    { city: 'New York', country: 'USA', address: '456 Supply Chain Ave, Floor 22, NY 10001', phone: '+1 (212) 555-0200', email: 'ny@logiflow.com', timezone: 'EST (UTC-5)', employees: '450+', gradient: 'from-blue-600 to-cyan-600' },
    { city: 'London', country: 'United Kingdom', address: '789 Freight Street, Canary Wharf, London E14 5AB', phone: '+44 20 7123 4567', email: 'london@logiflow.com', timezone: 'GMT (UTC+0)', employees: '600+', gradient: 'from-amber-500 to-orange-600' },
    { city: 'Singapore', country: 'Singapore', address: '321 Harbor Road, Marina Bay, Singapore 018956', phone: '+65 6123 4567', email: 'sg@logiflow.com', timezone: 'SGT (UTC+8)', employees: '350+', gradient: 'from-emerald-600 to-teal-600' },
    { city: 'Dubai', country: 'UAE', address: '555 Logistics Hub, JAFZA, Dubai', phone: '+971 4 555 6789', email: 'dubai@logiflow.com', timezone: 'GST (UTC+4)', employees: '200+', gradient: 'from-rose-600 to-pink-600' },
    { city: 'Shanghai', country: 'China', address: '888 Pudong Avenue, Shanghai 200120', phone: '+86 21 5555 6789', email: 'shanghai@logiflow.com', timezone: 'CST (UTC+8)', employees: '500+', gradient: 'from-purple-600 to-violet-600' }
  ];

  const serviceOptions = [
    'Freight Transportation',
    'Air Freight',
    'Ocean Freight',
    'Smart Warehousing',
    'Last-Mile Delivery',
    'Supply Chain Consulting',
    'Custom Solutions',
    'Other'
  ];

  return (
    <div className="bg-[#030014] pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-[#030014] to-indigo-900/30" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">About Us</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Powering Global
              <span className="block gradient-text mt-2">Commerce</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Innovative logistics solutions connecting businesses across continents since 2001.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                25 Years of <span className="gradient-text">Excellence</span>
              </h2>
              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p className="text-lg">
                  Founded in 2001, LogiFlow began with a simple mission: to make global logistics accessible,
                  efficient, and transparent for businesses of all sizes. What started as a small freight
                  forwarding company in Los Angeles with just 12 employees has grown into a $2 billion
                  supply chain powerhouse.
                </p>
                <p className="text-lg">
                  Over 25 years, we&apos;ve invested over $500 million in AI, automation, and infrastructure to build
                  one of the most advanced logistics networks in the industry. Our proprietary platform processes
                  over 10 million shipments annually with a 99.8% on-time delivery rate.
                </p>
                <p className="text-lg">
                  Today, LogiFlow operates in over 50 countries with 5,000+ dedicated professionals,
                  15,000+ vehicles, and 500+ strategically located warehouses. We serve 10,000+ businesses
                  from startups to Fortune 500 companies.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-3xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="LogiFlow Team" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-[#030014] to-indigo-900/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="glass-card rounded-2xl p-8 text-center card-hover">
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center text-white mx-auto mb-5 shadow-lg`}>{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}><AnimatedCounter end={stat.value} suffix={stat.suffix} /></div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 relative">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Leadership <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Meet the people driving innovation in global logistics</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="group">
                <div className="glass-card rounded-2xl overflow-hidden card-hover">
                  <div className="relative h-64 overflow-hidden">
                    <img src={member.avatar} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>{member.name}</h3>
                      <p className={`text-sm font-medium bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>{member.role}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>
                    <div className="flex gap-3">
                      <button className="w-8 h-8 glass rounded-lg flex items-center justify-center text-gray-500 hover:text-violet-400 transition-colors"><Linkedin size={14} /></button>
                      <button className="w-8 h-8 glass rounded-lg flex items-center justify-center text-gray-500 hover:text-violet-400 transition-colors"><Twitter size={14} /></button>
                      <button className="w-8 h-8 glass rounded-lg flex items-center justify-center text-gray-500 hover:text-violet-400 transition-colors"><Mail size={14} /></button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-violet-950/10 to-[#030014]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Core <span className="gradient-text">Principles</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">The values that drive everything we do across all operations</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="glass-card rounded-2xl p-8 card-hover">
                <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg`}>{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>{value.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 relative">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Our Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Company <span className="gradient-text-gold">Milestones</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">25 years of growth, innovation, and excellence</p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-violet-600 via-blue-600/50 to-gray-800" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`relative flex flex-col md:flex-row items-start gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`hidden md:block flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className={`glass-card rounded-xl p-5 card-hover inline-block ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                      <div className="text-violet-400 font-bold text-lg mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{milestone.year}</div>
                      <h3 className="text-white font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(139,92,246,0.4)] z-10">
                    {milestone.icon}
                  </div>

                  {/* Mobile version */}
                  <div className="md:hidden pl-14">
                    <div className="glass-card rounded-xl p-5 card-hover">
                      <div className="text-violet-400 font-bold text-lg mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{milestone.year}</div>
                      <h3 className="text-white font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-indigo-950/10 to-[#030014]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Recognition</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Awards & <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Recognized by industry leaders for our commitment to excellence</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className="glass-card rounded-2xl p-6 card-hover group">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-amber-500/20 transition-shadow">
                    {award.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{award.title}</h3>
                    <p className="text-gray-500 text-sm">{award.org}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Calendar size={12} className="text-gray-600" />
                      <span className="text-xs text-gray-600">{award.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network with Video */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Global Network</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Connecting <span className="gradient-text-gold">Continents</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-2xl overflow-hidden border border-white/10">
            <img src="https://images.unsplash.com/photo-1570106413982-7f2897b8d0c5?w=1200&q=80" alt="Global Network" className="w-full h-[400px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/40 to-transparent flex items-end">
              <div className="p-8 md:p-12 w-full">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { value: '500+', label: 'Warehouses' },
                    { value: '200+', label: 'Airports' },
                    { value: '500+', label: 'Ports' },
                    { value: '2,000+', label: 'Cities' }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{item.value}</div>
                      <div className="text-gray-400 text-sm">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">We&apos;re here to help with all your logistics needs</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Send Us a Message</h3>

              {submitSuccess && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                  <p className="text-emerald-400 text-sm">Message sent successfully! We&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">First Name *</label>
                    <input type="text" value={formData.firstName} onChange={(e) => handleChange('firstName', e.target.value)} className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition-all ${errors.firstName ? 'border-red-500 focus:ring-red-500/50' : 'border-white/10 focus:border-violet-500 focus:ring-violet-500/50'}`} placeholder="John" />
                    {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Last Name *</label>
                    <input type="text" value={formData.lastName} onChange={(e) => handleChange('lastName', e.target.value)} className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition-all ${errors.lastName ? 'border-red-500 focus:ring-red-500/50' : 'border-white/10 focus:border-violet-500 focus:ring-violet-500/50'}`} placeholder="Doe" />
                    {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email *</label>
                    <input type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition-all ${errors.email ? 'border-red-500 focus:ring-red-500/50' : 'border-white/10 focus:border-violet-500 focus:ring-violet-500/50'}`} placeholder="john@company.com" />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Phone</label>
                    <input type="tel" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500/50 transition-all" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Company</label>
                    <input type="text" value={formData.company} onChange={(e) => handleChange('company', e.target.value)} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500/50 transition-all" placeholder="Your Company Inc." />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Service Interested In</label>
                    <select value={formData.service} onChange={(e) => handleChange('service', e.target.value)} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500/50 transition-all appearance-none cursor-pointer">
                      <option value="" className="bg-[#0d0520]">Select a service...</option>
                      {serviceOptions.map((opt) => (<option key={opt} value={opt} className="bg-[#0d0520]">{opt}</option>))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message *</label>
                  <textarea rows={5} value={formData.message} onChange={(e) => handleChange('message', e.target.value)} className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition-all resize-none ${errors.message ? 'border-red-500 focus:ring-red-500/50' : 'border-white/10 focus:border-violet-500 focus:ring-violet-500/50'}`} placeholder="Tell us about your logistics needs, shipment volumes, and timeline..." />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>
                <motion.button whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)' }} whileTap={{ scale: 0.98 }} type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center group disabled:opacity-70 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  {isSubmitting ? (<><Loader2 size={20} className="animate-spin mr-2" /> Sending...</>) : (<>Send Message <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} /></>)}
                </motion.button>
              </form>
            </motion.div>

            {/* Office Locations */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our Global Offices</h3>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className="glass-card rounded-xl p-5 card-hover">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-9 h-9 bg-gradient-to-br ${office.gradient} rounded-lg flex items-center justify-center`}><MapPin className="text-white" size={16} /></div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{office.city}, {office.country}</h4>
                        <span className="text-xs text-gray-500">{office.timezone} &bull; {office.employees} employees</span>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-400 pl-12">
                      <div className="flex items-start gap-2"><MapPin className="text-violet-400 mt-0.5 flex-shrink-0" size={14} /><span>{office.address}</span></div>
                      <div className="flex items-center gap-2"><Phone className="text-violet-400 flex-shrink-0" size={14} /><span>{office.phone}</span></div>
                      <div className="flex items-center gap-2"><Mail className="text-violet-400 flex-shrink-0" size={14} /><span>{office.email}</span></div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Business Hours */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass rounded-xl p-6 mt-4 bg-gradient-to-br from-violet-600/10 to-indigo-600/10">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-violet-400" size={20} />
                  <h4 className="text-lg font-semibold text-white">Business Hours</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-400"><span>Monday - Friday:</span><span className="text-white">8:00 AM - 6:00 PM (Local Time)</span></div>
                  <div className="flex justify-between text-gray-400"><span>Saturday:</span><span className="text-white">9:00 AM - 2:00 PM</span></div>
                  <div className="flex justify-between text-gray-400"><span>Sunday:</span><span className="text-white">Closed</span></div>
                  <div className="pt-3 border-t border-white/10 mt-3">
                    <div className="flex items-center gap-2 text-emerald-400 text-sm">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      24/7 Emergency Support Available
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs mt-2">
                      <Phone size={12} /> Emergency Hotline: +1 (800) 555-LOGI (5644)
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-[#030014] to-indigo-900/40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl animate-blob" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Ready to Get <span className="gradient-text-gold">Started?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Let&apos;s discuss how LogiFlow can transform your supply chain operations.</p>
            <motion.div whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(139, 92, 246, 0.5)' }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link to="/contact" className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-[0_0_30px_rgba(139,92,246,0.3)] inline-flex items-center gap-2 group">
                Schedule a Consultation
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
