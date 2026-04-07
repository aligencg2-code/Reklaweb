import { Terminal, BarChart3, Share2, Layout, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: "Web Tasarım & Yazılım",
    description: "Reklaweb Ajansı, uzman ve deneyimli kadrosuyla web tasarım, yazılım ve tasarım hizmetleri sunmaktadır. İnternet sitesini hayallerinizdeki gibi, kullanıcı dostu ve yenilikçi bir yapıda inşa ediyoruz. Modern teknolojilerle (React, Next.js, Node.js) ölçeklenebilir çözümler sunuyoruz.",
    icon: Terminal,
    stats: ["PROTOKOL: HTTP/3 OPTİMİZE", "MİMARİ: MİKRO-SERVİS", "PERFORMANS: GRADE_A"],
    image: "https://picsum.photos/seed/code/800/800",
    size: "large"
  },
  {
    title: "Profesyonel SEO Desteği",
    description: "SEO (Arama Motoru Optimizasyonu) ile Google doğal aramalarında ilk sayfalarda yerinizi alın. Rakiplerinizi geride bırakın ve görünürlüğünüzü artırın. Teknik SEO, içerik optimizasyonu ve backlink stratejileri ile kalıcı başarı sağlıyoruz.",
    icon: BarChart3,
    stats: ["HEDEF: YÜKSEK_TRAFİK", "TARAMA_DURUMU: BAŞARILI", "SIRALAMA: İLK_SAYFA"],
    size: "vertical"
  },
  {
    title: "Sosyal Medya Yönetimi",
    description: "Facebook, Instagram ve LinkedIn gibi platformlarda güçlü bir varlık oluşturun. Hedef kitle analizi, yaratıcı içerik üretimi ve reklam yönetimi ile marka bilinirliğinizi ve satışlarınızı artırın.",
    icon: Share2,
    size: "square"
  },
  {
    title: "E-Ticaret Çözümleri",
    description: "Güvenli ödeme sistemleri, stok yönetimi ve kullanıcı dostu arayüzlerle e-ticaret dünyasına adım atın. Satış odaklı tasarımlarımızla dönüşüm oranlarınızı maksimize ediyoruz.",
    icon: Layout,
    tags: ["ETİCARET", "ÖDEME_SİSTEMLERİ", "STOK_TAKİP"],
    image: "https://picsum.photos/seed/shop/800/450",
    size: "wide"
  },
  {
    title: "Mobil Uygulama Geliştirme",
    description: "iOS ve Android platformları için yüksek performanslı, kullanıcı odaklı mobil uygulamalar geliştiriyoruz. Native ve Hybrid çözümlerle işinizi cebinize taşıyoruz.",
    icon: Cpu,
    stats: ["PLATFORM: IOS/ANDROID", "FRAMEWORK: REACT_NATIVE", "UX: OPTİMİZE"],
    size: "vertical"
  },
  {
    title: "Kurumsal Kimlik Tasarımı",
    description: "Markanızın ruhunu yansıtan logo, kartvizit ve kurumsal materyallerle profesyonel bir imaj oluşturun. Dijital ve basılı mecralarda tutarlı bir marka dili kuruyoruz.",
    icon: Layout,
    size: "square"
  }
];

export default function Services() {
  return (
    <section id="services" className="p-8 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 border-l-2 border-primary mb-6">
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">MODÜL: HİZMET_KATALOĞU</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter text-on-surface mb-8 leading-none uppercase">
            SİSTEM <span className="text-primary">TEŞHİSİ</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group relative bg-surface-container-low/40 backdrop-blur-xl p-8 border border-outline-variant/20 hover:border-primary/50 transition-all duration-300",
                service.size === "large" && "md:col-span-8",
                service.size === "vertical" && "md:col-span-4",
                service.size === "square" && "md:col-span-4",
                service.size === "wide" && "md:col-span-8"
              )}
            >
              <div className="flex justify-between items-start mb-8">
                <h3 className={cn(
                  "font-headline font-bold text-on-surface group-hover:text-primary transition-colors",
                  service.size === "large" ? "text-4xl" : "text-2xl"
                )}>
                  {service.title}
                </h3>
                <service.icon className="text-primary w-8 h-8" />
              </div>

              <div className={cn(
                "grid gap-8 items-center",
                service.size === "large" && "md:grid-cols-2"
              )}>
                <div className="space-y-4">
                  <p className="text-on-surface-variant leading-relaxed font-body text-sm">
                    {service.description}
                  </p>
                  
                  {service.stats && (
                    <ul className="font-mono text-[10px] space-y-2 text-primary/80">
                      {service.stats.map(stat => (
                        <li key={stat} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary"></span> {stat}
                        </li>
                      ))}
                    </ul>
                  )}

                  {service.tags && (
                    <div className="flex gap-4">
                      {service.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-surface-container-highest border border-outline-variant/30 text-[10px] font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {service.image && (
                  <div className={cn(
                    "relative border border-outline-variant/30 overflow-hidden",
                    service.size === "large" ? "aspect-square" : "aspect-video"
                  )}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="object-cover w-full h-full opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { cn } from '@/src/lib/utils';
