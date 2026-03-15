// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import { AiFillThunderbolt } from "react-icons/ai";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
   
      <div className="flex justify-center -z-40">
        <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent"></div>
      </div>

      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-10 lg:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
     
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-xl font-bold tracking-wider">
              PRASANTH<span className="text-[#16f2b3]">.K</span>
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16f2b3] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16f2b3]"></span>
              </span>
              AVAILABLE FOR INNOVATIVE PROJECTS
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-sm flex items-center gap-2">
              Made with <AiFillThunderbolt className="text-[#16f2b3]" /> by 
              <Link 
                target="_blank" 
                href="https://www.linkedin.com/in/followprasanth/" 
                className="text-[#16f2b3] font-semibold hover:underline"
              >
                Prasanth
              </Link>
            </p>
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;