import { Mail, Linkedin, Github } from 'lucide-react';
import profileData from '../../data/profile.json';
import { motion } from 'framer-motion';

export const ContactTile = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center text-center gap-6">
      <div className="space-y-2">
        <h3 className="text-2xl md:text-3xl font-bold text-white">Let's Connect 🤝</h3>
        <p className="text-base text-slate-400 max-w-md mx-auto">
          Open to new opportunities and collaborations. Feel free to reach out on any of these platforms!
        </p>
      </div>
      
      <div className="flex gap-6 mt-2">
        <motion.a 
          whileHover={{ scale: 1.1, translateY: -5 }}
          whileTap={{ scale: 0.9 }}
          href={`mailto:${profileData.socials.email}`} 
          className="p-4 rounded-2xl bg-white/5 border border-white/10 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 shadow-lg shadow-black/20"
          aria-label="Email"
        >
          <Mail size={24} />
        </motion.a>
        
        <motion.a 
          whileHover={{ scale: 1.1, translateY: -5 }}
          whileTap={{ scale: 0.9 }}
          href={profileData.socials.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-4 rounded-2xl bg-white/5 border border-white/10 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 shadow-lg shadow-black/20"
          aria-label="GitHub"
        >
          <Github size={24} />
        </motion.a>
        
        <motion.a 
          whileHover={{ scale: 1.1, translateY: -5 }}
          whileTap={{ scale: 0.9 }}
          href={profileData.socials.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-4 rounded-2xl bg-white/5 border border-white/10 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 shadow-lg shadow-black/20"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </motion.a>
      </div>
    </div>
  );
};
