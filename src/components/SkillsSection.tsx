export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 scroll-mt-20">
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
  );
} 