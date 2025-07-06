"use client";
import Image from "next/image";
import { useState } from "react";
import ProjectInsightsModal from "./ProjectInsightsModal";
import ScreenshotsModal from "./ScreenshotsModal";

const projects = [
  {
    title: "AI Chatbot & VoiceBot Platform",
    description:
      "AI-powered chatbot and voice assistant system built with Dialogflow and LLMs, integrated into enterprise helpdesk workflows. Included backend with Node.js, real-time messaging with Twilio, and enterprise integrations with Salesforce and LMS systems. Deployed using Docker and AWS with CI/CD pipelines.",
    tech: ["Node.js", "Dialogflow", "Twilio", "MongoDB", "Docker"],
    insights: {
      title: "AI Chatbot & VoiceBot Platform",
      role: "Technical Lead & Full Stack Developer. Led a team of 5 engineers, architected and implemented the entire chatbot and voicebot platform.",
      challenges: "Integrating multiple enterprise APIs (Salesforce, LMS), ensuring real-time performance, and scaling to thousands of users.",
      features: "Conversational AI, voice and text support, real-time messaging, admin dashboard, analytics, multi-channel integration (web, SMS, voice).",
      impact: "Reduced manual support workload by 50%, improved response time by 40%, enabled 24/7 support for enterprise clients.",
      techStack: "Node.js, Dialogflow, Twilio, MongoDB, Docker, AWS, React, TypeScript, CI/CD",
    },
    insightsImage: "/profile.jpeg",
    screenshots: [
      "/profile.jpeg", "/about.webp", "/profile.jpeg", "/about.webp", "/profile.jpeg", "/about.webp", "/profile.jpeg", "/about.webp", "/profile.jpeg", "/about.webp"
    ],
  },
  {
    title: "OneStop Student Helpdesk System",
    description:
      "Unified full-stack helpdesk platform used by universities. Developed with React frontend and Node.js backend, integrated multiple ticketing and SIS systems like Banner, TeamDynamix, and TopDesk. Focused on performance, authentication, and user experience.",
    tech: ["React", "Node.js", "MongoDB", "Docker", "Nginx"],
    insights: {
      title: "OneStop Student Helpdesk System",
      role: "Full Stack Developer. Built core ticketing features, integrated authentication, and improved UI/UX.",
      challenges: "Integrating with legacy SIS systems, ensuring secure authentication, and optimizing for high concurrency.",
      features: "Ticket management, knowledge base, SSO, real-time notifications, reporting dashboard.",
      impact: "Streamlined student support, improved ticket resolution time by 30%, increased student satisfaction.",
      techStack: "React, Node.js, MongoDB, Docker, Nginx, SSO, REST APIs",
    },
    insightsImage: "/about.webp",
    screenshots: [
      "/about.webp", "/profile.jpeg", "/about.webp", "/profile.jpeg", "/about.webp", "/profile.jpeg", "/about.webp", "/profile.jpeg", "/about.webp", "/profile.jpeg"
    ],
  },
  {
    title: "Live Streaming & Chat Application",
    description:
      "Real-time communication platform with live video calling, chat, and streaming features using Agora SDK and WebRTC. Frontend built with React, backend with Node.js and MongoDB. Ensured seamless performance and responsive UI.",
    tech: ["React", "Node.js", "WebRTC", "MongoDB", "Agora SDK"],
    insights: {
      title: "Live Streaming & Chat Application",
      role: "Senior Engineer. Developed live streaming, chat, and collaboration features. Optimized for low latency.",
      challenges: "Ensuring low-latency video, handling high concurrent users, and cross-browser compatibility.",
      features: "Live video streaming, group chat, screen sharing, recording, user management.",
      impact: "Enabled real-time collaboration for events and webinars, increased user engagement by 25%.",
      techStack: "React, Node.js, WebRTC, MongoDB, Agora SDK, Socket.io",
    },
    insightsImage: "/profile.jpeg",
    screenshots: [
      "/profile.jpeg", "/about.webp", "/profile.jpeg", "/about.webp", "/profile.jpeg", "/about.webp", "/profile.jpeg", "/about.webp", "/profile.jpeg", "/about.webp"
    ],
  },
];

export default function ProjectsSection() {
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [screenshotsOpen, setScreenshotsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const openInsights = (idx: number) => {
    setActiveProject(idx);
    setInsightsOpen(true);
  };
  const openScreenshots = (idx: number) => {
    setActiveProject(idx);
    setScreenshotsOpen(true);
  };
  const closeModals = () => {
    setInsightsOpen(false);
    setScreenshotsOpen(false);
    setActiveProject(null);
  };

  return (
    <section id="projects" className="w-full py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-transparent bg-clip-text">Featured Projects</h2>
        <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-[#0f2027] via-[#2c5364] to-[#00c6ff] rounded-full"></div>
        <p className="text-center text-gray-300 mb-10">Here are some of my recent projects that showcase my expertise in full-stack development</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div key={project.title} className="bg-[#232b3a] text-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col">
              <div
                className="relative h-48 w-full cursor-pointer group"
                onClick={() => openScreenshots(idx)}
                title="View Screenshots"
              >
                <Image 
                  src={project.insightsImage} 
                  alt={`${project.title} - Project Screenshot`} 
                  width={400} 
                  height={192} 
                  className="object-cover w-full h-full group-hover:opacity-80 transition"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#232b3a] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-2 right-2 bg-black/60 text-cyan-200 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">View Screenshots</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="bg-[#2d3650] text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  <button
                    className="flex items-center gap-1 px-3 py-1 rounded-md border border-cyan-400 text-cyan-300 bg-transparent text-sm font-medium hover:bg-cyan-900/30 transition"
                    onClick={() => openInsights(idx)}
                    title="Project Insights"
                  >
                    <span aria-hidden>💡</span> Insights
                  </button>
                  <button
                    className="flex items-center gap-1 px-3 py-1 rounded-md border border-gray-600 text-gray-300 bg-transparent text-sm font-medium hover:bg-gray-700/40 transition"
                    onClick={() => openScreenshots(idx)}
                    title="Screenshots"
                  >
                    <span aria-hidden>🖼</span> Shots
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {activeProject !== null && (
          <>
            <ProjectInsightsModal
              open={insightsOpen}
              onClose={closeModals}
              image={projects[activeProject].insightsImage}
              details={projects[activeProject].insights}
            />
            <ScreenshotsModal
              open={screenshotsOpen}
              onClose={closeModals}
              images={projects[activeProject].screenshots}
            />
          </>
        )}
      </div>
    </section>
  );
} 