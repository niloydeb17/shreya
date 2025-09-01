'use client';
import { Button } from "@/components/ui/button";
import { CookieModal } from "@/components/ui/cookie-modal";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(0);

  const categories = ["Vision", "Work", "Life", "Mystic"];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const cycleCategory = () => {
    setCurrentCategory((prev) => (prev + 1) % categories.length);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/GettyImages-1331447709.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Optional: Dark overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Top.png Image - At the very top */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <img
          src="/Top.png"
          alt="Top"
          className="w-full h-auto object-contain"
        />
      </div>
      
      {/* Text SVG Image - Below Top.png */}
      <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 z-20 w-[45%]">
        <img
          src="/text.svg"
          alt="Text"
          className="w-full h-auto object-contain"
        />
      </div>
      
      {/* Category Selection Button - Very Top Right Corner */}
      <div className="absolute top-[5%] right-[5%] z-30">
        <Button 
          variant="secondary"
          size="lg"
          className="text-[18px] px-6 py-3 font-semibold rounded-[999px] bg-white/90 hover:bg-white text-gray-900 border border-gray-200 shadow-lg"
          onClick={cycleCategory}
        >
          {categories[currentCategory]}
        </Button>
      </div>
      
      {/* Crack Cookie Button - 24px Padding with 999px Corner Radius */}
      <div className="absolute top-[28%] left-1/2 transform -translate-x-1/2 z-30">
        <Button 
          variant="secondary"
          size="lg"
          className="text-[22px] px-8 py-6 font-semibold rounded-[999px]"
          onClick={openModal}
        >
          Crack Cookie
        </Button>
      </div>
      
      {/* Footer.png Image at Bottom - Full Width */}
      <div className="absolute bottom-0 left-0 right-0 z-15">
        <img
          src="/Footer.png"
          alt="Footer"
          className="w-full h-auto object-contain"
        />
      </div>
      
      {/* Final.png Image at Bottom - Full Width */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <img
          src="/final.png"
          alt="Cookie Jar"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Cookie Modal */}
      <CookieModal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        selectedCategory={categories[currentCategory]}
      />
    </div>
  );
}
