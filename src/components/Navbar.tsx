import { cn } from '@/src/lib/utils';

const navLinks = [
  { label: 'Hizmetler', id: 'services' },
  { label: 'Projeler', id: 'projects' },
  { label: 'Blog', id: 'blog' },
  { label: 'İletişim', id: 'contact' },
];

interface NavbarProps {
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

export default function Navbar({ setActiveTab, activeTab }: NavbarProps) {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/15 flex justify-between items-center px-8 py-4 max-w-full shadow-[0_20px_40px_rgba(84,218,211,0.08)]">
      <button 
        onClick={() => setActiveTab('system')}
        className="text-2xl font-black tracking-tighter text-on-surface font-headline uppercase hover:text-primary transition-colors"
      >
        REKLAWEB
      </button>
      
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => setActiveTab(link.id)}
            className={cn(
              "font-headline tracking-tight uppercase transition-all duration-100 ease-in active:scale-95",
              activeTab === link.id ? "text-primary" : "text-on-surface/70 hover:text-primary"
            )}
          >
            {link.label}
          </button>
        ))}
      </nav>

      <button 
        onClick={() => setActiveTab('contact')}
        className="bg-primary text-on-primary px-6 py-2 font-headline font-bold uppercase tracking-widest hover:shadow-[0_0_15px_#F2F200] transition-all active:scale-95"
      >
        TERMİNAL_ERİŞİMİ
      </button>
    </header>
  );
}
