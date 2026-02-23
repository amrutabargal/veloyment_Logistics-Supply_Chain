import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search, Package, MapPin, Truck, CheckCircle, Clock, AlertCircle,
  Loader2, Plane, BarChart3, Shield, Ship, Box, ArrowRight,
  Calendar, Weight, Ruler, Building2, Phone
} from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

const shipmentsDatabase: Record<string, {
  trackingNumber: string;
  status: string;
  statusColor: string;
  statusIcon: 'truck' | 'plane' | 'ship' | 'check' | 'clock';
  currentLocation: string;
  estimatedDelivery: string;
  origin: string;
  destination: string;
  carrier: string;
  weight: string;
  dimensions: string;
  service: string;
  pieces: number;
  progress: number;
  shippedDate: string;
  recipientName: string;
  senderName: string;
  timeline: { status: string; location: string; date: string; time: string; completed: boolean; current?: boolean; description: string }[];
}> = {
  'TRK-2024-89234': {
    trackingNumber: 'TRK-2024-89234',
    status: 'In Transit',
    statusColor: 'blue',
    statusIcon: 'truck',
    currentLocation: 'Phoenix Distribution Center, AZ',
    estimatedDelivery: 'February 20, 2026',
    origin: 'Los Angeles, CA',
    destination: 'Dallas, TX',
    carrier: 'LogiFlow Express',
    weight: '45 lbs',
    dimensions: '24" x 18" x 12"',
    service: 'Standard Freight',
    pieces: 3,
    progress: 65,
    shippedDate: 'February 18, 2026',
    recipientName: 'James Wilson',
    senderName: 'TechCorp Industries',
    timeline: [
      { status: 'Delivered', location: 'Dallas, TX', date: 'Feb 20, 2026', time: '10:30 AM', completed: false, description: 'Package will be delivered' },
      { status: 'Out for Delivery', location: 'Dallas Distribution Center, TX', date: 'Feb 20, 2026', time: '6:00 AM', completed: false, description: 'Package is out for delivery' },
      { status: 'In Transit', location: 'Phoenix Distribution Center, AZ', date: 'Feb 19, 2026', time: '2:15 PM', completed: true, current: true, description: 'Package arrived at facility' },
      { status: 'In Transit', location: 'Flagstaff Hub, AZ', date: 'Feb 19, 2026', time: '8:30 AM', completed: true, description: 'Package in transit' },
      { status: 'Departed', location: 'Los Angeles Warehouse, CA', date: 'Feb 18, 2026', time: '11:45 PM', completed: true, description: 'Package departed facility' },
      { status: 'Picked Up', location: 'Los Angeles, CA', date: 'Feb 18, 2026', time: '3:20 PM', completed: true, description: 'Package picked up from sender' }
    ]
  },
  'AIR-2024-45612': {
    trackingNumber: 'AIR-2024-45612',
    status: 'In Air Transit',
    statusColor: 'cyan',
    statusIcon: 'plane',
    currentLocation: 'Frankfurt Airport, Germany',
    estimatedDelivery: 'February 19, 2026',
    origin: 'Shanghai, China',
    destination: 'New York, NY',
    carrier: 'LogiFlow Air Cargo',
    weight: '120 lbs',
    dimensions: '48" x 36" x 24"',
    service: 'Express Air Freight',
    pieces: 5,
    progress: 55,
    shippedDate: 'February 16, 2026',
    recipientName: 'NexGen Electronics Inc.',
    senderName: 'Shenzhen Components Ltd.',
    timeline: [
      { status: 'Delivered', location: 'New York, NY', date: 'Feb 19, 2026', time: '4:00 PM', completed: false, description: 'Package will be delivered to recipient' },
      { status: 'Customs Clearance', location: 'JFK Airport, New York', date: 'Feb 19, 2026', time: '8:00 AM', completed: false, description: 'Package undergoing customs inspection' },
      { status: 'In Air Transit', location: 'Frankfurt Airport, Germany', date: 'Feb 18, 2026', time: '9:30 PM', completed: true, current: true, description: 'Stopover - connecting flight scheduled' },
      { status: 'Departed', location: 'Shanghai Pudong Airport, China', date: 'Feb 17, 2026', time: '11:00 PM', completed: true, description: 'Cargo loaded on flight CX-892' },
      { status: 'Security Check', location: 'Shanghai Cargo Terminal', date: 'Feb 17, 2026', time: '6:30 PM', completed: true, description: 'Security screening completed' },
      { status: 'Received', location: 'Shanghai Warehouse, China', date: 'Feb 16, 2026', time: '2:00 PM', completed: true, description: 'Cargo received at origin facility' },
      { status: 'Picked Up', location: 'Shenzhen, China', date: 'Feb 16, 2026', time: '9:15 AM', completed: true, description: 'Picked up from sender' }
    ]
  },
  'SEA-2024-78901': {
    trackingNumber: 'SEA-2024-78901',
    status: 'At Sea',
    statusColor: 'emerald',
    statusIcon: 'ship',
    currentLocation: 'Pacific Ocean (34.2°N, 140.5°W)',
    estimatedDelivery: 'March 8, 2026',
    origin: 'Tokyo, Japan',
    destination: 'Long Beach, CA',
    carrier: 'LogiFlow Ocean Line',
    weight: '18,500 lbs',
    dimensions: '40ft Container (FCL)',
    service: 'Full Container Load - Ocean',
    pieces: 1,
    progress: 40,
    shippedDate: 'February 10, 2026',
    recipientName: 'AutoParts Direct LLC',
    senderName: 'Yamato Manufacturing Co.',
    timeline: [
      { status: 'Delivered', location: 'Long Beach, CA', date: 'Mar 8, 2026', time: 'TBD', completed: false, description: 'Container to be delivered' },
      { status: 'Port Unloading', location: 'Port of Long Beach, CA', date: 'Mar 6, 2026', time: 'TBD', completed: false, description: 'Container to be unloaded' },
      { status: 'At Sea', location: 'Pacific Ocean', date: 'Feb 18, 2026', time: '12:00 PM', completed: true, current: true, description: 'Vessel MV Pacific Star - en route' },
      { status: 'Departed Port', location: 'Port of Yokohama, Japan', date: 'Feb 12, 2026', time: '6:00 AM', completed: true, description: 'Vessel departed port' },
      { status: 'Container Loaded', location: 'Yokohama Terminal, Japan', date: 'Feb 11, 2026', time: '3:45 PM', completed: true, description: 'Container loaded onto vessel' },
      { status: 'Customs Cleared', location: 'Tokyo Customs Office', date: 'Feb 11, 2026', time: '10:00 AM', completed: true, description: 'Export customs clearance completed' },
      { status: 'Received at Port', location: 'Port of Yokohama', date: 'Feb 10, 2026', time: '8:30 AM', completed: true, description: 'Container received at port' }
    ]
  },
  'TRK-2024-33567': {
    trackingNumber: 'TRK-2024-33567',
    status: 'Delivered',
    statusColor: 'emerald',
    statusIcon: 'check',
    currentLocation: 'Miami, FL',
    estimatedDelivery: 'February 17, 2026',
    origin: 'Atlanta, GA',
    destination: 'Miami, FL',
    carrier: 'LogiFlow Ground',
    weight: '22 lbs',
    dimensions: '18" x 14" x 10"',
    service: 'Priority Ground',
    pieces: 2,
    progress: 100,
    shippedDate: 'February 15, 2026',
    recipientName: 'Sandra Meyer',
    senderName: 'Global Retail Co.',
    timeline: [
      { status: 'Delivered', location: 'Miami, FL', date: 'Feb 17, 2026', time: '11:23 AM', completed: true, description: 'Delivered - Signed by S. Meyer' },
      { status: 'Out for Delivery', location: 'Miami Distribution Center, FL', date: 'Feb 17, 2026', time: '7:15 AM', completed: true, description: 'Package loaded on delivery vehicle' },
      { status: 'Arrived', location: 'Miami Distribution Center, FL', date: 'Feb 16, 2026', time: '10:45 PM', completed: true, description: 'Package arrived at local facility' },
      { status: 'In Transit', location: 'Jacksonville Hub, FL', date: 'Feb 16, 2026', time: '2:30 PM', completed: true, description: 'Package in transit to destination' },
      { status: 'Departed', location: 'Atlanta Warehouse, GA', date: 'Feb 15, 2026', time: '8:00 PM', completed: true, description: 'Package departed origin facility' },
      { status: 'Picked Up', location: 'Atlanta, GA', date: 'Feb 15, 2026', time: '4:10 PM', completed: true, description: 'Package picked up from sender' }
    ]
  },
  'TRK-2024-99821': {
    trackingNumber: 'TRK-2024-99821',
    status: 'Pending Pickup',
    statusColor: 'amber',
    statusIcon: 'clock',
    currentLocation: 'Chicago, IL',
    estimatedDelivery: 'February 24, 2026',
    origin: 'Chicago, IL',
    destination: 'Seattle, WA',
    carrier: 'LogiFlow Express',
    weight: '68 lbs',
    dimensions: '30" x 24" x 18"',
    service: 'Standard Ground',
    pieces: 4,
    progress: 5,
    shippedDate: 'February 18, 2026',
    recipientName: 'Pacific Coast Solutions',
    senderName: 'MidWest Manufacturing',
    timeline: [
      { status: 'Delivered', location: 'Seattle, WA', date: 'Feb 24, 2026', time: 'TBD', completed: false, description: 'Estimated delivery' },
      { status: 'In Transit', location: 'En Route', date: 'TBD', time: 'TBD', completed: false, description: 'Package will be in transit' },
      { status: 'Pending Pickup', location: 'Chicago, IL', date: 'Feb 18, 2026', time: '5:00 PM', completed: true, current: true, description: 'Pickup scheduled for today 5:00 PM' },
      { status: 'Label Created', location: 'Chicago, IL', date: 'Feb 18, 2026', time: '9:30 AM', completed: true, description: 'Shipping label created by sender' }
    ]
  }
};

const recentShipments = [
  { id: 'TRK-2024-89234', from: 'Los Angeles, CA', to: 'Dallas, TX', status: 'In Transit', date: 'Feb 18', type: 'Ground', statusColor: 'text-blue-400' },
  { id: 'AIR-2024-45612', from: 'Shanghai, CN', to: 'New York, NY', status: 'In Air', date: 'Feb 16', type: 'Air', statusColor: 'text-cyan-400' },
  { id: 'SEA-2024-78901', from: 'Tokyo, JP', to: 'Long Beach, CA', status: 'At Sea', date: 'Feb 10', type: 'Ocean', statusColor: 'text-emerald-400' },
  { id: 'TRK-2024-33567', from: 'Atlanta, GA', to: 'Miami, FL', status: 'Delivered', date: 'Feb 15', type: 'Ground', statusColor: 'text-emerald-400' },
  { id: 'TRK-2024-99821', from: 'Chicago, IL', to: 'Seattle, WA', status: 'Pending', date: 'Feb 18', type: 'Ground', statusColor: 'text-amber-400' },
  { id: 'AIR-2024-11234', from: 'London, UK', to: 'Dubai, UAE', status: 'Delivered', date: 'Feb 14', type: 'Air', statusColor: 'text-emerald-400' },
  { id: 'TRK-2024-55678', from: 'Berlin, DE', to: 'Paris, FR', status: 'Delivered', date: 'Feb 12', type: 'Ground', statusColor: 'text-emerald-400' },
  { id: 'SEA-2024-22345', from: 'Sydney, AU', to: 'Singapore', status: 'At Sea', date: 'Feb 8', type: 'Ocean', statusColor: 'text-emerald-400' }
];

const statusColorMap: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
};

const statusIconMap = {
  truck: <Truck size={18} />,
  plane: <Plane size={18} />,
  ship: <Ship size={18} />,
  check: <CheckCircle size={18} />,
  clock: <Clock size={18} />
};

export function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [activeTracking, setActiveTracking] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);

  const trackingData = activeTracking ? shipmentsDatabase[activeTracking] : null;

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      setIsTracking(true);
      setShowResults(false);
      setNotFound(false);
      setTimeout(() => {
        setIsTracking(false);
        const key = trackingNumber.trim().toUpperCase();
        if (shipmentsDatabase[key]) {
          setActiveTracking(key);
          setShowResults(true);
        } else {
          setNotFound(true);
        }
      }, 2000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleTrack();
  };

  const handleQuickTrack = (id: string) => {
    setTrackingNumber(id);
    setIsTracking(true);
    setShowResults(false);
    setNotFound(false);
    setTimeout(() => {
      setIsTracking(false);
      setActiveTracking(id);
      setShowResults(true);
    }, 1500);
  };

  return (
    <div className="bg-[#030014] pt-20 min-h-screen">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-[#030014] to-indigo-900/30" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Shipment Tracking</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Track Your
              <span className="block gradient-text-gold mt-2">Shipment</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Get real-time updates on your cargo&apos;s journey with our AI-powered tracking system.
            </p>

            {/* Tracking Input */}
            <div className="max-w-3xl mx-auto">
              <div className="glass rounded-2xl p-3 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type="text"
                      placeholder="Enter tracking number (e.g., TRK-2024-89234)"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500/50 transition-all"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleTrack}
                    disabled={isTracking || !trackingNumber.trim()}
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white px-8 py-4 rounded-xl font-semibold whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all flex items-center justify-center gap-2"
                  >
                    {isTracking ? (
                      <><Loader2 size={20} className="animate-spin" /> Tracking...</>
                    ) : (
                      'Track Package'
                    )}
                  </motion.button>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <span className="text-gray-500 text-sm">Try:</span>
                {Object.keys(shipmentsDatabase).map((id) => (
                  <button key={id} onClick={() => handleQuickTrack(id)} className="text-violet-400 hover:text-violet-300 text-sm underline underline-offset-2 transition-colors">
                    {id}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Not Found */}
      <AnimatePresence>
        {notFound && (
          <section className="pb-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="glass rounded-2xl p-8 border-red-500/20 text-center">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="text-red-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Tracking Number Not Found</h3>
                <p className="text-gray-400 mb-4">We couldn&apos;t find a shipment with the tracking number &ldquo;{trackingNumber}&rdquo;. Please check the number and try again.</p>
                <p className="text-gray-500 text-sm">Try one of the sample numbers above to see a demo.</p>
              </motion.div>
            </div>
          </section>
        )}
      </AnimatePresence>

      {/* Results */}
      <AnimatePresence>
        {showResults && trackingData && (
          <section className="pb-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.6 }}>
                {/* Status Card */}
                <div className="glass rounded-2xl p-6 md:p-8 mb-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Tracking Number</div>
                      <div className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {trackingData.trackingNumber}
                      </div>
                      <div className={`inline-flex items-center gap-2 border px-4 py-2 rounded-xl ${statusColorMap[trackingData.statusColor]}`}>
                        {statusIconMap[trackingData.statusIcon]}
                        <span className="text-sm font-medium">{trackingData.status}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 mb-1">Estimated Delivery</div>
                      <div className="text-2xl font-bold gradient-text-gold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {trackingData.estimatedDelivery}
                      </div>
                      <div className="text-sm text-gray-400 flex items-center gap-1 justify-end">
                        <MapPin size={14} />
                        {trackingData.currentLocation}
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-xs text-gray-500 mb-2">
                      <span>{trackingData.origin}</span>
                      <span>{trackingData.destination}</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${trackingData.progress}%` }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full relative"
                      >
                        {trackingData.progress < 100 && (
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-violet-500 rounded-full border-2 border-white shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                        )}
                      </motion.div>
                    </div>
                    <div className="text-right mt-1"><span className="text-xs text-gray-500">{trackingData.progress}% complete</span></div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-white/5">
                    {[
                      { label: 'Origin', value: trackingData.origin, icon: <MapPin size={14} className="text-violet-400" /> },
                      { label: 'Destination', value: trackingData.destination, icon: <MapPin size={14} className="text-violet-400" /> },
                      { label: 'Weight', value: trackingData.weight, icon: <Weight size={14} className="text-violet-400" /> },
                      { label: 'Dimensions', value: trackingData.dimensions, icon: <Ruler size={14} className="text-violet-400" /> }
                    ].map((item, i) => (
                      <div key={i} className="glass-card rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-1">{item.icon}<span className="text-xs text-gray-500">{item.label}</span></div>
                        <div className="text-white font-medium text-sm">{item.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Extra Details */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    {[
                      { label: 'Carrier', value: trackingData.carrier, icon: <Truck size={14} className="text-violet-400" /> },
                      { label: 'Service Type', value: trackingData.service, icon: <Box size={14} className="text-violet-400" /> },
                      { label: 'Pieces', value: `${trackingData.pieces} package${trackingData.pieces > 1 ? 's' : ''}`, icon: <Package size={14} className="text-violet-400" /> },
                      { label: 'Shipped Date', value: trackingData.shippedDate, icon: <Calendar size={14} className="text-violet-400" /> }
                    ].map((item, i) => (
                      <div key={i} className="glass-card rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-1">{item.icon}<span className="text-xs text-gray-500">{item.label}</span></div>
                        <div className="text-white font-medium text-sm">{item.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Sender/Recipient */}
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="glass-card rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2"><Building2 size={14} className="text-violet-400" /><span className="text-xs text-gray-500">Sender</span></div>
                      <div className="text-white font-medium text-sm">{trackingData.senderName}</div>
                      <div className="text-xs text-gray-500 mt-1">{trackingData.origin}</div>
                    </div>
                    <div className="glass-card rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2"><Building2 size={14} className="text-violet-400" /><span className="text-xs text-gray-500">Recipient</span></div>
                      <div className="text-white font-medium text-sm">{trackingData.recipientName}</div>
                      <div className="text-xs text-gray-500 mt-1">{trackingData.destination}</div>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="glass rounded-2xl p-6 md:p-8 mb-8">
                  <h2 className="text-xl font-bold text-white mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Shipment Timeline
                  </h2>
                  <div className="relative">
                    <div className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-violet-600 via-blue-600/30 to-gray-800" />
                    <div className="space-y-6">
                      {trackingData.timeline.map((event, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="relative pl-12"
                        >
                          <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${
                            event.completed
                              ? event.current
                                ? 'bg-gradient-to-br from-violet-500 to-indigo-600 animate-pulse shadow-[0_0_12px_rgba(139,92,246,0.5)]'
                                : 'bg-gradient-to-br from-emerald-500 to-teal-600 shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                              : 'bg-gray-800 border border-gray-700'
                          }`}>
                            {event.completed ? (
                              event.current ? <Truck className="text-white" size={14} /> : <CheckCircle className="text-white" size={14} />
                            ) : (
                              <Clock className="text-gray-500" size={14} />
                            )}
                          </div>

                          <div className={`glass-card rounded-xl p-5 ${
                            event.current ? 'border-violet-500/30 bg-violet-500/5' : ''
                          } ${!event.completed && !event.current ? 'opacity-50' : ''}`}>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                              <h3 className="text-white font-semibold">{event.status}</h3>
                              <span className="text-xs text-gray-500">{event.date} at {event.time}</span>
                            </div>
                            <div className="text-sm text-gray-400 flex items-center gap-1 mb-1">
                              <MapPin size={12} /> {event.location}
                            </div>
                            <div className="text-sm text-gray-500">{event.description}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Help */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass rounded-2xl p-6 border-amber-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Need Help with Your Shipment?</h3>
                      <p className="text-gray-400 mb-4 text-sm">
                        Our customer support team is available 24/7 to assist you with any questions or concerns about your delivery.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2.5 rounded-xl font-medium text-sm shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all inline-flex items-center gap-2">
                          <Phone size={16} /> Contact Support
                        </button>
                        <button className="glass text-white px-6 py-2.5 rounded-xl font-medium text-sm hover:bg-white/10 transition-all">
                          Report an Issue
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        )}
      </AnimatePresence>

      {/* Default Content (no results) */}
      {!showResults && !isTracking && !notFound && (
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Tracking Stats */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {[
                { icon: <Package size={24} />, value: 10847, suffix: '', label: 'Active Shipments', gradient: 'from-violet-600 to-indigo-600' },
                { icon: <Truck size={24} />, value: 99, suffix: '.8%', label: 'On-Time Delivery', gradient: 'from-emerald-600 to-teal-600' },
                { icon: <MapPin size={24} />, value: 50, suffix: '+', label: 'Countries Tracked', gradient: 'from-blue-600 to-cyan-600' },
                { icon: <Clock size={24} />, value: 2, suffix: ' sec', label: 'Avg. Update Time', gradient: 'from-amber-500 to-orange-600' }
              ].map((stat, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="glass-card rounded-2xl p-6 text-center card-hover">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center text-white mx-auto mb-4`}>{stat.icon}</div>
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}><AnimatedCounter end={stat.value} suffix={stat.suffix} /></div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Recent Shipments */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Recent <span className="gradient-text">Shipments</span>
                </h2>
                <p className="text-gray-400">Click on any shipment to track it in real-time</p>
              </div>
              <div className="glass rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-xs text-gray-500 uppercase tracking-wider px-6 py-4 font-medium">Tracking ID</th>
                        <th className="text-left text-xs text-gray-500 uppercase tracking-wider px-6 py-4 font-medium">From</th>
                        <th className="text-left text-xs text-gray-500 uppercase tracking-wider px-6 py-4 font-medium">To</th>
                        <th className="text-left text-xs text-gray-500 uppercase tracking-wider px-6 py-4 font-medium">Type</th>
                        <th className="text-left text-xs text-gray-500 uppercase tracking-wider px-6 py-4 font-medium">Date</th>
                        <th className="text-left text-xs text-gray-500 uppercase tracking-wider px-6 py-4 font-medium">Status</th>
                        <th className="text-left text-xs text-gray-500 uppercase tracking-wider px-6 py-4 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {recentShipments.map((shipment, index) => (
                        <motion.tr
                          key={shipment.id}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="hover:bg-white/5 transition-colors cursor-pointer group"
                          onClick={() => {
                            if (shipmentsDatabase[shipment.id]) handleQuickTrack(shipment.id);
                          }}
                        >
                          <td className="px-6 py-4 text-sm font-medium text-violet-400">{shipment.id}</td>
                          <td className="px-6 py-4 text-sm text-gray-300">{shipment.from}</td>
                          <td className="px-6 py-4 text-sm text-gray-300">{shipment.to}</td>
                          <td className="px-6 py-4"><span className="text-xs bg-white/5 text-gray-300 px-2.5 py-1 rounded-full">{shipment.type}</span></td>
                          <td className="px-6 py-4 text-sm text-gray-500">{shipment.date}</td>
                          <td className="px-6 py-4"><span className={`text-sm font-medium ${shipment.statusColor}`}>{shipment.status}</span></td>
                          <td className="px-6 py-4"><ArrowRight size={16} className="text-gray-600 group-hover:text-violet-400 transition-colors" /></td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Real-Time Tracking <span className="gradient-text">Features</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Stay informed every step of the way with our advanced tracking technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <MapPin size={28} />, title: 'Live GPS Tracking', description: 'Monitor your shipment\'s exact location in real-time with sub-meter GPS accuracy and interactive maps.', gradient: 'from-violet-600 to-indigo-600' },
                { icon: <BarChart3 size={28} />, title: 'Predictive ETAs', description: 'AI-powered delivery estimates updated continuously based on weather, traffic, and real-time conditions.', gradient: 'from-blue-600 to-cyan-600' },
                { icon: <Shield size={28} />, title: 'Delivery Proof', description: 'Digital signature capture and photo confirmation upon successful delivery with timestamp verification.', gradient: 'from-amber-500 to-orange-600' }
              ].map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }} className="glass-card rounded-2xl p-8 card-hover">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg`}>{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Video Section */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-20 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/10 to-indigo-600/10 rounded-3xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <video autoPlay muted loop playsInline className="w-full h-[400px] object-cover" poster="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80">
                  <source src="https://videos.pexels.com/video-files/6169041/6169041-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/30 to-transparent flex items-end">
                  <div className="p-8 md:p-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Advanced Fleet Management
                    </h3>
                    <p className="text-gray-300 max-w-xl">
                      Our AI-powered platform monitors every vehicle in our fleet, optimizing routes in real-time for maximum efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
