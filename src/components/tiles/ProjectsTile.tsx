import projectData from '../../data/projects.json';
import { FolderGit2, ArrowUpRight } from 'lucide-react';

export const ProjectsTile = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-6 text-blue-400/80">
        <FolderGit2 size={20} />
        <span className="text-sm font-semibold tracking-wider uppercase">Recent Projects 📂</span>
      </div>
      <div className="flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
        {projectData.map((project, index) => (
          <a 
            key={index} 
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-slate-100 text-base group-hover:text-blue-400 transition-colors">
                {project.name}
              </h3>
              <ArrowUpRight size={16} className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <p className="text-sm text-slate-400 mt-2 mb-3 leading-relaxed line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.topics.slice(0, 3).map(topic => (
                 <span key={topic} className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
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
