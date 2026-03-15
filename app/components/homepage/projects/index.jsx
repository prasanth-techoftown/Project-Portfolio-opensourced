
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24 px-4">
 
      <div className="flex flex-col items-center justify-center mb-16">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-violet-500 to-transparent mb-4"></div>
        
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center group">
          <span className="w-14 lg:w-24 h-[2px] bg-[#16f2b3]"></span>
          <span className=" bg-[#1a1443] border border-[#16f2b3] w-fit text-white p-2 px-5 text-xl rounded-md uppercase tracking-widest shadow-[0_0_15px_rgba(22,242,179,0.2)]">
         Crafting  Digital Experiences
          </span>
          <span className="w-14 lg:w-24 h-[2px] bg-[#16f2b3]"></span>
        </div>
      </div>

        {/* <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
          Crafting <span className="text-violet-500">Digital</span> Experiences
        </h2> */}
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-12 lg:gap-24">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              key={index}
              className="sticky top-24 transition-all duration-500"
              style={{ paddingTop: `${index * 20}px` }} // Subtle stacking offset
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
      

      {/* <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-violet-600/10 blur-[120px] rounded-full -z-10"></div> */}
    </div>
  );
};

export default Projects;