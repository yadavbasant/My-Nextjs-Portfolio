import { FaCode, FaRobot, FaCloud, FaPlug } from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 bg-gradient-to-br from-[#232b3a] via-[#232b3a] to-[#181f2a] scroll-mt-20" aria-label="Services I Provide">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-transparent bg-clip-text">Services I Provide</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">From scalable web apps to intelligent automation, I offer full-cycle development services tailored for modern businesses.</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" role="list" aria-label="Service offerings">
          {/* Full Stack Web Development */}
          <article className="bg-[#232b3a] text-gray-200 rounded-2xl shadow p-8 flex flex-col items-center text-center" role="listitem">
            <FaCode className="text-4xl mb-4 text-cyan-400" aria-hidden="true" />
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-transparent bg-clip-text">Full Stack Web Development</h3>
            <p>End-to-end development using React, Node.js, Next.js, and MongoDB, focused on building fast, scalable, and user-centric applications with clean architecture and optimized performance.</p>
          </article>
          {/* AI Chatbots & Automation */}
          <article className="bg-[#232b3a] text-gray-200 rounded-2xl shadow p-8 flex flex-col items-center text-center" role="listitem">
            <FaRobot className="text-4xl mb-4 text-cyan-400" aria-hidden="true" />
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-transparent bg-clip-text">AI Chatbots & Automation</h3>
            <p>Custom AI-powered chatbots and voicebots using Dialogflow, LLMs, Twilio, and RAG pipelines to enhance user engagement, automate workflows, and reduce manual effort.</p>
          </article>
          {/* Cloud Deployment & DevOps */}
          <article className="bg-[#232b3a] text-gray-200 rounded-2xl shadow p-8 flex flex-col items-center text-center" role="listitem">
            <FaCloud className="text-4xl mb-4 text-cyan-400" aria-hidden="true" />
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-transparent bg-clip-text">Cloud Deployment & DevOps</h3>
            <p>Reliable and secure cloud deployment using AWS, Docker, Nginx, and CI/CD pipelines (GitHub Actions) for seamless releases and scalable infrastructure.</p>
          </article>
          {/* Enterprise API Integrations */}
          <article className="bg-[#232b3a] text-gray-200 rounded-2xl shadow p-8 flex flex-col items-center text-center" role="listitem">
            <FaPlug className="text-4xl mb-4 text-cyan-400" aria-hidden="true" />
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-transparent bg-clip-text">Enterprise API Integrations</h3>
            <p>Seamless integration with Salesforce, Workday, ITSM tools, and LMS platforms, enabling unified systems and smooth data flow across business applications.</p>
          </article>
        </div>
      </div>
    </section>
  );
} 