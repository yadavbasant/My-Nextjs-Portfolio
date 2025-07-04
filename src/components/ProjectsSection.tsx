import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-transparent bg-clip-text">Featured Projects</h2>
        <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-[#0f2027] via-[#2c5364] to-[#00c6ff] rounded-full"></div>
        <p className="text-center text-gray-300 mb-10">Here are some of my recent projects that showcase my expertise in full-stack development</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1: AI Chatbot & VoiceBot Platform */}
          <div className="bg-[#232b3a] text-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image src="/profile.jpeg" alt="AI Chatbot & VoiceBot Platform" width={400} height={192} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#232b3a] via-transparent to-transparent opacity-80"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">AI Chatbot & VoiceBot Platform</h3>
              <p className="text-gray-300 mb-4 flex-1">AI-powered chatbot and voice assistant system built with Dialogflow and LLMs, integrated into enterprise helpdesk workflows. Included backend with Node.js, real-time messaging with Twilio, and enterprise integrations with Salesforce and LMS systems. Deployed using Docker and AWS with CI/CD pipelines.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js", "Dialogflow", "Twilio", "MongoDB", "Docker"].map(tech => (
                  <span key={tech} className="bg-[#2d3650] text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold">{tech}</span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <a href="#" className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-white font-semibold shadow hover:from-[#2c5364] hover:to-[#00c6ff] transition">🔗 Live Demo</a>
                <a href="#" className="px-4 py-2 rounded-lg bg-[#232b3a] border border-gray-600 text-gray-200 font-semibold hover:bg-[#2d3650] transition">💻 Code</a>
              </div>
            </div>
          </div>
          {/* Project 2: OneStop Student Helpdesk System */}
          <div className="bg-[#232b3a] text-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image src="/profile.jpeg" alt="OneStop Student Helpdesk System" width={400} height={192} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#232b3a] via-transparent to-transparent opacity-80"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">OneStop Student Helpdesk System</h3>
              <p className="text-gray-300 mb-4 flex-1">Unified full-stack helpdesk platform used by universities. Developed with React frontend and Node.js backend, integrated multiple ticketing and SIS systems like Banner, TeamDynamix, and TopDesk. Focused on performance, authentication, and user experience.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "MongoDB", "Docker", "Nginx"].map(tech => (
                  <span key={tech} className="bg-[#2d3650] text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold">{tech}</span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <a href="#" className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-white font-semibold shadow hover:from-[#2c5364] hover:to-[#00c6ff] transition">🔗 Live Demo</a>
                <a href="#" className="px-4 py-2 rounded-lg bg-[#232b3a] border border-gray-600 text-gray-200 font-semibold hover:bg-[#2d3650] transition">💻 Code</a>
              </div>
            </div>
          </div>
          {/* Project 3: Live Streaming & Chat Application */}
          <div className="bg-[#232b3a] text-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image src="/profile.jpeg" alt="Live Streaming & Chat Application" width={400} height={192} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#232b3a] via-transparent to-transparent opacity-80"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">Live Streaming & Chat Application</h3>
              <p className="text-gray-300 mb-4 flex-1">Real-time communication platform with live video calling, chat, and streaming features using Agora SDK and WebRTC. Frontend built with React, backend with Node.js and MongoDB. Ensured seamless performance and responsive UI.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "WebRTC", "MongoDB", "Agora SDK"].map(tech => (
                  <span key={tech} className="bg-[#2d3650] text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold">{tech}</span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <a href="#" className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-white font-semibold shadow hover:from-[#2c5364] hover:to-[#00c6ff] transition">🔗 Live Demo</a>
                <a href="#" className="px-4 py-2 rounded-lg bg-[#232b3a] border border-gray-600 text-gray-200 font-semibold hover:bg-[#2d3650] transition">💻 Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 