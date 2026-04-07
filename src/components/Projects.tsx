import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Kurumsal Firma V20",
    category: "Web Yazılım",
    description: "Tüm sektörlere uygun, gelişmiş yönetim panelli ve mobil uyumlu kurumsal web sitesi çözümü. SEO uyumlu altyapı ve sınırsız sayfa ekleme özelliği.",
    tags: ["PHP", "MySQL", "Responsive"],
    image: "https://picsum.photos/seed/corp/800/600"
  },
  {
    title: "Emlak Web Sitesi V5",
    category: "Sektörel Yazılım",
    description: "Doping ve mağaza modüllü, yeni dil sistemine sahip profesyonel emlak portalı. Harita entegrasyonu ve gelişmiş filtreleme seçenekleri.",
    tags: ["Laravel", "Vue.js", "Multi-Language"],
    image: "https://picsum.photos/seed/realestate/800/600"
  },
  {
    title: "QR Kod Menü Sistemi",
    category: "Dijital Çözümler",
    description: "Restoran ve cafeler için temassız, hızlı ve kolay yönetilebilir dijital menü altyapısı. Online sipariş ve garson çağırma özellikleri.",
    tags: ["Node.js", "QR Engine", "Real-time"],
    image: "https://picsum.photos/seed/qrmenu/800/600"
  },
  {
    title: "Vip Kurumsal Firma V3",
    category: "Web Yazılım",
    description: "Modern arayüzü ve yüksek hızıyla öne çıkan, premium kurumsal web sitesi paketi. Özel animasyonlar ve dinamik içerik yönetimi.",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: "https://picsum.photos/seed/vip/800/600"
  },
  {
    title: "Haber Portalı Yazılımı",
    category: "Medya Yazılımı",
    description: "Yüksek trafikli haber siteleri için optimize edilmiş, anlık bildirim ve reklam yönetim sistemli portal.",
    tags: ["Next.js", "PostgreSQL", "Redis"],
    image: "https://picsum.photos/seed/news/800/600"
  },
  {
    title: "B2B Bayi Altyapısı",
    category: "E-Ticaret",
    description: "Toptan satış yapan firmalar için özel bayi yönetim ve sipariş toplama sistemi.",
    tags: ["ASP.NET Core", "SQL Server", "ERP Sync"],
    image: "https://picsum.photos/seed/b2b/800/600"
  }
];

export default function Projects() {
  return (
    <section className="p-8 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="inline-block px-3 py-1 bg-primary/10 border-l-2 border-primary mb-6">
              <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">MODÜL: PROJE_PORTFÖYÜ</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter text-on-surface uppercase">
              Yazılım <span className="text-primary">Mimarisi</span>
            </h2>
          </div>
          <p className="max-w-md text-on-surface-variant font-body text-sm leading-relaxed">
            Öne çıkan yazılımlarımız ve özel projelerimizle işletmenizi dijital dünyada bir adım öne taşıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-surface-container-low border border-outline-variant/20 overflow-hidden hover:border-primary/40 transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-4 right-4 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="p-2 bg-surface/80 backdrop-blur-md border border-outline-variant/30 hover:text-primary">
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-surface/80 backdrop-blur-md border border-outline-variant/30 hover:text-primary">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-2">{project.category}</div>
                <h3 className="text-xl font-headline font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-surface-container-highest border border-outline-variant/20 text-[9px] font-mono uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-12 py-4 border border-outline-variant/30 font-headline font-bold uppercase tracking-[0.2em] hover:bg-primary/5 hover:border-primary transition-all">
            VIEW_ALL_REPOS
          </button>
        </div>
      </div>
    </section>
  );
}
