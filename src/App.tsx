import { BentoItem } from './components/BentoGrid';
import { ProjectsTile } from './components/tiles/ProjectsTile';
import { ContactTile } from './components/tiles/ContactTile';
import { LanguagesTile } from './components/tiles/LanguagesTile';
import { HobbiesTile } from './components/tiles/HobbiesTile';
import { GlobeCanvas } from './components/Globe';
import { Code, Download } from 'lucide-react';
import profileData from './data/profile.json';

function App() {
  return (
    <div className="min-h-screen bg-[#020617] p-4 md:p-8 font-sans text-slate-200 relative overflow-x-hidden">
      <div className="liquid-background">
        <div className="blob w-[50rem] h-[50rem] bg-blue-600/30 top-[-20%] left-[-10%]" />
        <div className="blob w-[45rem] h-[45rem] bg-indigo-600/20 top-[20%] right-[-15%]" />
        <div className="blob w-[40rem] h-[40rem] bg-sky-500/15 bottom-[-10%] left-[10%]" />
        <div className="blob w-[35rem] h-[35rem] bg-purple-600/10 bottom-[20%] right-[10%]" />
      </div>

      <div className="max-w-[1124px] mx-auto mb-16 mt-8 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-center relative z-20">
          <img 
            src={profileData.avatar} 
            alt={profileData.name} 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20 relative z-30"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-2 text-white">
              {profileData.name} 
            </h1>
            <span className="text-blue-400 text-xl md:text-3xl block mb-6 font-medium">{profileData.role}</span>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
              {profileData.bio}
            </p>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-4 relative z-20 mt-8 md:mt-0">
          <div className="w-32 h-32 md:w-40 md:h-40">
             <GlobeCanvas />
          </div>
          <a 
            href={profileData.resumeUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 relative z-20 mt-8 md:mt-0 min-w-[360px]"
          >
            <Download size={22} />
            Download Resume 📄
          </a>
        </div>
      </div>

      <div className="max-w-[1124px] mx-auto flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Content Column (2/3) */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <BentoItem className="h-full">
              <ProjectsTile />
            </BentoItem>
          </div>

          {/* Sidebar Column (1/3) - No Gaps Strategy */}
          <div className="flex flex-col gap-4">
            <BentoItem className="h-fit">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-6 text-neutral-400">
                  <Code size={20} /> 
                  <span className="text-sm font-semibold tracking-wider uppercase">Tech Stack 🛠️</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {profileData.stack.map(tech => (
                    <span key={tech} className="px-3.5 py-1.5 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-medium border border-white/10 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </BentoItem>

            <BentoItem className="h-fit">
              <LanguagesTile />
            </BentoItem>

            <BentoItem className="h-full">
              <HobbiesTile />
            </BentoItem>
          </div>
        </div>

        {/* Full-width bottom section */}
        <BentoItem className="border-blue-500/20 bg-blue-500/10 py-12">
          <ContactTile />
        </BentoItem>
      </div>
      
      <footer className="max-w-[1124px] mx-auto mt-24 pb-12 text-center text-slate-500 text-sm border-t border-white/5 pt-12">
        <p>© {new Date().getFullYear()} {profileData.name}. Built with Passion, React & Vite ⚡</p>
      </footer>
    </div>
  );
}

export default App;
