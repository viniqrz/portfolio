import { Mail, Linkedin, Github } from 'lucide-react';
import profileData from '../../data/profile.json';

export const ContactTile = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center text-center gap-4">
      <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100">Let's Connect</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Open to new opportunities and collaborations.
      </p>
      <div className="flex gap-4 mt-2">
        <a 
          href={`mailto:${profileData.socials.email}`} 
          className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
        <a 
          href={profileData.socials.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a 
          href={profileData.socials.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-neutral-700 dark:text-neutral-300 hover:text-blue-400 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  );
};
