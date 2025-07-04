import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-700 pt-12 pb-4 bg-[#181f2a]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-12 md:gap-0">
        {/* Portfolio Info */}
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="text-xl font-bold text-white mb-2">Portfolio</h3>
          <p className="text-gray-300 mb-2">Full Stack Developer with 9+ years of experience in MERN stack, Next.js, AI chatbots, and cloud-native deployments.</p>
          <p className="text-gray-400 mb-2">Passionate about building scalable, high-performance web solutions.</p>
          <p className="text-gray-400 mb-4">Let&apos;s create something impactful together.</p>
          <div className="flex gap-4 mt-2">
            <a href="https://www.linkedin.com/in/basantkumar2/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#0f2027] to-[#00c6ff] p-2 rounded-full text-white text-lg flex items-center justify-center shadow hover:opacity-80 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/yadavbasant" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#0f2027] to-[#00c6ff] p-2 rounded-full text-white text-lg flex items-center justify-center shadow hover:opacity-80 transition">
              <FaGithub />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex-1 mb-8 md:mb-0">
          <h4 className="text-lg font-bold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="text-gray-300 hover:text-[#0f2027] transition">Home</a></li>
            <li><a href="#about" className="text-gray-300 hover:text-[#0f2027] transition">About</a></li>
            <li><a href="#skills" className="text-gray-300 hover:text-[#0f2027] transition">Skills</a></li>
            <li><a href="#experience" className="text-gray-300 hover:text-[#0f2027] transition">Experience</a></li>
            <li><a href="#projects" className="text-gray-300 hover:text-[#0f2027] transition">Projects</a></li>
            <li><a href="#contact" className="text-gray-300 hover:text-[#0f2027] transition">Contact</a></li>
          </ul>
        </div>
        {/* Technologies */}
        <div className="flex-1">
          <h4 className="text-lg font-bold text-white mb-3">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 'NestJS', 'TypeScript', 'JavaScript', 'GraphQL', 'Docker', 'AWS', 'Nginx', 'Redis', 'Elasticsearch', 'FastAPI', 'CI/CD', 'GitHub Actions'].map(tech => (
              <span key={tech} className="bg-[#232b3a] text-gray-200 px-4 py-1 rounded-md text-sm font-semibold border border-gray-700">{tech}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Portfolio. Basant Kumar. All rights reserved.
      </div>
    </footer>
  );
} 