
"use client";
// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill, RiTerminalLine } from "react-icons/ri";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-8 lg:py-20 overflow-hidden">

      <Image
        src="/hero.svg"
        alt="Hero Background"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10 opacity-40"
      />
      
      
      <div className="absolute top-0 left-[10%] w-[300px] h-[300px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-[#16f2b3]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-16 gap-y-12 max-w-7xl mx-auto px-4">
        
  
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center animate-fade-in-up">
          
       
          <div className="flex items-center gap-2 border border-[#16f2b3]/30 bg-[#16f2b3]/5 px-3 py-1 rounded-full mb-6 transition-all hover:border-[#16f2b3]/60">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16f2b3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16f2b3]"></span>
            </span>
            <span className="text-[#16f2b3] text-[10px] uppercase tracking-[0.2em] font-mono">System_Online: Ready to Build</span>
          </div>

          <h1 className="font-bold text-white leading-tight text-3xl md:text-5xl lg:text-6xl">
            Hello, <br />
            I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-violet-600 animate-gradient-x">{personalData.name}</span>
          </h1>

          <div className="h-20 md:h-24 mt-4">
             <h2 className="text-xl md:text-3xl font-medium flex flex-wrap gap-2">
                <span className="text-white">A Professional</span>
                <span className="text-[#16f2b3] border-b-2 border-[#16f2b3]/30 pb-1">
                  {personalData.designation}
                </span>
             </h2>
             <p className="text-red-500 font-mono text-lg mt-2 tracking-tighter">
                &lt; Mentor & Public Speaker /&gt;
             </p>
          </div>

          <p className="text-gray-400 max-w-md text-sm mt-8 md:text-base leading-relaxed md:mt-2">
            Architecting <span className="text-white">scalable backend systems</span> and crafting seamless digital experiences. Dedicated to the 1% daily growth rule.
          </p>


          <div className="my-10 flex items-center gap-6">
            {[
              { icon: <BsGithub size={28} />, href: personalData.github, label: "GitHub" },
              { icon: <BsLinkedin size={28} />, href: personalData.linkedIn, label: "LinkedIn" },
              { icon: <FaXTwitter size={28} />, href: personalData.twitter, label: "Twitter" },
              { icon: <FaFacebook size={28} />, href: personalData.facebook, label: "Facebook" }
            ].map((social, i) => (
              <Link
                key={i}
                href={social.href}
                target='_blank'
                className="text-gray-400 hover:text-pink-500 transform hover:scale-125 hover:-translate-y-1 transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href={`mailto:${personalData.email}?subject=Contact from Portfolio`}
              className="group relative flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] w-full sm:w-auto overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-white/10 -translateX-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
              <RiContactsFill size={20} />
              <span>Get In Touch</span>
            </Link>

            {/* <Link
              href={personalData.resume}
              target="_blank"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-all w-full sm:w-auto"
            >
              <MdDownload size={20} />
              <span>Get Resume</span>
            </Link> */}
          </div>
        </div>

        
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative group">
   
          <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-[#16f2b3]/20 rounded-tl-3xl hidden md:block"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-pink-500/20 rounded-br-3xl hidden md:block"></div>

      
          <div className="relative">
         
            <div className="absolute -inset-1 bg-gradient-to-tr from-pink-600 via-[#16f2b3] to-violet-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>

            <div className="relative bg-[#0d1224] rounded-3xl p-3 border border-white/10 shadow-2xl overflow-hidden">
              
         
              <div className="flex items-center justify-between px-4 py-2 bg-white/5 rounded-t-xl mb-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#e15555]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#16f2b3]"></div>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono">
                  <RiTerminalLine />
                  LIVE_FEED.MP4
                </div>
              </div>

              <iframe
                className="rounded-xl w-[260px] h-[460px] md:w-[300px] md:h-[520px] lg:w-[320px] lg:h-[570px] xl:w-[280px] xl:h-[470px] 2xl:w-[300px] 2xl:h-[540px] grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                src="https://www.youtube.com/embed/KlH7DhoHoDM?autoplay=1&mute=1&loop=1&playlist=KlH7DhoHoDM"
                title="Prasanth K Software Engineering"
                loading="lazy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

    
              <div className="absolute bottom-6 left-6 right-6 p-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex justify-between text-[10px] font-mono text-[#16f2b3]">
                  <span>LAT: 13.0827° N</span>
                  <span>LON: 80.2707° E</span>
                </div>
                <div className="w-full bg-white/10 h-[2px] mt-2 overflow-hidden">
                  <div className="bg-[#16f2b3] h-full w-1/2 animate-shimmer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;