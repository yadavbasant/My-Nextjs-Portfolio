export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-20 bg-gradient-to-br from-[#232b3a] via-[#232b3a] to-[#181f2a] scroll-mt-20">
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
  );
} 