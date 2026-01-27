import profileData from '../../data/profile.json';
import { Languages } from 'lucide-react';

export const LanguagesTile = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-6 text-blue-400/80">
        <Languages size={20} />
        <span className="text-sm font-semibold tracking-wider uppercase">Languages 🌍</span>
      </div>
      <div className="flex flex-col gap-3">
        {profileData.languages.map((lang) => (
          <div key={lang.name} className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5">
            <div className="flex items-center gap-3">
              <span className="text-xl">{lang.flag}</span>
              <span className="font-bold text-slate-200">{lang.name}</span>
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {lang.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
