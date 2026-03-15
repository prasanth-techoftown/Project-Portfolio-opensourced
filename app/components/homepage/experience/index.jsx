// @flow strict
import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import codeAnimation from '/public/lottie/code.json';

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
    
      <Image
        src="/section.svg"
        alt="Hero Background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 opacity-30"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center group">
          <span className="w-14 lg:w-24 h-[2px] bg-[#16f2b3]"></span>
          <span className="text-nowrap bg-[#1a1443] border border-[#16f2b3] w-fit text-white p-2 px-5 text-xl rounded-md uppercase tracking-widest shadow-[0_0_15px_rgba(22,242,179,0.2)]">
            Professional Journey
          </span>
          <span className="w-14 lg:w-24 h-[2px] bg-[#16f2b3]"></span>
        </div>
      </div>

      <div className="py-8 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
          <div className="flex justify-center items-center">
            <div className="w-full lg:w-[90%] relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full blur-2xl opacity-10 animate-pulse"></div>
              <AnimationLottie animationPath={codeAnimation} />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {experiences.map((experience) => (
              <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                <div className="p-5 relative overflow-hidden group">
                
                  <Image
                    src="/blur-23.svg"
                    alt="Design Element"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 left-0 opacity-20 transition-opacity duration-500 group-hover:opacity-60 pointer-events-none"
                  />
                  
              
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-xs sm:text-sm text-[#16f2b3] font-mono tracking-tighter bg-[#16f2b3]/5 px-2 py-1 rounded">
                      {experience.duration}
                    </p>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                      </span>
                      Active Growth
                    </div>
                  </div>

                  <div className="flex items-start gap-x-6 relative z-10">
                    <div className="text-violet-500 p-3 bg-violet-500/5 rounded-2xl border border-violet-500/20 transition-all duration-500 group-hover:bg-violet-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                      <BsPersonWorkspace size={32} />
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-lg sm:text-2xl font-bold text-white group-hover:text-[#16f2b3] transition-colors duration-300 leading-tight">
                        {experience.title}
                      </p>
                      <p className="text-sm sm:text-base text-gray-400 font-medium mt-1">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                    <HiOutlineRocketLaunch className="text-[#e15555]" />
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-[#e15555] via-violet-500 to-transparent"></div>
                    <span className="text-[9px] text-gray-500 uppercase font-mono tracking-tighter italic">
                      Ownership_Verified
                    </span>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;