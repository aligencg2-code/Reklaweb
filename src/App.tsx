/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Services from './components/Services';
import Architecture from './components/Architecture';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('system');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate system boot
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-surface flex flex-col items-center justify-center z-[100] font-mono">
        <div className="w-64 h-1 bg-surface-container-highest relative overflow-hidden mb-4">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_15px_#F2F200]"
          />
        </div>
        <div className="text-[10px] tracking-[0.5em] text-primary animate-pulse uppercase">
          Sistem_Çekirdeği_Başlatılıyor...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface text-on-surface selection:bg-primary/30 selection:text-primary">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex pt-16">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-1 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'system' && (
                <>
                  <Hero />
                  <Architecture />
                </>
              )}
              {activeTab === 'services' && <Services />}
              {activeTab === 'projects' && <Projects />}
              {activeTab === 'blog' && <Blog />}
              {activeTab === 'contact' && <Contact />}
            </motion.div>
          </AnimatePresence>
          
          <Footer />
        </main>
      </div>

      {/* Global Terminal Overlay (Visual Only) */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:block">
        <div className="bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/30 p-4 w-64 shadow-2xl">
          <div className="flex items-center justify-between mb-2 border-b border-outline-variant/20 pb-2">
            <span className="font-mono text-[9px] text-primary uppercase tracking-widest">Canlı_Akış</span>
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <div className="font-mono text-[9px] text-on-surface-variant space-y-1">
            <p className="flex justify-between"><span>CPU_YÜKÜ:</span> <span className="text-primary">12.4%</span></p>
            <p className="flex justify-between"><span>BELLEK:</span> <span className="text-primary">2.1GB</span></p>
            <p className="flex justify-between"><span>AĞ_TRAFİĞİ:</span> <span className="text-primary">842kb/s</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
