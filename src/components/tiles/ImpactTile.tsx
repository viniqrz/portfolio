import { Zap, Users, Database, Rocket, TrendingUp } from 'lucide-react';

export const ImpactTile = () => {
  const stats = [
    { label: "Customers Impacted", value: "11M+", icon: <Users size={16} /> },
    { label: "Records Indexed", value: "300M+", icon: <Database size={16} /> },
    { label: "Search Efficiency", value: "+64%", icon: <TrendingUp size={16} /> },
    { label: "Deployment Speed", value: "+87%", icon: <Zap size={16} /> },
    { label: "Microservices", value: "40+", icon: <Rocket size={16} /> }
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-6 text-blue-400/80">
        <TrendingUp size={20} />
        <span className="text-sm font-semibold tracking-wider uppercase">Impact & Scale 📈</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col p-3 rounded-2xl bg-white/5 border border-white/5">
            <div className="flex items-center gap-2 text-slate-400 mb-1">
              {stat.icon}
              <span className="text-[10px] font-bold uppercase tracking-tight">{stat.label}</span>
            </div>
            <span className="text-xl font-bold text-white">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
