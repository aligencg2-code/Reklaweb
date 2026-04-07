import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail, Clock, Shield } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'KONUM', value: 'Türkiye / Dijital Merkez' },
  { icon: Phone, label: 'TELEFON', value: '+90 (555) 000 00 00' },
  { icon: Mail, label: 'E-POSTA', value: 'iletisim@reklaweb.com' },
  { icon: Clock, label: 'ÇALIŞMA_SAATLERİ', value: 'Pzt - Cmt: 09:00 - 18:00' },
];

export default function Contact() {
  return (
    <section className="p-8 lg:p-16 min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-12 flex-1">
        
        {/* Left: Contact Info */}
        <div className="lg:col-span-1 space-y-8">
          <div className="flex items-center gap-4 border-b border-outline-variant/20 pb-6">
            <div className="p-3 bg-primary/10 border border-primary/30">
              <Shield className="text-primary w-6 h-6" />
            </div>
            <div>
              <h2 className="text-3xl font-headline font-bold uppercase tracking-tighter">İLETİŞİM_KANALI</h2>
              <p className="font-mono text-[10px] text-on-surface-variant opacity-50 tracking-widest">GÜVENLİ_MESAJ_MERKEZİ</p>
            </div>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 group"
              >
                <div className="w-10 h-10 flex-shrink-0 bg-surface-container-low border border-outline-variant/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                  <info.icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest mb-1">{info.label}</div>
                  <div className="text-sm font-headline font-bold text-on-surface">{info.value}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-6 border border-outline-variant/20 bg-surface-container-low/50 font-mono text-[10px] leading-relaxed text-on-surface-variant/70">
            <p className="mb-4">Sistemimiz 2048-bit PGP şifreleme ile korunmaktadır. Gönderdiğiniz tüm veriler güvenli sunucularımızda işlenir.</p>
            <div className="flex items-center gap-2 text-green-500">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              SSL_ENCRYPTION: ACTIVE
            </div>
          </div>
        </div>

        {/* Right: Message Form */}
        <div className="lg:col-span-2 bg-surface-container-low border border-outline-variant/30 p-8 lg:p-12 h-fit">
          <div className="mb-12">
            <h3 className="text-4xl font-headline font-bold uppercase tracking-tighter mb-4">ŞİFRELİ_MESAJ <span className="text-primary">GÖNDER</span></h3>
            <p className="text-on-surface-variant font-body text-sm max-w-xl">Projeniz hakkında detaylı bilgi almak veya iş birliği teklifinde bulunmak için aşağıdaki formu kullanabilirsiniz.</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">KİMLİK / İSİM</label>
              <input 
                type="text" 
                placeholder="Adınız_Soyadınız"
                className="w-full bg-surface-container border border-outline-variant/30 px-4 py-4 font-mono text-xs focus:border-primary focus:ring-0 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">DÖNÜŞ_YOLU / E-POSTA</label>
              <input 
                type="email" 
                placeholder="E-posta_Adresiniz"
                className="w-full bg-surface-container border border-outline-variant/30 px-4 py-4 font-mono text-xs focus:border-primary focus:ring-0 transition-all"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">KONU</label>
              <input 
                type="text" 
                placeholder="Mesaj_Konusu"
                className="w-full bg-surface-container border border-outline-variant/30 px-4 py-4 font-mono text-xs focus:border-primary focus:ring-0 transition-all"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">MESAJ_İÇERİĞİ</label>
              <textarea 
                rows={6}
                placeholder="Projeniz_hakkında_detaylar..."
                className="w-full bg-surface-container border border-outline-variant/30 px-4 py-4 font-mono text-xs focus:border-primary focus:ring-0 transition-all resize-none"
              ></textarea>
            </div>
            
            <div className="md:col-span-2">
              <button className="w-full md:w-auto bg-primary text-on-primary px-12 py-5 font-headline font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:brightness-110 transition-all group">
                VERİYİ_İLET
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
