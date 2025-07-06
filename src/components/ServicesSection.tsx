import { FaCode, FaRobot, FaCloud, FaPlug } from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 bg-gradient-to-br from-[#232b3a] via-[#232b3a] to-[#181f2a] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-transparent bg-clip-text">Services I Provide</h2>
        <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">From scalable web apps to intelligent automation, I offer full-cycle development services tailored for modern businesses.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Full Stack Web Development */}
          <div className="bg-[#232b3a] text-gray-200 rounded-2xl shadow p-8 flex flex-col items-center text-center">
            <FaCode className="text-4xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-transparent bg-clip-text">Full Stack Web Development</h3>
            <p>End-to-end development using React, Node.js, Next.js, and MongoDB, focused on building fast, scalable, and user-centric applications with clean architecture and optimized performance.</p>
          </div>
          {/* AI Chatbots & Automation */}
          <div className="bg-[#232b3a] text-gray-200 rounded-2xl shadow p-8 flex flex-col items-center text-center">
            <FaRobot className="text-4xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-transparent bg-clip-text">AI Chatbots & Automation</h3>
            <p>Custom AI-powered chatbots and voicebots using Dialogflow, LLMs, Twilio, and RAG pipelines to enhance user engagement, automate workflows, and reduce manual effort.</p>
          </div>
          {/* Cloud Deployment & DevOps */}
          <div className="bg-[#232b3a] text-gray-200 rounded-2xl shadow p-8 flex flex-col items-center text-center">
            <FaCloud className="text-4xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-transparent bg-clip-text">Cloud Deployment & DevOps</h3>
            <p>Reliable and secure cloud deployment using AWS, Docker, Nginx, and CI/CD pipelines (GitHub Actions) for seamless releases and scalable infrastructure.</p>
          </div>
          {/* Enterprise API Integrations */}
          <div className="bg-[#232b3a] text-gray-200 rounded-2xl shadow p-8 flex flex-col items-center text-center">
            <FaPlug className="text-4xl mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-transparent bg-clip-text">Enterprise API Integrations</h3>
            <p>Seamless integration with Salesforce, Workday, ITSM tools, and LMS platforms, enabling unified systems and smooth data flow across business applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 