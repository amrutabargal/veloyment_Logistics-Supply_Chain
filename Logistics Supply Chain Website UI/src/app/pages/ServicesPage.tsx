import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Truck, Plane, Ship, Warehouse, Package, MapPin, Clock, Shield,
  DollarSign, Globe, Zap, CheckCircle, ArrowRight, ChevronRight,
  HelpCircle, TrendingUp, BarChart3, Users, Star, Award
} from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';

export function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    { icon: <Truck size={32} />, title: 'Freight Transportation', description: 'Comprehensive freight solutions across multiple modes of transport with real-time tracking and AI-optimized routing.', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80', gradient: 'from-violet-600 to-indigo-600', features: ['Full Truckload (FTL) and Less Than Truckload (LTL)', 'Temperature-controlled transport', 'Hazardous materials handling', 'Cross-border shipping solutions', 'Real-time GPS tracking', 'Dedicated fleet options'], benefits: [{ icon: <Clock size={18} />, text: 'On-time delivery guarantee' }, { icon: <Shield size={18} />, text: 'Comprehensive cargo insurance' }, { icon: <Globe size={18} />, text: 'Global coverage network' }] },
    { icon: <Plane size={32} />, title: 'Air Freight', description: 'Fast and reliable air cargo services for time-sensitive shipments with express and charter options.', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=800&q=80', gradient: 'from-blue-600 to-cyan-600', features: ['Express and standard air freight', 'Charter services for large shipments', 'Door-to-door delivery worldwide', 'Customs clearance support', 'Priority handling options', 'Pharmaceutical & perishables expertise'], benefits: [{ icon: <Zap size={18} />, text: 'Fastest delivery times' }, { icon: <Shield size={18} />, text: 'Secure handling protocols' }, { icon: <Globe size={18} />, text: '200+ airport connections' }] },
    { icon: <Ship size={32} />, title: 'Ocean Freight', description: 'Cost-effective sea freight solutions for large volume shipments across all major trade lanes.', image: 'https://images.unsplash.com/photo-1672870152741-e526cfe5419b?w=800&q=80', gradient: 'from-emerald-600 to-teal-600', features: ['Full Container Load (FCL) and LCL', 'Specialized container options (reefer, flat rack)', 'Port-to-port and door-to-door service', 'Container tracking system', 'Vessel scheduling & booking', 'Import/export documentation'], benefits: [{ icon: <DollarSign size={18} />, text: 'Most economical for bulk' }, { icon: <Shield size={18} />, text: 'Reliable global routes' }, { icon: <Globe size={18} />, text: '500+ port connections' }] },
    { icon: <Warehouse size={32} />, title: 'Smart Warehousing', description: 'AI-powered facilities with automated inventory management, fulfillment, and distribution services.', image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80', gradient: 'from-amber-500 to-orange-600', features: ['Climate-controlled storage zones', 'Real-time inventory tracking', 'Pick, pack and ship services', 'Order fulfillment automation', 'Kitting and assembly services', 'Returns management system'], benefits: [{ icon: <Shield size={18} />, text: '24/7 security monitoring' }, { icon: <Zap size={18} />, text: 'AI-automated systems' }, { icon: <MapPin size={18} />, text: 'Strategic global locations' }] },
    { icon: <Package size={32} />, title: 'Last-Mile Delivery', description: 'Lightning-fast delivery to end customers with real-time notifications and flexible delivery options.', image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=800&q=80', gradient: 'from-rose-600 to-pink-600', features: ['Same-day and next-day delivery', 'White glove delivery service', 'Proof of delivery with signature', 'Real-time delivery updates', 'Flexible delivery windows', 'Returns pickup service'], benefits: [{ icon: <Clock size={18} />, text: '2-hour delivery windows' }, { icon: <Shield size={18} />, text: 'Contactless delivery' }, { icon: <Zap size={18} />, text: 'AI route optimization' }] },
    { icon: <Globe size={32} />, title: 'Supply Chain Management', description: 'End-to-end supply chain optimization with AI-driven insights, consulting, and analytics.', image: 'https://images.unsplash.com/photo-1570106413982-7f2897b8d0c5?w=800&q=80', gradient: 'from-purple-600 to-violet-600', features: ['Supply chain consulting & strategy', 'Network design & optimization', 'Vendor management solutions', 'Demand planning & forecasting', 'Risk management framework', 'Performance analytics dashboard'], benefits: [{ icon: <DollarSign size={18} />, text: 'Up to 35% cost reduction' }, { icon: <Zap size={18} />, text: 'Efficiency improvements' }, { icon: <CheckCircle size={18} />, text: 'End-to-end visibility' }] }
  ];

  const coverageAreas = [
    { region: 'North America', countries: '3 countries', cities: '500+ cities', gradient: 'from-violet-600 to-indigo-600' },
    { region: 'Europe', countries: '27 countries', cities: '800+ cities', gradient: 'from-blue-600 to-cyan-600' },
    { region: 'Asia Pacific', countries: '15 countries', cities: '1000+ cities', gradient: 'from-emerald-600 to-teal-600' },
    { region: 'Latin America', countries: '8 countries', cities: '300+ cities', gradient: 'from-amber-500 to-orange-600' },
    { region: 'Middle East', countries: '6 countries', cities: '150+ cities', gradient: 'from-rose-600 to-pink-600' },
    { region: 'Africa', countries: '10 countries', cities: '200+ cities', gradient: 'from-purple-600 to-violet-600' }
  ];

  const caseStudies = [
    {
      company: 'TechCorp Industries',
      industry: 'Electronics Manufacturing',
      logo: 'TC',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
      challenge: 'Managing complex multi-tier supply chain across 12 countries with volatile demand patterns and a 15% late delivery rate.',
      solution: 'Implemented AI-driven demand forecasting, optimized warehouse placement, and real-time production-to-delivery tracking.',
      results: [
        { metric: '35%', label: 'Cost Reduction' },
        { metric: '99.2%', label: 'On-Time Rate' },
        { metric: '50%', label: 'Faster Fulfillment' },
        { metric: '$4.2M', label: 'Annual Savings' }
      ],
      quote: 'LogiFlow transformed our supply chain from a cost center into a competitive advantage.',
      author: 'Sarah Johnson, VP Supply Chain',
      gradient: 'from-violet-600 to-indigo-600'
    },
    {
      company: 'FreshFarm Organics',
      industry: 'Food & Beverage',
      logo: 'FF',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80',
      challenge: 'High spoilage rates (18%) in cold chain logistics across 500+ retail locations with inconsistent temperature monitoring.',
      solution: 'Deployed IoT-enabled temperature sensors, predictive analytics for shelf-life optimization, and automated routing for perishables.',
      results: [
        { metric: '60%', label: 'Less Spoilage' },
        { metric: '98.5%', label: 'Temp Compliance' },
        { metric: '28%', label: 'Cost Savings' },
        { metric: '2hr', label: 'Faster Delivery' }
      ],
      quote: 'Our spoilage rates dropped from 18% to under 7%. The ROI was immediate and dramatic.',
      author: 'Maria Santos, Logistics Manager',
      gradient: 'from-emerald-600 to-teal-600'
    },
    {
      company: 'NexGen Electronics',
      industry: 'E-Commerce',
      logo: 'NE',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
      challenge: 'Scaling from 1,000 to 50,000 daily orders while maintaining same-day delivery promise across 200 cities.',
      solution: 'Multi-warehouse fulfillment strategy with AI inventory allocation, dynamic routing, and automated last-mile operations.',
      results: [
        { metric: '50x', label: 'Order Scale-Up' },
        { metric: '96%', label: 'Same-Day Rate' },
        { metric: '42%', label: 'Lower Ship Cost' },
        { metric: '4.9★', label: 'Customer Rating' }
      ],
      quote: 'We went from 1K to 50K daily orders without missing a beat. LogiFlow made it possible.',
      author: 'David Park, CTO',
      gradient: 'from-amber-500 to-orange-600'
    }
  ];

  const technologyPartners = [
    { name: 'SAP', category: 'ERP' },
    { name: 'Oracle', category: 'Cloud' },
    { name: 'Salesforce', category: 'CRM' },
    { name: 'Shopify', category: 'E-Commerce' },
    { name: 'AWS', category: 'Infrastructure' },
    { name: 'Stripe', category: 'Payments' },
    { name: 'Twilio', category: 'Communications' },
    { name: 'Snowflake', category: 'Analytics' }
  ];

  const serviceFaqs = [
    { question: 'What is the minimum shipment size you handle?', answer: 'We handle shipments of all sizes, from single parcels to full container loads. Our LTL (Less Than Truckload) service is perfect for smaller shipments, starting from as little as 1 pallet or 100 lbs.' },
    { question: 'How do you handle temperature-sensitive goods?', answer: 'We offer a complete cold chain solution with IoT temperature sensors that monitor conditions 24/7. Our fleet includes reefer trucks, temperature-controlled warehouses, and insulated packaging. We maintain compliance with FDA, USDA, and international food safety standards.' },
    { question: 'What are your transit times for international shipments?', answer: 'Transit times vary by mode: Air freight is typically 1-5 days, ocean freight 15-45 days depending on the route, and ground freight within the continent is 2-7 days. Express options are available for urgent shipments with next-day delivery to 200+ cities worldwide.' },
    { question: 'Do you offer warehousing services with pick-and-pack?', answer: 'Yes, our smart warehousing includes full pick, pack, and ship services. We support B2B and B2C fulfillment with custom packaging, kitting, labeling, and quality inspection. Our facilities process over 500,000 orders per day across 50+ locations globally.' },
    { question: 'What certifications do your facilities have?', answer: 'Our facilities hold ISO 9001, ISO 14001, ISO 27001, C-TPAT, AEO, GDP (Good Distribution Practice), HACCP, and various industry-specific certifications. We undergo annual third-party audits to maintain the highest standards.' },
    { question: 'How does your pricing compare to competitors?', answer: 'Our AI-optimized routing and consolidated volume across 10,000+ clients allow us to offer rates 15-35% below market average. We offer transparent pricing with no hidden fees, volume discounts, and flexible contract terms. Request a custom quote for your specific needs.' }
  ];

  const serviceStats = [
    { icon: <Truck size={24} />, value: 15000, suffix: '+', label: 'Vehicles in Fleet', gradient: 'from-violet-600 to-indigo-600' },
    { icon: <Warehouse size={24} />, value: 500, suffix: '+', label: 'Warehouses', gradient: 'from-blue-600 to-cyan-600' },
    { icon: <Globe size={24} />, value: 50, suffix: '+', label: 'Countries', gradient: 'from-emerald-600 to-teal-600' },
    { icon: <Users size={24} />, value: 10, suffix: 'M+', label: 'Shipments/Year', gradient: 'from-amber-500 to-orange-600' }
  ];

  return (
    <div className="bg-[#030014] pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-[#030014] to-indigo-900/30" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Our Services</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Logistics Solutions<span className="block gradient-text mt-2">Built for Scale</span></h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">Comprehensive, technology-driven logistics solutions designed to help your business thrive in the global marketplace.</p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {serviceStats.map((stat, index) => (
              <div key={index} className="glass-card rounded-xl p-5 text-center">
                <div className={`w-10 h-10 bg-gradient-to-br ${stat.gradient} rounded-lg flex items-center justify-center text-white mx-auto mb-3`}>{stat.icon}</div>
                <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}><AnimatedCounter end={stat.value} suffix={stat.suffix} /></div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7 }} className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>{service.icon}</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-400 mb-8 leading-relaxed">{service.description}</p>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, fIdx) => (
                        <motion.div key={fIdx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: fIdx * 0.05 }} className="flex items-start gap-2">
                          <CheckCircle className="text-emerald-500 mt-0.5 flex-shrink-0" size={16} /><span className="text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Benefits</h3>
                    <div className="flex flex-wrap gap-3">
                      {service.benefits.map((b, bIdx) => (<div key={bIdx} className="flex items-center gap-2 glass-card px-4 py-2.5 rounded-xl"><div className="text-violet-400">{b.icon}</div><span className="text-gray-300 text-sm">{b.text}</span></div>))}
                    </div>
                  </div>
                  <motion.div whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)' }} whileTap={{ scale: 0.98 }}>
                    <Link to="/contact" className={`bg-gradient-to-r ${service.gradient} text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 group transition-all`}>Get Started <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} /></Link>
                  </motion.div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} className="relative group">
                    <div className={`absolute -inset-3 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-10 group-hover:opacity-20 blur-xl transition-opacity`} />
                    <div className="relative rounded-2xl overflow-hidden border border-white/10">
                      <img src={service.image} alt={service.title} className="w-full h-80 object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/60 to-transparent" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-violet-950/15 to-[#030014]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Case <span className="gradient-text-gold">Studies</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">See how we've helped businesses transform their logistics operations</p>
          </motion.div>
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass rounded-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img src={study.image} alt={study.company} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#030014]/80 lg:bg-gradient-to-r lg:from-transparent lg:to-[#0d0520]/90" />
                    <div className="absolute top-6 left-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${study.gradient} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg`} style={{ fontFamily: 'Montserrat, sans-serif' }}>{study.logo}</div>
                    </div>
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>{study.company}</h3>
                      <span className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">{study.industry}</span>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-violet-400 uppercase tracking-wide mb-2">Challenge</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wide mb-2">Solution</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                    <div className="grid grid-cols-4 gap-3 mb-6">
                      {study.results.map((r, ri) => (
                        <div key={ri} className="glass-card rounded-xl p-3 text-center">
                          <div className="text-lg font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>{r.metric}</div>
                          <div className="text-xs text-gray-400 mt-1">{r.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-white/10 pt-5">
                      <p className="text-gray-300 text-sm italic mb-2">&ldquo;{study.quote}&rdquo;</p>
                      <p className="text-xs text-gray-500">&mdash; {study.author}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-24 relative">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Global Reach</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Worldwide <span className="gradient-text">Coverage</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Strategic operations in major markets with established local partnerships</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageAreas.map((area, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="glass-card rounded-2xl p-6 card-hover group">
                <div className="flex items-center gap-3 mb-5"><div className={`w-11 h-11 bg-gradient-to-br ${area.gradient} rounded-xl flex items-center justify-center`}><MapPin className="text-white" size={20} /></div><h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>{area.region}</h3></div>
                <div className="space-y-3"><div className="flex justify-between"><span className="text-gray-400 text-sm">Coverage:</span><span className="text-white text-sm font-medium">{area.countries}</span></div><div className="flex justify-between"><span className="text-gray-400 text-sm">Cities Served:</span><span className="text-white text-sm font-medium">{area.cities}</span></div></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-indigo-950/10 to-[#030014]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Integrations</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Technology <span className="gradient-text">Partners</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Seamlessly connect with your existing tech stack</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologyPartners.map((partner, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} whileHover={{ scale: 1.05, y: -5 }} className="glass-card rounded-2xl p-6 text-center card-hover cursor-pointer group">
                <div className="text-2xl font-bold text-gray-400 group-hover:text-white transition-colors mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{partner.name}</div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">{partner.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQ */}
      <section className="py-24 bg-[#030014] relative">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Service <span className="gradient-text">Questions</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Answers to common questions about our logistics services</p>
          </motion.div>
          <div className="space-y-4">
            {serviceFaqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full glass-card rounded-xl p-5 text-left card-hover">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="text-violet-400 flex-shrink-0" size={20} />
                      <span className="text-white font-medium">{faq.question}</span>
                    </div>
                    <ChevronRight className={`text-gray-500 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-90' : ''}`} size={18} />
                  </div>
                  {openFaq === index && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }} className="mt-4 pl-8 pr-4">
                      <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-[#030014] to-indigo-900/40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl animate-blob" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Need a Custom <span className="gradient-text-gold">Solution?</span></h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Our logistics experts will design a tailored solution that fits your unique business requirements.</p>
            <motion.div whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(139, 92, 246, 0.5)' }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link to="/contact" className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-[0_0_30px_rgba(139,92,246,0.3)] inline-flex items-center gap-2 group">Request a Consultation <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} /></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
