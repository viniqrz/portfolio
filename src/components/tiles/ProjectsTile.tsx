import projectData from '../../data/projects.json';
import { FolderGit2, ArrowUpRight } from 'lucide-react';

export const ProjectsTile = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4 text-neutral-500 dark:text-neutral-400">
        <FolderGit2 size={20} />
        <span className="text-sm">Recent Projects</span>
      </div>
      <div className="flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
        {projectData.map((project, index) => (
          <a 
            key={index} 
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.name}
              </h3>
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-500 mt-1 mb-2 line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.topics.slice(0, 3).map(topic => (
                 <span key={topic} className="px-2 py-0.5 text-[10px] rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                   #{topic}
                 </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
