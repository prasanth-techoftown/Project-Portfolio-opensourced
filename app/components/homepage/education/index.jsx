// @flow strict
import Image from "next/image";
import { educations } from "@/utils/data/educations";
import { FaGraduationCap } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import lottieFile from '/public/lottie/study.json';

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">

      <Image
        src="/section.svg"
        alt="Background Grid"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 opacity-40"
      />

  
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent w-full" />
        </div>
      </div>

 
   
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center group">
          <span className="w-14 lg:w-24 h-[2px] bg-[#16f2b3]"></span>
          <span className=" text-nowrap bg-[#1a1443] border border-[#16f2b3] w-fit text-white p-2 px-5 text-xl rounded-md uppercase tracking-widest shadow-[0_0_15px_rgba(22,242,179,0.2)]">
        Academic Journey
          </span>
          <span className="w-14 lg:w-24 h-[2px] bg-[#16f2b3]"></span>
        </div>
      </div>


      <div className="py-8 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
          <div className="flex justify-center items-center order-2 lg:order-1">
            <div className="w-full lg:w-[85%] relative">
      
              <div className="absolute -inset-4 bg-[#16f2b3]/10 blur-3xl rounded-full animate-pulse"></div>
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex flex-col gap-8 relative">
            
              <div className="absolute left-0 lg:left-[-40px] top-0 h-full w-[1px] bg-gradient-to-b from-[#16f2b3] via-[#e15555] to-transparent hidden lg:block" />

              {educations.map((education, index) => (
                <GlowCard key={education.id} identifier={`education-${education.id}`}>
                  <div className="p-5 relative overflow-hidden group">
                    <Image
                      src="/blur-23.svg"
                      alt="Glow Decor"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 left-0 opacity-20 group-hover:opacity-50 transition-opacity duration-500"
                    />
                    
                   
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-[#16f2b3]/10 border border-[#16f2b3]/30 text-[#16f2b3] text-xs px-3 py-1 rounded-full font-bold">
                        {education.duration}
                      </div>
                      <HiOutlineAcademicCap size={24} className="text-[#e15555] opacity-50" />
                    </div>

                    <div className="flex items-center gap-x-6">
                      <div className="p-3 bg-[#1a1443] border border-[#353951] text-[#16f2b3] rounded-xl transition-all duration-500 group-hover:bg-[#16f2b3] group-hover:text-[#1a1443] group-hover:rotate-[360deg] shadow-lg">
                        <FaGraduationCap size={30} />
                      </div>
                      
                      <div>
                        <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-[#16f2b3] transition-colors">
                          {education.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-400 mt-1 italic">
                          {education.institution}
                        </p>
                      </div>
                    </div>

       
                    <div className="mt-4 h-[2px] w-full bg-[#353951] rounded-full overflow-hidden">
                       <div className="h-full bg-gradient-to-r from-[#16f2b3] to-[#e15555] w-0 group-hover:w-full transition-all duration-1000 ease-out" />
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;