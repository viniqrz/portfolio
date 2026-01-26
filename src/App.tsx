import { BentoGrid, BentoItem } from './components/BentoGrid';
import { CryptoTile } from './components/tiles/CryptoTile';
import { ProjectsTile } from './components/tiles/ProjectsTile';
import { ContactTile } from './components/tiles/ContactTile';
import { Code, User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 p-4 md:p-8 font-sans text-neutral-900 dark:text-neutral-100">
      <div className="max-w-7xl mx-auto mb-12 mt-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Full Stack <span className="text-neutral-400">Engineer</span>
        </h1>
        <p className="text-xl text-neutral-500 max-w-2xl">
          Building high-performance static websites and scalable systems.
          Exploring the intersection of verifiable data and modern web architecture.
        </p>
      </div>

      <BentoGrid>
        {/* Large Profile / Bio Tile */}
        <BentoItem 
          className="md:col-span-2 md:row-span-2 min-h-[200px]"
          header={<div className="flex items-center gap-2 text-neutral-500"><User size={20} /> <span className="text-sm">About Me</span></div>}
        >
          <div className="flex flex-col justify-end h-full">
            <h2 className="text-3xl font-bold mb-4">Crafting digital experiences with precision.</h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              I specialize in the React ecosystem, shifting towards static-first architectures. 
              This portfolio itself is a testament to that philosophy—built with Vite, 
              compiled to static HTML, and served directly from the edge.
            </p>
          </div>
        </BentoItem>

        {/* Live Data Tile */}
        <BentoItem className="md:col-span-1 md:row-span-1">
          <CryptoTile />
        </BentoItem>

        {/* Contact Tile */}
        <BentoItem className="md:col-span-1 md:row-span-1 bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/30">
          <ContactTile />
        </BentoItem>

        {/* Projects Tile */}
        <BentoItem className="md:col-span-2 md:row-span-1">
          <ProjectsTile />
        </BentoItem>

        {/* Tech Stack / Code Tile Placeholder */}
        <BentoItem className="md:col-span-1 md:row-span-1">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-4 text-neutral-500">
              <Code size={20} /> 
              <span className="text-sm">Stack</span>
            </div>
            <div className="flex flex-wrap gap-2 content-start">
              {['React', 'TypeScript', 'Vite', 'Tailwind', 'Node.js', 'PostgreSQL'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </BentoItem>
      </BentoGrid>
      
      <footer className="max-w-7xl mx-auto mt-20 text-center text-neutral-400 text-sm">
        <p>© {new Date().getFullYear()} Bento Portfolio. Built statically with Vite.</p>
      </footer>
    </div>
  );
}

export default App;
