import researchData from '../../data/research.json';
import { BookOpen, Download, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ResearchTile = () => {
  const article = researchData[0];
  
  if (!article) return null;

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-6 text-blue-400/80">
        <BookOpen size={20} />
        <span className="text-sm font-semibold tracking-wider uppercase">Scientific Research 🔬</span>
      </div>
      
      <div className="flex flex-col gap-4">
        <div className="group p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-slate-100 text-lg group-hover:text-blue-400 transition-colors">
              {article.title}
            </h3>
            <ArrowUpRight size={18} className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
          
          <p className="text-sm text-slate-400 mb-6 leading-relaxed">
            {article.summary}
          </p>
          
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            download="WEB SCRAPING FOR AI TRAINING - VINICIUS SOARES.pdf"
            className="flex items-center justify-center gap-2 py-3 px-4 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-xl font-bold text-sm transition-all border border-blue-500/20"
          >
            <Download size={16} />
            Download PDF Article
          </motion.a>
        </div>
      </div>
    </div>
  );
};
