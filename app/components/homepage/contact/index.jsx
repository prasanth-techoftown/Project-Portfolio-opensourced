"use client";
// @flow strict
import { useState } from 'react';
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { MdAlternateEmail, MdContentCopy, MdCheck } from "react-icons/md";
import { TbPlugConnected } from "react-icons/tb";

function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div id="contact" className="my-12 lg:my-24 relative text-white font-mono">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#16f2b3]/5 to-violet-600/5 blur-[100px] rounded-full pointer-events-none z-0"></div>

      {/* Section Header */}
      <div className="flex justify-center mb-16 relative z-10">
        <div className="flex items-center gap-4 group cursor-crosshair">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#16f2b3]"></div>
          <div className="flex items-center gap-2 border border-[#16f2b3]/30 bg-[#050b14] px-6 py-2 rounded-full shadow-[0_0_20px_rgba(22,242,179,0.1)] transition-all duration-300 group-hover:border-[#16f2b3] group-hover:shadow-[0_0_30px_rgba(22,242,179,0.3)]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e15555] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e15555]"></span>
            </span>
            <span className="tracking-[0.3em] uppercase text-sm font-bold text-[#16f2b3]">Secure_Channel_Open</span>
          </div>
          <div className="w-6 lg:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#16f2b3]"></div>
        </div>
      </div>

      {/* Main Terminal UI */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10 max-w-6xl mx-auto px-4">
        
        {/* Left Column: The Uplink (Email) */}
        <div className="flex flex-col gap-6">
          <div className="border border-white/10 bg-[#0a0f1e]/80 backdrop-blur-xl p-6 lg:p-8 rounded-2xl relative overflow-hidden group">
            {/* Hover Sweep */}
            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[#16f2b3]/5 to-transparent skew-x-12 group-hover:left-[200%] transition-all duration-1000"></div>
            
            <h3 className="text-gray-400 text-xs tracking-widest uppercase mb-6 flex items-center gap-2">
              <TbPlugConnected className="text-[#16f2b3]" size={16} />
              Direct Uplink
            </h3>

            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-500">Initiate a direct transmission to my primary server:</p>
              
              {/* Interactive Email Terminal Component */}
              <div className="flex items-center justify-between bg-[#050b14] border border-[#16f2b3]/20 p-4 rounded-xl relative group/email">
                <div className="flex items-center gap-4 overflow-hidden">
                  <div className="bg-[#16f2b3]/10 p-2 rounded-lg text-[#16f2b3]">
                    <MdAlternateEmail size={24} />
                  </div>
                  <span className="text-sm md:text-lg text-gray-200 truncate group-hover/email:text-white transition-colors">
                    {personalData.email}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={handleCopy}
                    className="p-2 bg-white/5 hover:bg-[#16f2b3]/20 border border-white/5 hover:border-[#16f2b3]/50 rounded-lg transition-all duration-300 group/btn relative"
                    aria-label="Copy Email"
                  >
                    {copied ? <MdCheck size={20} className="text-[#16f2b3]" /> : <MdContentCopy size={20} className="text-gray-400 group-hover/btn:text-[#16f2b3]" />}
                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#16f2b3] text-[#050b14] text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity">
                      {copied ? "COPIED!" : "COPY"}
                    </span>
                  </button>
                  <Link 
                    href={`mailto:${personalData.email}`}
                    className="p-2 bg-[#16f2b3]/10 hover:bg-[#16f2b3] border border-[#16f2b3]/30 text-[#16f2b3] hover:text-[#050b14] rounded-lg transition-all duration-300 flex items-center justify-center font-bold text-xs px-4"
                  >
                    LAUNCH
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Neural Network (Socials) */}
        <div className="flex flex-col gap-6">
          <div className="border border-white/10 bg-[#0a0f1e]/80 backdrop-blur-xl p-6 lg:p-8 rounded-2xl relative h-full flex flex-col justify-center">
            
            <h3 className="text-gray-400 text-xs tracking-widest uppercase mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></span>
              Network Nodes
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <IoLogoGithub size={28} />, url: personalData.github, label: "GitHub", color: "hover:text-white hover:border-white hover:bg-white/10" },
                { icon: <BiLogoLinkedin size={28} />, url: personalData.linkedIn, label: "LinkedIn", color: "hover:text-[#0a66c2] hover:border-[#0a66c2] hover:bg-[#0a66c2]/10" },
                { icon: <FaXTwitter size={28} />, url: personalData.twitter, label: "Twitter/X", color: "hover:text-gray-300 hover:border-gray-300 hover:bg-white/10" },
                { icon: <FaFacebook size={28} />, url: personalData.facebook, label: "Facebook", color: "hover:text-[#1877f2] hover:border-[#1877f2] hover:bg-[#1877f2]/10" }
              ].map((social, index) => (
                <Link 
                  key={index} 
                  target="_blank" 
                  href={social.url}
                  className={`flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-white/5 bg-white/5 text-gray-400 transition-all duration-500 group ${social.color}`}
                >
                  <div className="transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
                    {social.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">
                    {social.label}
                  </span>
                </Link>
              ))}
            </div>
            
            {/* Decorative Grid Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;