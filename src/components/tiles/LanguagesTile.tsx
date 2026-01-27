import profileData from '../../data/profile.json';
import { Languages } from 'lucide-react';

export const LanguagesTile = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4 text-neutral-500 dark:text-neutral-400">
        <Languages size={20} />
        <span className="text-sm">Languages 🌍</span>
      </div>
      <div className="flex flex-col gap-3">
        {profileData.languages.map((lang) => (
          <div key={lang.name} className="flex items-center justify-between p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800/50">
            <div className="flex items-center gap-3">
              <span className="text-xl">{lang.flag}</span>
              <span className="font-medium text-neutral-800 dark:text-neutral-200">{lang.name}</span>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400">
              {lang.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
