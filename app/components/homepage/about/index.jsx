"use client";
// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { RiFingerprintLine, RiInformationLine, RiPulseLine } from "react-icons/ri";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-24 relative overflow-hidden">
   
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 -z-10">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#16f2b3]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-600/10 blur-[150px] rounded-full"></div>
      </div>

     
      <div className="hidden lg:flex flex-col items-center absolute top-0 -right-12">
        <span className="bg-[#050b14] border border-[#16f2b3]/30 w-fit text-[#16f2b3] rotate-90 p-2 px-8 mt-[10rem] text-sm font-mono tracking-[0.5em] rounded-md uppercase backdrop-blur-md">
          CORE_IDENTITY
        </span>
        <div className="h-48 w-[1px] bg-gradient-to-b from-[#16f2b3] to-transparent mt-12"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto px-4">
        
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative group">
          
            <div className="absolute -top-4 -left-4 w-10 h-10 border-t-2 border-l-2 border-[#16f2b3] z-20 transition-all group-hover:-top-2 group-hover:-left-2"></div>
            <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-2 border-r-2 border-[#16f2b3] z-20 transition-all group-hover:-bottom-2 group-hover:-right-2"></div>
            
              <div className="absolute -inset-1 bg-gradient-to-r from-[#16f2b3] to-violet-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0f1e]">
              <Image
                src={personalData.profile}
                width={450}
                height={450}
                alt="Prasanth System Profile"
                className="relative grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              
           
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#16f2b3]/20 to-transparent h-1/4 w-full top-[-25%] animate-scanline pointer-events-none z-30"></div>
              
              
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/5 font-mono text-[9px] text-[#16f2b3] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex justify-between mb-1">
                  <span>ID: PRASANTH_K</span>
                  <span>STATUS: LEAD_DEV</span>
                </div>
                <div className="w-full bg-white/10 h-1">
                  <div className="bg-[#16f2b3] h-full w-[98%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-4 mb-8">
            <RiFingerprintLine className="text-[#16f2b3]" size={40} />
            <div>
              <h2 className="text-2xl lg:text-4xl font-bold text-white tracking-tight">
                WHO_IS_<span className="text-[#16f2b3]">PRASANTH?</span>
              </h2>
              <p className="text-[10px] font-mono text-gray-500 tracking-[0.3em] uppercase">Authorized Access Only</p>
            </div>
          </div>

          <div className="space-y-8 text-gray-300">
            <p className="leading-relaxed border-l-2 border-[#16f2b3]/30 pl-6 text-lg">
              Prasanth is a <span className="text-white font-bold">Software Engineer</span> who translates complex problems into elegant digital architecture. His trajectory is a testament to <span className="text-[#16f2b3]">radical ownership</span> and resilience.
            </p>

         
            <div className="relative">
            
              <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-white/10"></div>

              <div className="space-y-10 pl-10 relative">
                {[
                  {
                    num: "01",
                    title: "RESILIENCE_PHASE",
                    desc: "From a bookstore employee to mastering the science of Gelato as a dessert chef. Supporting family while engineering a vision for the future."
                  },
                  {
                    num: "02",
                    title: "THE_TURNING_POINT",
                    desc: "12th grade exams cleared in 30 days. One HTML image tag sparked a fire that pivoted a career from Veterinary science to Software Innovation."
                  },
                  {
                    num: "03",
                    title: "LEADERSHIP_NODE",
                    desc: "Leading high-impact dev teams and mentoring 200+ students. From a hotel hobby project to architecting scalable systems."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative group/item">
                    {/* Node Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-white/20 border border-black group-hover/item:bg-[#16f2b3] group-hover/item:shadow-[0_0_10px_#16f2b3] transition-all"></div>
                    
                    <h4 className="text-[#16f2b3] font-mono text-xs tracking-widest mb-2 flex items-center gap-2">
                      <span className="text-gray-600">[{item.num}]</span> {item.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed group-hover/item:text-gray-200 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

      
            <div className="relative p-6 rounded-xl bg-white/5 border border-white/10 group overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-10">
                <RiPulseLine size={60} className="text-[#16f2b3]" />
              </div>
              <p className="italic text-gray-300 relative z-10 font-medium">
                &quot;Optimization is a lifestyle. Every cycle, I aim to improve by 2-3%. I don&apos;t just write functions; I mentor the next generation of engineers to find their footing.&quot;
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#16f2b3] group-hover:w-full transition-all duration-700"></div>
            </div>
          </div>
        </div>

      </div>
  </div>
  );
}

export default AboutSection;