import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaProjectDiagram, FaCode, FaDraftingCompass, FaLaptopCode, FaRobot, FaCloud, FaPlug } from "react-icons/fa";

export default function Home() {
  return (
    <main className="pt-24 w-full min-h-screen bg-[#181f2a] font-sans">
      {/* Home / Hero Section */}
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
              <img src="/profile.jpeg" alt="Profile" className="w-56 h-56 md:w-64 md:h-64 rounded-full border-8 border-white shadow-xl object-cover" />
              {/* Dev Badge */}
              <span className="absolute -top-4 -right-4 bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-white font-bold px-6 py-2 rounded-full text-lg shadow-lg">Dev</span>
            </div>
          </div>
          {/* Optional: Decorative gradient overlay for extra effect */}
          <div className="absolute inset-0 z-0" style={{background: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 70%)"}}></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Left: Text Content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-cyan-400">About Me</h2>
            <div className="space-y-6 text-gray-300 text-lg">
              <p>I'm a Senior Full Stack Developer and Tech Lead with over 9 years of experience in designing and building modern web applications. I specialize in the MERN stack, Next.js, NestJS, and cloud deployment on AWS, with hands-on expertise in AI chatbots, microservices, and enterprise integrations.</p>
              <p>I've led high-performing teams, optimized large-scale systems, and built solutions integrated with platforms like Salesforce, LMSs, and ITSM tools. I'm passionate about clean architecture, performance optimization, and leveraging AI to solve real-world problems. Currently, I'm focused on building scalable, secure, and intelligent applications for remote-first teams.</p>
              <p>I thrive on staying at the forefront of technology, continuously learning, and delivering impactful solutions that drive business success. My goal is to empower teams and clients with robust, future-ready digital products.</p>
            </div>
            <div className="mt-10">
              <a
                href="https://wa.me/918107968482?text=Hi%20Basant%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect." target="_blank" rel="noopener noreferrer"
                className="inline-block border-2 border-green-400 text-green-400 px-6 py-2 rounded-lg font-semibold text-lg hover:bg-green-400 hover:text-dark transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
          {/* Right: Profile Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg w-80 h-96 flex items-center justify-center">
              <img src="/about.webp" alt="Profile" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-20 bg-gradient-to-br from-[#232b3a] via-[#232b3a] to-[#181f2a]">
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

      {/* Skills Section */}
      <section id="skills" className="w-full py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative flex flex-col items-center mb-0">
            <div className="bg-[#232b3a] text-gray-200 border-2 border-cyan-400 rounded-lg px-8 py-2 text-2xl md:text-3xl font-extrabold text-center text-cyan-300 shadow mb-0 z-10">MY SKILLS</div>
          </div>
          <div className="relative h-16 mb-8">
            <svg className="hidden md:block absolute left-1/2 -translate-x-1/2 z-0" width="700" height="60" viewBox="0 0 700 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M350 0 V30" stroke="#00c6ff" strokeWidth="4"/>
              <path d="M350 30 C350 50, 100 50, 100 60" stroke="#00c6ff" strokeWidth="4" fill="none"/>
              <path d="M350 30 C350 50, 350 50, 350 60" stroke="#00c6ff" strokeWidth="4" fill="none"/>
              <path d="M350 30 C350 50, 600 50, 600 60" stroke="#00c6ff" strokeWidth="4" fill="none"/>
              {/* Arrowheads */}
              <polygon points="100,60 95,55 105,55" fill="#00c6ff"/>
              <polygon points="350,60 345,55 355,55" fill="#00c6ff"/>
              <polygon points="600,60 595,55 605,55" fill="#00c6ff"/>
            </svg>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12">
            {/* Frontend Section */}
            <div className="flex-1 flex flex-col items-center">
              <div className="bg-[#232b3a] text-gray-200 border-2 border-cyan-400 rounded-lg px-6 py-2 text-lg font-bold text-cyan-300 mb-4">Frontend</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['React', 'NextJS', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind', 'MaterialUI'].map(skill => (
                  <span key={skill} className="bg-[#232b3a] text-gray-200 border border-cyan-200 text-cyan-300 px-4 py-2 rounded-md font-semibold text-xs shadow-sm text-center">{skill}</span>
                ))}
              </div>
            </div>
            {/* Backend Section */}
            <div className="flex-1 flex flex-col items-center">
              <div className="bg-[#232b3a] text-gray-200 border-2 border-blue-400 rounded-lg px-6 py-2 text-lg font-bold text-blue-300 mb-4">Backend</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['NodeJS', 'Express', 'NestJS', 'FastAPI', 'PHP', 'Python', 'GraphQL', 'Kafka', 'REST', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch'].map(skill => (
                  <span key={skill} className="bg-[#232b3a] text-gray-200 border border-blue-200 text-blue-300 px-4 py-2 rounded-md font-semibold text-xs shadow-sm text-center">{skill}</span>
                ))}
              </div>
            </div>
            {/* Tools/Other Section */}
            <div className="flex-1 flex flex-col items-center">
              <div className="bg-[#232b3a] text-gray-200 border-2 border-pink-400 rounded-lg px-6 py-2 text-lg font-bold text-pink-200 mb-4">Tools & Others</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['Docker', 'AWS', 'Nginx', 'CI/CD', 'GitHubActions', 'Dialogflow', 'Twilio', 'OAuth', 'SSO', 'Jira', 'Salesforce', 'Workday', 'LMS', 'ITSM', 'OpenSearch', 'RAG', 'LLM'].map(skill => (
                  <span key={skill} className="bg-[#232b3a] text-gray-200 border border-pink-200 text-pink-200 px-4 py-2 rounded-md font-semibold text-xs shadow-sm text-center">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full py-20 bg-gradient-to-br from-[#232b3a] via-[#232b3a] to-[#181f2a]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-transparent bg-clip-text">Experience</h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-[#0f2027] via-[#2c5364] to-[#00c6ff] rounded-full"></div>
          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0f2027] via-[#2c5364] to-[#00c6ff] rounded-full opacity-70" style={{zIndex:0}}></div>
            <div className="space-y-12 pl-12">
              {/* Experience 1 */}
              <div className="relative bg-[#232b3a] rounded-2xl shadow-lg p-8">
                {/* Timeline dot */}
                <div className="absolute -left-8 top-8 w-5 h-5 bg-gradient-to-br from-[#0f2027] to-[#00c6ff] rounded-full border-4 border-[#181f2a]" style={{zIndex:1}}></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">Technical Lead & Senior Full Stack Developer</h3>
                  <span className="text-md font-semibold text-cyan-400 mt-2 md:mt-0">2024 – Present</span>
                </div>
                <span className="text-cyan-300 font-semibold mb-2 inline-block">BlackBeltHelp</span>
                <p className="text-gray-300 mb-4">Spearheaded the development of AI-powered Chatbots and VoiceBots using Dialogflow, Twilio, and Generative AI. Led a team in delivering enterprise integrations and optimizing scalable APIs using Node.js, MongoDB, Redis, and Elasticsearch.</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  <li className="marker:text-cyan-400">Improved API response time by 40%</li>
                  <li className="marker:text-cyan-400">Reduced manual data processing by 50%</li>
                  <li className="marker:text-cyan-400">Managed AWS deployments using Docker Swarm & CI/CD pipelines</li>
                </ul>
              </div>
              {/* Experience 2 */}
              <div className="relative bg-[#232b3a] rounded-2xl shadow-lg p-8">
                <div className="absolute -left-8 top-8 w-5 h-5 bg-gradient-to-br from-[#0f2027] to-[#00c6ff] rounded-full border-4 border-[#181f2a]" style={{zIndex:1}}></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">🧠 Senior Full Stack Developer</h3>
                  <span className="text-md font-semibold text-cyan-400 mt-2 md:mt-0">2021 – 2024</span>
                </div>
                <span className="text-cyan-300 font-semibold mb-2 inline-block">BlackBeltHelp</span>
                <p className="text-gray-300 mb-4">Built and maintained the OneStop student helpdesk platform with React and Node.js. Designed integrations with Salesforce, Banner, and other SIS systems. Enhanced backend chatbot logic using microservices and cloud tools.</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  <li className="marker:text-cyan-400">Improved application load time</li>
                  <li className="marker:text-cyan-400">Integrated MFA & secure authentication flows</li>
                  <li className="marker:text-cyan-400">Trained and mentored new developers</li>
                </ul>
              </div>
              {/* Experience 3 */}
              <div className="relative bg-[#232b3a] rounded-2xl shadow-lg p-8">
                <div className="absolute -left-8 top-8 w-5 h-5 bg-gradient-to-br from-[#0f2027] to-[#00c6ff] rounded-full border-4 border-[#181f2a]" style={{zIndex:1}}></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">💻 Senior Software Engineer</h3>
                  <span className="text-md font-semibold text-cyan-400 mt-2 md:mt-0">2020 – 2021</span>
                </div>
                <span className="text-cyan-300 font-semibold mb-2 inline-block">BigStep Technologies</span>
                <p className="text-gray-300 mb-4">Developed real-time apps for video calling and live chat using WebRTC (Agora SDK). Focused on frontend optimization and backend API performance with Node.js, MongoDB, and PHP.</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  <li className="marker:text-cyan-400">Built highly responsive UI with React</li>
                  <li className="marker:text-cyan-400">Created test suites using Jest & Enzyme</li>
                  <li className="marker:text-cyan-400">Mentored junior team members</li>
                </ul>
              </div>
              {/* Experience 4 */}
              <div className="relative bg-[#232b3a] rounded-2xl shadow-lg p-8">
                <div className="absolute -left-8 top-8 w-5 h-5 bg-gradient-to-br from-[#0f2027] to-[#00c6ff] rounded-full border-4 border-[#181f2a]" style={{zIndex:1}}></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">💻 Software Engineer</h3>
                  <span className="text-md font-semibold text-cyan-400 mt-2 md:mt-0">2016 – 2020</span>
                </div>
                <span className="text-cyan-300 font-semibold mb-2 inline-block">BigStep Technologies</span>
                <p className="text-gray-300 mb-4">Worked on SocialEngine PHP CMS plugins and full-stack retainership projects. Delivered client-requested features, built payment gateway integrations, and led plugin deployments.</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  <li className="marker:text-cyan-400">Created custom plugins for Crowdfunding, Contests, Currency Switching</li>
                  <li className="marker:text-cyan-400">Integrated PayPal, Stripe, Mollie, and PhonePe</li>
                  <li className="marker:text-cyan-400">Trained junior developers in PHP and JS frameworks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-transparent bg-clip-text">Featured Projects</h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-[#0f2027] via-[#2c5364] to-[#00c6ff] rounded-full"></div>
          <p className="text-center text-gray-300 mb-10">Here are some of my recent projects that showcase my expertise in full-stack development</p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1: AI Chatbot & VoiceBot Platform */}
            <div className="bg-[#232b3a] text-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col">
              <div className="relative h-48 w-full">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="AI Chatbot & VoiceBot Platform" className="object-cover w-full h-full" />
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
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" alt="OneStop Student Helpdesk System" className="object-cover w-full h-full" />
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
                <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca" alt="Live Streaming & Chat Application" className="object-cover w-full h-full" />
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

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 bg-gradient-to-br from-[#232b3a] via-[#232b3a] to-[#181f2a]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-transparent bg-clip-text">Get In Touch</h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-[#0f2027] via-[#2c5364] to-[#00c6ff] rounded-full"></div>
          <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">Ready to work together? I'd love to hear about your project and discuss how we can bring your ideas to life.</p>
          <div className="flex flex-col lg:flex-row gap-8 max-w-4xl mx-auto">
            {/* Left: Contact Info */}
            <div className="flex-1 bg-[#232b3a] rounded-2xl p-8 shadow-lg flex flex-col justify-between mb-4 lg:mb-0">
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Let's Connect</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <span className="bg-gradient-to-br from-[#0f2027] to-[#00c6ff] p-3 rounded-lg text-white text-xl"><FaEnvelope /></span>
                    <span className="text-gray-200">kumarbasant229@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-gradient-to-br from-[#0f2027] to-[#00c6ff] p-3 rounded-lg text-white text-xl"><FaPhoneAlt /></span>
                    <span className="text-gray-200">+91 8107968482</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-gradient-to-br from-[#0f2027] to-[#00c6ff] p-3 rounded-lg text-white text-xl"><FaMapMarkerAlt /></span>
                    <span className="text-gray-200">India</span>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="block text-gray-300 mb-2">Connect with me:</span>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/basantkumar2/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#0f2027] to-[#00c6ff] p-2 rounded-full text-white text-lg flex items-center justify-center shadow hover:opacity-80 transition">
                      <FaLinkedin />
                    </a>
                    <a href="https://github.com/yadavbasant" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#0f2027] to-[#00c6ff] p-2 rounded-full text-white text-lg flex items-center justify-center shadow hover:opacity-80 transition">
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <div>
                  <span className="block text-gray-300 mb-2">Available For:</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-white px-4 py-1 rounded-full text-xs font-semibold">Full-time Roles</span>
                    <span className="bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-white px-4 py-1 rounded-full text-xs font-semibold">Freelance Projects</span>
                    <span className="bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-white px-4 py-1 rounded-full text-xs font-semibold">Consulting</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Contact Form */}
            <div className="flex-1 bg-[#232b3a] rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <input type="text" placeholder="Name" className="flex-1 px-4 py-3 rounded bg-[#202736] text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0f2027] focus:ring-[#00c6ff]" />
                  <input type="email" placeholder="Email" className="flex-1 px-4 py-3 rounded bg-[#202736] text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0f2027] focus:ring-[#00c6ff]" />
                </div>
                <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded bg-[#202736] text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0f2027] focus:ring-[#00c6ff]" />
                <textarea placeholder="Message" className="w-full px-4 py-3 rounded bg-[#202736] text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0f2027] focus:ring-[#00c6ff]" rows={5}></textarea>
                <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-white font-semibold text-lg shadow hover:from-[#2c5364] hover:to-[#00c6ff] transition">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-700 pt-12 pb-4 bg-[#181f2a]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-12 md:gap-0">
          {/* Portfolio Info */}
          <div className="flex-1 mb-8 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-2">Portfolio</h3>
            <p className="text-gray-300 mb-2">Full Stack Developer with 9+ years of experience in MERN stack, Next.js, AI chatbots, and cloud-native deployments.</p>
            <p className="text-gray-400 mb-2">Passionate about building scalable, high-performance web solutions.</p>
            <p className="text-gray-400 mb-4">Let's create something impactful together.</p>
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
    </main>
  );
}
