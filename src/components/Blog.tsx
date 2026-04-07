import { motion } from 'motion/react';
import { Rss, Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "2024 Web Tasarım Trendleri: Minimalizm ve Hız",
    excerpt: "Dijital dünyada kullanıcı deneyimi her geçen gün daha fazla önem kazanıyor. İşte bu yılın öne çıkan tasarım trendleri.",
    date: "15 Mart 2024",
    author: "Reklaweb Team",
    category: "Tasarım",
    image: "https://picsum.photos/seed/design1/800/400"
  },
  {
    id: 2,
    title: "SEO'da Yapay Zeka Dönemi: Algoritmalar Nasıl Değişiyor?",
    excerpt: "Google'ın yeni SGE (Search Generative Experience) güncellemesi ile arama motoru optimizasyonu stratejileri evrim geçiriyor.",
    date: "10 Mart 2024",
    author: "SEO Expert",
    category: "SEO",
    image: "https://picsum.photos/seed/seo1/800/400"
  },
  {
    id: 3,
    title: "E-Ticaret Dönüşüm Oranlarını Artırmanın 5 Yolu",
    excerpt: "Satışlarınızı artırmak için sepet terk etme oranlarını nasıl düşürebilir ve kullanıcı güvenini nasıl kazanabilirsiniz?",
    date: "05 Mart 2024",
    author: "E-Comm Specialist",
    category: "E-Ticaret",
    image: "https://picsum.photos/seed/shop1/800/400"
  }
];

export default function Blog() {
  return (
    <section className="p-8 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 border-l-2 border-primary mb-6">
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">MODÜL: BİLGİ_MERKEZİ</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter text-on-surface uppercase mb-8">
            Güncel <span className="text-primary">İçerikler</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-surface-container-low border border-outline-variant/20 overflow-hidden hover:border-primary/40 transition-all duration-500"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 font-mono text-[10px] uppercase tracking-widest">
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 font-mono text-[9px] text-on-surface-variant/60 mb-4 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <button className="flex items-center gap-2 font-mono text-[10px] text-primary uppercase tracking-[0.2em] group/btn">
                  DEVAMINI_OKU <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
