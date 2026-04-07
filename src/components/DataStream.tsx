import { motion } from 'motion/react';
import { Terminal, Shield, Lock, Send } from 'lucide-react';

const logs = [
  { time: '21:04:12', type: 'BİLGİ', message: '192.168.1.42 adresinden gelen bağlantı kabul edildi.' },
  { time: '21:04:15', type: 'GÜVENLİ', message: 'El sıkışma protokolü: TLS 1.3 / AES_256_GCM' },
  { time: '21:04:18', type: 'VERİ', message: 'Paket transferi başlatıldı: 4.2MB/s' },
  { time: '21:04:22', type: 'UYARI', message: 'node_04 üzerinde potansiyel gecikme tespit edildi.' },
  { time: '21:04:25', type: 'BAŞARILI', message: 'Veri senkronizasyonu tamamlandı.' },
];

export default function DataStream() {
  return (
    <section className="p-8 lg:p-16 min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-12 flex-1">
        
        {/* Left: Secure Channel Logs */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center gap-4 border-b border-outline-variant/20 pb-6">
            <div className="p-3 bg-primary/10 border border-primary/30">
              <Shield className="text-primary w-6 h-6" />
            </div>
            <div>
              <h2 className="text-3xl font-headline font-bold uppercase tracking-tighter">GÜVENLİ_KANAL</h2>
              <p className="font-mono text-[10px] text-on-surface-variant opacity-50 tracking-widest">ŞİFRELENMİŞ_VERİ_AKIŞI_v4.0</p>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 font-mono text-xs space-y-3">
            {logs.map((log, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 group"
              >
                <span className="text-on-surface-variant/40">[{log.time}]</span>
                <span className={cn(
                  "font-bold",
                  log.type === 'BİLGİ' && "text-secondary",
                  log.type === 'GÜVENLİ' && "text-primary",
                  log.type === 'VERİ' && "text-on-surface",
                  log.type === 'UYARI' && "text-yellow-500",
                  log.type === 'BAŞARILI' && "text-green-500",
                )}>{log.type}:</span>
                <span className="text-on-surface-variant group-hover:text-on-surface transition-colors">{log.message}</span>
              </motion.div>
            ))}
            <div className="pt-4 animate-pulse text-primary">_ YENİ_PAKETLER_BEKLENİYOR...</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-outline-variant/20 bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer">
              <h4 className="font-headline font-bold mb-2 uppercase text-sm tracking-widest">Sistem Güncellemesi v2.1</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">Yeni nesil güvenlik protokolleri ve hız optimizasyonları yayında. Detaylı inceleme için tıklayın.</p>
            </div>
            <div className="p-6 border border-outline-variant/20 bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer">
              <h4 className="font-headline font-bold mb-2 uppercase text-sm tracking-widest">Veri Güvenliği Raporu</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">2024 Q1 siber güvenlik trendleri ve markanızı koruma yöntemleri üzerine teknik analiz.</p>
            </div>
          </div>
        </div>

        {/* Right: Message Form */}
        <div className="bg-surface-container-low border border-outline-variant/30 p-8 h-fit sticky top-32">
          <div className="flex items-center gap-3 mb-8">
            <Lock className="text-primary w-5 h-5" />
            <h3 className="font-headline font-bold uppercase tracking-widest text-sm">ŞİFRELİ_MESAJ</h3>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">KİMLİK</label>
              <input 
                type="text" 
                placeholder="İsim_veya_Rumuz"
                className="w-full bg-surface-container border border-outline-variant/30 px-4 py-3 font-mono text-xs focus:border-primary focus:ring-0 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">DÖNÜŞ_YOLU</label>
              <input 
                type="email" 
                placeholder="E-posta_Adresi"
                className="w-full bg-surface-container border border-outline-variant/30 px-4 py-3 font-mono text-xs focus:border-primary focus:ring-0 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">MESAJ_İÇERİĞİ</label>
              <textarea 
                rows={4}
                placeholder="Mesajınızı_buraya_yazın..."
                className="w-full bg-surface-container border border-outline-variant/30 px-4 py-3 font-mono text-xs focus:border-primary focus:ring-0 transition-all resize-none"
              ></textarea>
            </div>
            
            <button className="w-full bg-primary text-on-primary py-4 font-headline font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:brightness-110 transition-all group">
              VERİYİ_GÖNDER
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-outline-variant/20">
            <div className="flex items-center gap-2 text-[10px] font-mono text-on-surface-variant/50">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              ŞİFRELEME_AKTİF: PGP_2048_BIT
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

import { cn } from '@/src/lib/utils';
