export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/15 bg-surface-container-lowest transition-opacity duration-300">
      <div className="w-full px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-outline">
          © 2024 REKLAWEB_DAHİLİ // TÜM_HAKLARI_SAKLIDIR
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2 group cursor-default">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-container">Sist_Durumu: TAMAM</span>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-outline hover:text-secondary transition-colors cursor-pointer">Gecikme: 24ms</div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-outline hover:text-secondary transition-colors cursor-pointer">Şifreleme: AES-256</div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-outline hover:text-secondary transition-colors cursor-pointer">Protokol: HTTPS</div>
        </div>
      </div>
    </footer>
  );
}
