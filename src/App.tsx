import { BentoGrid, BentoItem } from './components/BentoGrid';
import { ProjectsTile } from './components/tiles/ProjectsTile';
import { ContactTile } from './components/tiles/ContactTile';
import { LanguagesTile } from './components/tiles/LanguagesTile';
import { HobbiesTile } from './components/tiles/HobbiesTile';
import { Code, Download } from 'lucide-react';
import profileData from './data/profile.json';

function App() {
  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 p-4 md:p-8 font-sans text-neutral-900 dark:text-neutral-100 relative">
      <div className="liquid-background">
        <div className="blob w-96 h-96 bg-blue-400/30 top-[-10%] left-[-10%]" />
        <div className="blob w-[30rem] h-[30rem] bg-purple-400/20 top-[40%] right-[-10%] animation-delay-2000" />
        <div className="blob w-80 h-80 bg-emerald-400/20 bottom-[-10%] left-[20%]" />
      </div>
      <div className="max-w-7xl mx-auto mb-12 mt-8 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img 
            src={profileData.avatar} 
            alt={profileData.name} 
            className="w-32 h-32 rounded-full border-4 border-white dark:border-neutral-800 shadow-lg"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">
              {profileData.name} 
            </h1>
            <span className="text-neutral-400 text-xl md:text-3xl block mb-4">{profileData.role}</span>
            <p className="text-lg text-neutral-500 max-w-xl">
              {profileData.bio}
            </p>
          </div>
        </div>
        
        <a 
          href={profileData.resumeUrl} 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg"
        >
          <Download size={20} />
          Download Resume 📄
        </a>
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
              <span className="text-sm">Tech Stack 🛠️</span>
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

        {/* Languages Tile */}
        <BentoItem className="md:col-span-1 md:row-span-2">
          <LanguagesTile />
        </BentoItem>

        {/* Hobbies Tile */}
        <BentoItem className="md:col-span-1 md:row-span-1">
          <HobbiesTile />
        </BentoItem>

        {/* Contact Tile */}
        <BentoItem className="md:col-span-1 md:row-span-1 bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/30">
          <ContactTile />
        </BentoItem>

      </BentoGrid>
      
      <footer className="max-w-7xl mx-auto mt-20 text-center text-neutral-400 text-sm">
        <p>© {new Date().getFullYear()} {profileData.name}. Built statically with Vite ⚡</p>
      </footer>
    </div>
  );
}

export default App;
