import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Import icons
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function HomePage() {
  const linkedinUrl = 'https://www.linkedin.com/in/aaijmrt/';
  const githubUrl = 'https://github.com/aaijmrt';
  const instagramUrl = 'https://www.instagram.com/aaijmrt/';
  const profileImageUrl = 'https://website-aaijmrt-media.s3.ap-south-1.amazonaws.com/20240625_151151~2.jpg';

  return (
    <div className="flex flex-col items-center justify-center text-center pt-12 animate-fadeIn">
      <Image
        src={profileImageUrl}
        alt="Amit Raj Profile Photo"
        width={160} 
        height={160}
        className="rounded-full mb-6 shadow-lg"
        priority
      />
      <h1 className="text-5xl font-bold mb-3 text-white">
        Amit Raj
      </h1>
      <h2 className="text-2xl text-blue-400 tracking-wider mb-6 font-light">
        Software Engineer
      </h2>
      <p className="text-lg text-slate-300 max-w-lg mb-8">
        Passionate about building scalable software, creating effective solutions, and learning every day.
      </p>
      <hr className="w-2/3 md:w-1/2 border-slate-700 mb-8" />
      <div className="flex space-x-8">
        <Link 
          href={linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={30} />
        </Link>
        <Link 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          aria-label="GitHub Profile"
        >
          <FaGithub size={30} />
        </Link>
        <Link 
          href={instagramUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          aria-label="Instagram Profile"
        >
          <FaInstagram size={30} />
        </Link>
      </div>
    </div>
  );
}
