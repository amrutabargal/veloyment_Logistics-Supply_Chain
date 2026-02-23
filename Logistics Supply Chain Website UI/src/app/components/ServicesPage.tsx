import { motion } from 'motion/react';
import { Truck, Plane, Ship, Warehouse, Package, MapPin, Clock, Shield, DollarSign, Globe, Zap, CheckCircle, ArrowRight } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      icon: <Truck size={32} />,
      title: 'Freight Transportation',
      description: 'Comprehensive freight solutions across multiple modes of transport with real-time tracking and AI-optimized routing.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
      gradient: 'from-violet-600 to-indigo-600',
      features: [
        'Full Truckload (FTL) and Less Than Truckload (LTL)',
        'Temperature-controlled transport',
        'Hazardous materials handling',
        'Cross-border shipping solutions',
        'Real-time GPS tracking',
        'Dedicated fleet options'
      ],
      benefits: [
        { icon: <Clock size={18} />, text: 'On-time delivery guarantee' },
        { icon: <Shield size={18} />, text: 'Comprehensive cargo insurance' },
        { icon: <Globe size={18} />, text: 'Global coverage network' }
      ]
    },
    {
      icon: <Plane size={32} />,
      title: 'Air Freight',
      description: 'Fast and reliable air cargo services for time-sensitive shipments with express and charter options.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=800&q=80',
      gradient: 'from-blue-600 to-cyan-600',
      features: [
        'Express and standard air freight',
        'Charter services for large shipments',
        'Door-to-door delivery worldwide',
        'Customs clearance support',
        'Priority handling options',
        'Pharmaceutical & perishables expertise'
      ],
      benefits: [
        { icon: <Zap size={18} />, text: 'Fastest delivery times' },
        { icon: <Shield size={18} />, text: 'Secure handling protocols' },
        { icon: <Globe size={18} />, text: '200+ airport connections' }
      ]
    },
    {
      icon: <Ship size={32} />,
      title: 'Ocean Freight',
      description: 'Cost-effective sea freight solutions for large volume shipments across all major trade lanes.',
      image: 'https://images.unsplash.com/photo-1672870152741-e526cfe5419b?w=800&q=80',
      gradient: 'from-emerald-600 to-teal-600',
      features: [
        'Full Container Load (FCL) and LCL',
        'Specialized container options (reefer, flat rack)',
        'Port-to-port and door-to-door service',
        'Container tracking system',
        'Vessel scheduling & booking',
        'Import/export documentation'
      ],
      benefits: [
        { icon: <DollarSign size={18} />, text: 'Most economical for bulk' },
        { icon: <Shield size={18} />, text: 'Reliable global routes' },
        { icon: <Globe size={18} />, text: '500+ port connections' }
      ]
    },
    {
      icon: <Warehouse size={32} />,
      title: 'Smart Warehousing',
      description: 'AI-powered facilities with automated inventory management, fulfillment, and distribution services.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
      gradient: 'from-amber-500 to-orange-600',
      features: [
        'Climate-controlled storage zones',
        'Real-time inventory tracking',
        'Pick, pack and ship services',
        'Order fulfillment automation',
        'Kitting and assembly services',
        'Returns management system'
      ],
      benefits: [
        { icon: <Shield size={18} />, text: '24/7 security monitoring' },
        { icon: <Zap size={18} />, text: 'AI-automated systems' },
        { icon: <MapPin size={18} />, text: 'Strategic global locations' }
      ]
    },
    {
      icon: <Package size={32} />,
      title: 'Last-Mile Delivery',
      description: 'Lightning-fast delivery to end customers with real-time notifications and flexible delivery options.',
      image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=800&q=80',
      gradient: 'from-rose-600 to-pink-600',
      features: [
        'Same-day and next-day delivery',
        'White glove delivery service',
        'Proof of delivery with signature',
        'Real-time delivery updates',
        'Flexible delivery windows',
        'Returns pickup service'
      ],
      benefits: [
        { icon: <Clock size={18} />, text: '2-hour delivery windows' },
        { icon: <Shield size={18} />, text: 'Contactless delivery' },
        { icon: <Zap size={18} />, text: 'AI route optimization' }
      ]
    },
    {
      icon: <Globe size={32} />,
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain optimization with AI-driven insights, consulting, and analytics.',
      image: 'https://images.unsplash.com/photo-1570106413982-7f2897b8d0c5?w=800&q=80',
      gradient: 'from-purple-600 to-violet-600',
      features: [
        'Supply chain consulting & strategy',
        'Network design & optimization',
        'Vendor management solutions',
        'Demand planning & forecasting',
        'Risk management framework',
        'Performance analytics dashboard'
      ],
      benefits: [
        { icon: <DollarSign size={18} />, text: 'Up to 35% cost reduction' },
        { icon: <Zap size={18} />, text: 'Efficiency improvements' },
        { icon: <CheckCircle size={18} />, text: 'End-to-end visibility' }
      ]
    }
  ];

  const coverageAreas = [
    { region: 'North America', countries: '3 countries', cities: '500+ cities', gradient: 'from-violet-600 to-indigo-600' },
    { region: 'Europe', countries: '27 countries', cities: '800+ cities', gradient: 'from-blue-600 to-cyan-600' },
    { region: 'Asia Pacific', countries: '15 countries', cities: '1000+ cities', gradient: 'from-emerald-600 to-teal-600' },
    { region: 'Latin America', countries: '8 countries', cities: '300+ cities', gradient: 'from-amber-500 to-orange-600' },
    { region: 'Middle East', countries: '6 countries', cities: '150+ cities', gradient: 'from-rose-600 to-pink-600' },
    { region: 'Africa', countries: '10 countries', cities: '200+ cities', gradient: 'from-purple-600 to-violet-600' }
  ];

  return (
    <div className="bg-[#030014] pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-[#030014] to-indigo-900/30" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Our Services</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Logistics Solutions
              <span className="block gradient-text mt-2">Built for Scale</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive, technology-driven logistics solutions designed to help your business thrive in the global marketplace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? '' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                      {service.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-400 mb-8 leading-relaxed">{service.description}</p>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, fIdx) => (
                        <motion.div
                          key={fIdx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: fIdx * 0.05 }}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle className="text-emerald-500 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Benefits</h3>
                    <div className="flex flex-wrap gap-3">
                      {service.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 glass-card px-4 py-2.5 rounded-xl">
                          <div className="text-violet-400">{benefit.icon}</div>
                          <span className="text-gray-300 text-sm">{benefit.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    className={`bg-gradient-to-r ${service.gradient} text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 group transition-all`}
                  >
                    Get Started
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </motion.button>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="relative group"
                  >
                    <div className={`absolute -inset-3 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-10 group-hover:opacity-20 blur-xl transition-opacity`} />
                    <div className="relative rounded-2xl overflow-hidden border border-white/10">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/60 to-transparent" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Coverage */}
      <section className="py-24 relative">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Global Reach</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Worldwide <span className="gradient-text">Coverage</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Strategic operations in major markets with established local partnerships
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 card-hover group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-11 h-11 bg-gradient-to-br ${area.gradient} rounded-xl flex items-center justify-center`}>
                    <MapPin className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {area.region}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Coverage:</span>
                    <span className="text-white text-sm font-medium">{area.countries}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Cities Served:</span>
                    <span className="text-white text-sm font-medium">{area.cities}</span>
                  </div>
                </div>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Need a Custom <span className="gradient-text-gold">Solution?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Our logistics experts will design a tailored solution that fits your unique business requirements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(139, 92, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-[0_0_30px_rgba(139,92,246,0.3)] flex items-center gap-2 mx-auto group"
            >
              Request a Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
