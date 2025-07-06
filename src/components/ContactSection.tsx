import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 bg-gradient-to-br from-[#232b3a] via-[#232b3a] to-[#181f2a] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-[#0f2027] to-[#00c6ff] text-transparent bg-clip-text">Get In Touch</h2>
        <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-[#0f2027] via-[#2c5364] to-[#00c6ff] rounded-full"></div>
        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">Ready to work together? I&apos;d love to hear about your project and discuss how we can bring your ideas to life.</p>
        <div className="flex flex-col lg:flex-row gap-8 max-w-4xl mx-auto">
          {/* Left: Contact Info */}
          <div className="flex-1 bg-[#232b3a] rounded-2xl p-8 shadow-lg flex flex-col justify-between mb-4 lg:mb-0">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Let&apos;s Connect</h3>
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
  );
} 