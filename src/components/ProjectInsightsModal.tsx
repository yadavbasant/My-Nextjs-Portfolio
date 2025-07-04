import React from "react";
import Image from "next/image";

interface ProjectInsightsModalProps {
  open: boolean;
  onClose: () => void;
  image: string;
  details: {
    title: string;
    role: string;
    challenges: string;
    features: string;
    impact: string;
    techStack: string;
  };
}

export default function ProjectInsightsModal({ open, onClose, image, details }: ProjectInsightsModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#232b3a] rounded-2xl shadow-lg p-8 max-w-6xl w-full relative flex flex-col md:flex-row gap-8">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-cyan-400 text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex-shrink-0 flex items-center justify-center">
          <Image src={image} alt={details.title} width={220} height={220} className="rounded-xl object-cover shadow-lg" />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold mb-2 text-cyan-400 flex items-center gap-2">💡 {details.title}</h2>
          <div className="text-gray-200 text-base space-y-3">
            <div><span className="font-semibold text-cyan-300">Role:</span> {details.role}</div>
            <div><span className="font-semibold text-cyan-300">Key Challenges:</span> {details.challenges}</div>
            <div><span className="font-semibold text-cyan-300">Features:</span> {details.features}</div>
            <div><span className="font-semibold text-cyan-300">Business Impact:</span> {details.impact}</div>
            <div><span className="font-semibold text-cyan-300">Tech Stack:</span> {details.techStack}</div>
          </div>
        </div>
      </div>
    </div>
  );
} 