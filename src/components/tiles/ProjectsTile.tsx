import researchData from '../../data/research.json';
import { BookOpen, ArrowUpRight } from 'lucide-react';

export const ResearchTile = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4 text-neutral-500 dark:text-neutral-400">
        <BookOpen size={20} />
        <span className="text-sm">Latest Research</span>
      </div>
      <div className="flex flex-col gap-4 overflow-y-auto">
        {researchData.map((item) => (
          <a 
            key={item.id} 
            href={item.link}
            className="group block p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-500 mt-1 line-clamp-2">
              {item.summary}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};
