import { BentoGrid, BentoItem } from './components/BentoGrid';
import { ProjectsTile } from './components/tiles/ProjectsTile';
import { ContactTile } from './components/tiles/ContactTile';
import { Code } from 'lucide-react';
import profileData from './data/profile.json';

function App() {
  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 p-4 md:p-8 font-sans text-neutral-900 dark:text-neutral-100">
      <div className="max-w-7xl mx-auto mb-12 mt-8 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <img 
          src={profileData.avatar} 
          alt={profileData.name} 
          className="w-32 h-32 rounded-full border-4 border-white dark:border-neutral-800 shadow-lg"
        />
        <div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            {profileData.name} <span className="text-neutral-400 text-2xl md:text-4xl block md:inline">{profileData.role}</span>
          </h1>
          <p className="text-xl text-neutral-500 max-w-2xl">
            {profileData.bio}
          </p>
        </div>
      </div>

      <BentoGrid>
        {/* Projects Tile - Main Feature (2/3 width) */}
        <BentoItem className="md:col-span-2 md:row-span-3">
          <ProjectsTile />
        </BentoItem>

        {/* Tech Stack Tile */}
        <BentoItem className="md:col-span-1 md:row-span-2">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-4 text-neutral-500">
              <Code size={20} /> 
              <span className="text-sm">Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-2 content-start overflow-y-auto">
              {profileData.stack.map(tech => (
                <span key={tech} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </BentoItem>

        {/* Contact Tile - At the end */}
        <BentoItem className="md:col-span-1 md:row-span-1 bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/30">
          <ContactTile />
        </BentoItem>

      </BentoGrid>
      
      <footer className="max-w-7xl mx-auto mt-20 text-center text-neutral-400 text-sm">
        <p>© {new Date().getFullYear()} {profileData.name}. Built statically with Vite.</p>
      </footer>
    </div>
  );
}

export default App;
