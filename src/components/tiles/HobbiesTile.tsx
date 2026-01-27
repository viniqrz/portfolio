import profileData from '../../data/profile.json';
import { Heart } from 'lucide-react';

export const HobbiesTile = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-6 text-blue-400/80">
        <Heart size={20} />
        <span className="text-sm font-semibold tracking-wider uppercase">Hobbies & Interests 🎯</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {profileData.hobbies.map((hobby) => (
          <div key={hobby.name} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-blue-500/20 transition-all">
            <span className="text-3xl mb-2">{hobby.emoji}</span>
            <span className="text-xs font-bold tracking-wide text-slate-300">{hobby.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
