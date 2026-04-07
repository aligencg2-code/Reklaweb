import { Terminal, Cpu, Layout, Rss, MessageSquare } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navItems = [
  { id: 'system', label: 'Sistem', icon: Terminal },
  { id: 'services', label: 'Hizmetler', icon: Cpu },
  { id: 'projects', label: 'Projeler', icon: Layout },
  { id: 'blog', label: 'Blog', icon: Rss },
  { id: 'contact', label: 'İletişim', icon: MessageSquare },
];

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside className="hidden lg:flex flex-col h-screen w-64 border-r border-outline-variant/15 sticky left-0 top-16 bg-surface-container-low z-40">
      <div className="p-6 border-b border-outline-variant/15">
        <div className="font-black text-primary font-headline tracking-tighter text-xl">REKLA_OS</div>
        <div className="font-mono text-[10px] tracking-[0.2em] text-on-surface-variant opacity-50 uppercase">v2.0.4_STABLE</div>
      </div>
      
      <nav className="flex-1 py-6 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-6 py-3 font-mono text-xs tracking-widest uppercase transition-all duration-75",
              activeTab === item.id 
                ? "bg-primary text-on-primary font-bold" 
                : "text-on-surface/50 hover:bg-surface-container-highest hover:border-l-4 hover:border-primary hover:translate-x-1"
            )}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-6">
        <button className="w-full py-4 border border-primary text-primary font-mono text-xs tracking-[0.2em] hover:bg-primary/10 transition-colors uppercase">
          SİSTEM_BAŞLAT
        </button>
      </div>
    </aside>
  );
}
