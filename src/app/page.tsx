import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home",
  description: "Senior Full Stack Developer with 9+ years of experience in MERN stack, Next.js, AI chatbots, and cloud-native solutions. View my portfolio, projects, and get in touch for collaboration opportunities.",
  keywords: [
    "Full Stack Developer Portfolio",
    "MERN Stack Developer",
    "Next.js Developer",
    "AI Chatbot Developer",
    "Cloud Solutions",
    "Enterprise Integration",
    "Web Development Services",
    "React Developer",
    "Node.js Developer"
  ],
  openGraph: {
    title: "Basant Kumar - Senior Full Stack Developer Portfolio",
    description: "Senior Full Stack Developer with 9+ years of experience in MERN stack, Next.js, AI chatbots, and cloud-native solutions. View my portfolio, projects, and get in touch for collaboration opportunities.",
    url: 'https://portfolio.basantk.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Basant Kumar - Senior Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    title: "Basant Kumar - Senior Full Stack Developer Portfolio",
    description: "Senior Full Stack Developer with 9+ years of experience in MERN stack, Next.js, AI chatbots, and cloud-native solutions.",
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <main className="pt-24 w-full min-h-screen bg-[#181f2a] font-sans">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
} 