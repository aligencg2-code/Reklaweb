import { motion } from 'motion/react';

const steps = [
  { id: '01', title: 'Analiz & Teşhis', description: 'Mevcut dijital varlığınızın kapsamlı bir stres testine tabi tutulması ve ihtiyaç analizi.' },
  { id: '02', title: 'Prototipleme', description: 'Veri odaklı kullanıcı yolculuklarının ve arayüz iskeletinin markanıza özel oluşturulması.' },
  { id: '03', title: 'Dağıtım (Deployment)', description: 'Yüksek performanslı sunucularda hatasız yayına alım ve sürekli optimizasyon süreci.' },
];

export default function Architecture() {
  return (
    <section className="p-8 lg:p-16 bg-surface-container-low/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-headline font-bold mb-8 uppercase tracking-tighter">SİSTEM <span className="text-primary">MİMARİSİ</span></h2>
          <div className="space-y-8">
            {steps.map((step) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-primary/20 flex items-center justify-center font-mono text-primary font-bold">
                  {step.id}
                </div>
                <div>
                  <h4 className="text-xl font-headline font-bold mb-2">{step.title}</h4>
                  <p className="text-sm text-on-surface-variant font-body">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-lowest p-6 border border-outline-variant/30 font-mono text-[11px] leading-relaxed relative overflow-hidden">
          <div className="flex items-center gap-2 mb-4 border-b border-outline-variant/20 pb-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="ml-4 text-on-surface-variant opacity-50 uppercase tracking-widest">reklaweb_deploy.yml</span>
          </div>
          
          <div className="text-primary-container space-y-1">
            <p><span className="text-secondary">versiyon:</span> "3.9"</p>
            <p><span className="text-secondary">servisler:</span></p>
            <p className="pl-4"><span className="text-secondary">web_tasarim:</span></p>
            <p className="pl-8"><span className="text-secondary">ui_ux:</span> premium</p>
            <p className="pl-8"><span className="text-secondary">responsive:</span> true</p>
            <p className="pl-8"><span className="text-secondary">animasyonlar:</span> optimize</p>
            <p className="pl-4"><span className="text-secondary">seo_motoru:</span></p>
            <p className="pl-8"><span className="text-secondary">anahtar_kelime:</span> yuksek</p>
            <p className="pl-8"><span className="text-secondary">performans_skoru:</span> 99</p>
            <p className="pl-8"><span className="text-secondary">meta_optim:</span> aktif</p>
            <p><span className="text-secondary">aglar:</span></p>
            <p className="pl-4"><span className="text-secondary">kuresel_erisim:</span></p>
            <p className="pl-8"><span className="text-secondary">surucu:</span> bridge</p>
          </div>
          
          <div className="mt-4 pt-4 border-t border-outline-variant/20">
            <span className="text-on-surface-variant/40 animate-pulse">_ YÜRÜTME_BEKLENİYOR...</span>
          </div>
        </div>
      </div>
    </section>
  );
}
