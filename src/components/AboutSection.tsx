import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left: Text Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-cyan-400">About Me</h2>
          <div className="space-y-6 text-gray-300 text-lg">
            <p>I&apos;m a Senior Full Stack Developer and Tech Lead with over 9 years of experience in designing and building modern web applications. I specialize in the MERN stack, Next.js, NestJS, and cloud deployment on AWS, with hands-on expertise in AI chatbots, microservices, and enterprise integrations.</p>
            <p>I&apos;ve led high-performing teams, optimized large-scale systems, and built solutions integrated with platforms like Salesforce, LMSs, and ITSM tools. I&apos;m passionate about clean architecture, performance optimization, and leveraging AI to solve real-world problems. Currently, I&apos;m focused on building scalable, secure, and intelligent applications for remote-first teams.</p>
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
            <Image src="/about.webp" alt="Profile" width={320} height={384} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
} 