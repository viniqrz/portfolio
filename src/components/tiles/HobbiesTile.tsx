import profileData from '../../data/profile.json';
import { Heart } from 'lucide-react';

export const HobbiesTile = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4 text-neutral-500 dark:text-neutral-400">
        <Heart size={20} />
        <span className="text-sm">Hobbies & Interests 🎯</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {profileData.hobbies.map((hobby) => (
          <div key={hobby.name} className="flex flex-col items-center justify-center p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800/50 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors">
            <span className="text-2xl mb-1">{hobby.emoji}</span>
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{hobby.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
