import { BentoGrid, BentoItem } from './components/BentoGrid';
import { ProjectsTile } from './components/tiles/ProjectsTile';
import { ContactTile } from './components/tiles/ContactTile';
import { LanguagesTile } from './components/tiles/LanguagesTile';
import { HobbiesTile } from './components/tiles/HobbiesTile';
import { Code, Download } from 'lucide-react';
import profileData from './data/profile.json';

function App() {
  return (
    <div className="min-h-screen bg-[#020617] p-4 md:p-8 font-sans text-slate-200 relative">
      <div className="liquid-background">
        <div className="blob w-[40rem] h-[40rem] bg-blue-600/20 top-[-20%] left-[-10%]" />
        <div className="blob w-[35rem] h-[35rem] bg-indigo-600/15 top-[30%] right-[-15%]" />
        <div className="blob w-[30rem] h-[30rem] bg-sky-500/10 bottom-[-10%] left-[10%]" />
      </div>
      <div className="max-w-7xl mx-auto mb-12 mt-8 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img 
            src={profileData.avatar} 
            alt={profileData.name} 
            className="w-32 h-32 rounded-full border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2 text-white">
              {profileData.name} 
            </h1>
            <span className="text-blue-400 text-xl md:text-3xl block mb-4 font-medium">{profileData.role}</span>
            <p className="text-lg text-slate-400 max-w-xl">
              {profileData.bio}
            </p>
          </div>
        </div>
        
        <a 
          href={profileData.resumeUrl} 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-600/25"
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
        <BentoItem className="md:col-span-1 md:row-span-1 border-blue-500/20 bg-blue-500/5">
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
