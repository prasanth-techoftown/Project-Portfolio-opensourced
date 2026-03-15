// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';
import { TbActivityHeartbeat } from 'react-icons/tb';

function BlogCard({ blog }) {
  return (
    <div className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 hover:-translate-y-2 border border-[#16f2b3]/10 hover:border-[#16f2b3]/50">
      
 
      <div className="absolute -inset-0.5 bg-gradient-to-br from-[#16f2b3] to-violet-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col flex-grow bg-[#050b14] h-full overflow-hidden">
        
      
        <div className="relative h-56 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050b14]/40 to-[#050b14] z-10 transition-opacity duration-500 group-hover:opacity-80" />
          
          <Image
            src={blog?.cover_image}
            height={720}
            width={1280}
            alt={blog.title}
            className='h-full w-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]'
          />
          
         
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#050b14]/80 backdrop-blur-md border border-[#16f2b3]/30 text-[#16f2b3] text-[9px] px-2.5 py-1 rounded-sm font-mono tracking-widest shadow-[0_0_10px_rgba(22,242,179,0.2)]">
            <span className="w-1.5 h-1.5 bg-[#16f2b3] animate-pulse"></span>
            [ {blog.reading_time_minutes} MIN_READ ]
          </div>
        </div>

        <div className="p-5 lg:p-6 flex flex-col flex-grow relative z-20">
          
      
          <div className="flex justify-between items-center mb-4 font-mono text-[10px] tracking-wider">
            <span className="text-gray-500 uppercase">
              DAT: {timeConverter(blog.published_at)}
            </span>
            <div className="flex items-center gap-3 text-[#16f2b3]">
              <span className="flex items-center gap-1 bg-[#16f2b3]/5 border border-[#16f2b3]/20 px-2 py-0.5 rounded-sm">
                <TbActivityHeartbeat size={14} className="text-pink-500" />
                {blog.public_reactions_count}
              </span>
              {blog.comments_count > 0 && (
                <span className="flex items-center gap-1 bg-violet-500/5 border border-violet-500/20 px-2 py-0.5 rounded-sm text-violet-400">
                  <FaCommentAlt size={10} />
                  {blog.comments_count}
                </span>
              )}
            </div>
          </div>

        
          <Link target='_blank' href={blog.url}>
            <h3 className='text-xl font-bold text-gray-100 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#16f2b3] group-hover:to-violet-400 transition-all duration-500 mb-3'>
              {blog.title}
            </h3>
          </Link>

          <p className='text-sm text-gray-400 line-clamp-3 mb-6 flex-grow leading-relaxed group-hover:text-gray-300 transition-colors duration-300'>
            {blog.description}
          </p>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5 relative overflow-hidden">
            <Link 
              target='_blank' 
              href={blog.url}
              className="flex items-center gap-2 text-[#16f2b3] text-xs font-bold font-mono uppercase tracking-[0.2em] group/link"
            >
              <span className="relative">
                INIT_READ
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#16f2b3] group-hover/link:w-full transition-all duration-300"></span>
              </span>
              <BsArrowRight className="opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
            </Link>
            
       
            <div className="flex gap-1 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-1 h-3 bg-violet-500"></div>
              <div className="w-0.5 h-3 bg-[#16f2b3]"></div>
              <div className="w-2 h-3 bg-[#16f2b3]"></div>
              <div className="w-1 h-3 bg-violet-500"></div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-[200%] transition-all duration-1000 ease-in-out z-10 pointer-events-none" />
      </div>
    </div>
  );
};

export default BlogCard;