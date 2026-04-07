import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, CheckCircle2, XCircle, Loader2 } from 'lucide-react';

export default function Hero() {
  const [domain, setDomain] = useState('');
  const [status, setStatus] = useState<'idle' | 'searching' | 'available' | 'taken'>('idle');
  const [result, setResult] = useState('');

  const handleSearch = () => {
    if (!domain) return;
    setStatus('searching');
    
    // Simulate API call
    setTimeout(() => {
      const isAvailable = Math.random() > 0.4;
      if (isAvailable) {
        setStatus('available');
        setResult(`${domain} şu an boşta! Hemen tescil edebilirsiniz.`);
      } else {
        setStatus('taken');
        setResult(`${domain} maalesef dolu. Başka bir isim deneyin.`);
      }
    }, 1500);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden data-grid">
      <div className="absolute inset-0 code-rain pointer-events-none opacity-20">
        <div className="w-full h-full flex justify-around text-primary font-mono text-[10px] leading-none select-none">
          <div className="hidden md:block">01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101</div>
          <div>10101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010</div>
          <div className="hidden md:block">11100111001110011100111001110011100111001110011100111001110011100111001110011100111001110011100111001110011100111001110011100111</div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-8 text-center max-w-5xl mx-auto"
      >
        <div className="inline-block py-1 px-3 border border-primary/30 bg-primary/5 mb-6">
          <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">Sistem.Durumu: Aktif</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter mb-4 glitch-text uppercase">
          Dijital Reklam & <span className="text-primary">Web Tasarım</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-3xl mx-auto mb-12">
          Türkiye'nin öncü dijital ajansı Reklaweb ile profesyonel web tasarım, yazılım ve sosyal medya yönetimi çözümleri. Hayalinizdeki dijital varlığı birlikte inşa edelim.
        </p>

        {/* Domain Search / Terminal Input */}
        <div className="w-full max-w-3xl mx-auto bg-surface-container-low p-1 border border-outline-variant/20 shadow-2xl">
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="flex-1 flex items-center bg-surface-container px-6 py-4">
              <span className="text-primary font-mono mr-4">root@reklaweb:~$</span>
              <input 
                className="bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/40 font-mono text-sm w-full"
                placeholder="Hayalinizdeki Alan Adını Hemen Bulun! (marka.com)"
                type="text"
                value={domain}
                onChange={(e) => {
                  setDomain(e.target.value);
                  if (status !== 'idle') setStatus('idle');
                }}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <button 
              onClick={handleSearch}
              disabled={status === 'searching'}
              className="bg-primary text-on-primary px-8 py-4 font-headline font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'searching' ? <Loader2 className="w-4 h-4 animate-spin" /> : 'SORGULA'}
            </button>
          </div>
          
          <AnimatePresence mode="wait">
            {status !== 'idle' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="px-6 py-3 border-t border-outline-variant/10 flex items-center gap-3 font-mono text-xs"
              >
                {status === 'searching' && <span className="text-on-surface-variant animate-pulse">Sorgulanıyor...</span>}
                {status === 'available' && (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-green-500">{result}</span>
                  </>
                )}
                {status === 'taken' && (
                  <>
                    <XCircle className="w-4 h-4 text-red-500" />
                    <span className="text-red-500">{result}</span>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-2 flex justify-center gap-6 font-mono text-[10px] text-on-surface-variant/60 uppercase tracking-widest p-2">
            <span>.com.tr / 199 TL</span>
            <span>.com / 499 TL</span>
            <span>.net / 449 TL</span>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-on-surface-variant">Scroll_to_explore</span>
        <motion.div 
          animate={{ height: [0, 48, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px bg-gradient-to-b from-primary to-transparent"
        />
      </div>
    </section>
  );
}
