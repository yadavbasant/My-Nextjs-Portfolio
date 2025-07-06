import React from "react";
import Image from "next/image";

interface ScreenshotsModalProps {
  open: boolean;
  onClose: () => void;
  images: string[];
}

export default function ScreenshotsModal({ open, onClose, images }: ScreenshotsModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#232b3a] rounded-2xl shadow-lg p-8 max-w-6xl w-full relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-cyan-400 text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-cyan-400 flex items-center gap-2">🖼 Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden bg-[#181f2a] flex items-center justify-center">
              <Image 
                src={src} 
                alt={`Project Screenshot ${idx + 1}`} 
                width={600} 
                height={350} 
                className="object-contain w-full h-[350px]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 