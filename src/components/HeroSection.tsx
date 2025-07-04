import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section id="home" className="w-full bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#00c6ff] py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-center z-10 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">Full Stack Developer</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-purple-200 mb-6">MERN Stack &bull; Next.js &bull; AI Chatbots &bull; Scalable Architectures</h2>
          <p className="mb-8 text-lg text-gray-100 max-w-xl">9+ years of experience in building scalable web apps, leading teams, and delivering cloud-based and AI-powered solutions.</p>
          <div className="flex gap-4 mb-8">
            <a href="https://www.linkedin.com/in/basantkumar2/" target="_blank" rel="noopener noreferrer" className="border-2 border-white/40 hover:border-cyan-400 text-white hover:text-cyan-200 rounded-full p-3 text-2xl transition"><FaLinkedin /></a>
            <a href="https://github.com/yadavbasant" target="_blank" rel="noopener noreferrer" className="border-2 border-white/40 hover:border-cyan-400 text-white hover:text-cyan-200 rounded-full p-3 text-2xl transition"><FaGithub /></a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-white font-semibold text-lg shadow hover:from-[#2c5364] hover:to-[#00c6ff] transition text-center">Get In Touch</a>
            <a href="#projects" className="px-8 py-3 rounded-lg border-2 border-white/60 text-white font-semibold text-lg hover:border-cyan-400 hover:text-cyan-200 transition text-center">View Projects</a>
          </div>
        </div>
        {/* Right: Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0 relative z-10">
          <div className="relative inline-block">
            <Image src="/profile.jpeg" alt="Profile" width={256} height={256} className="w-56 h-56 md:w-64 md:h-64 rounded-full border-8 border-white shadow-xl object-cover" />
            {/* Dev Badge */}
            <span className="absolute -top-4 -right-4 bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-white font-bold px-6 py-2 rounded-full text-lg shadow-lg">Dev</span>
          </div>
        </div>
        {/* Optional: Decorative gradient overlay for extra effect */}
        <div className="absolute inset-0 z-0" style={{background: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 70%)"}}></div>
      </div>
    </section>
  );
} 