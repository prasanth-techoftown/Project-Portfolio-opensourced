

// @flow strict
import * as React from 'react';
import { ExternalLink } from 'lucide-react'; 
function ProjectCard({ project }) {
  return (
    <div className="group relative w-full rounded-2xl bg-[#0d1224] border border-[#1b2c68a0] p-1 transition-all duration-500 hover:border-violet-500/50">

      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 blur transition duration-500 group-hover:opacity-20"></div>
      
      <div className="relative rounded-xl bg-[#0d1224] p-6 lg:p-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
          
          <div className="flex-1">
       
            <div className="flex items-center gap-3 mb-4">
               <div className="h-2 w-2 rounded-full bg-[#16f2b3] shadow-[0_0_10px_#16f2b3]"></div>
               <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Featured Project</span>
            </div>

            <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4 group-hover:text-[#16f2b3] transition-colors">
              {project.name}
            </h3>

            <p className="text-slate-400 text-sm lg:text-lg leading-relaxed mb-8 max-w-xl">
              {project.description}
            </p>

            <div className="inline-flex items-center rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400 ring-1 ring-inset ring-violet-500/20 mb-6">
              {project.role}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tools.map((tag, i) => (
                <span 
                  key={i}
                  className="rounded-md bg-[#1a1443] px-3 py-1 text-xs font-mono text-[#16f2b3] border border-violet-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex justify-end">
             <div className="relative group/icon cursor-pointer">
                <div className="p-4 rounded-xl bg-[#1a1443] border border-white/5 hover:bg-violet-600 transition-all">
                   <ExternalLink className="text-white w-6 h-6" />
                </div>
             </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;