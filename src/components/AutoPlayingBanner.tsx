'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: "Join us on Discord!",
    subtitle: "Make friends, participate in online events, and get society announcements in our discord server!",
    buttonText: "Join the Discord",
    buttonLink: "https://discord.gg/vaTV73U5Hz",
    backgroundImage: "/bannerImages/headphoneBanner.jpg",
    buttonColor: "bg-indigo-600 hover:bg-indigo-700"
  },
  {
    id: 2,
    title: "Merch is now Available!",
    subtitle: "Our raven.gg store is now back online. Check out our FragSoc & UoY Esports clothing by clicking the button below!",
    buttonText: "View Collection",
    buttonLink: "https://raven.gg/stores/fragsoc-uoy-esports/",
    backgroundImage: "/bannerImages/MerchBanner.jpg",
    buttonColor: "bg-green-600 hover:bg-green-700"
  },
  {
    id: 3,
    title: "Join our Esports teams!",
    subtitle: "Interested in competitive gaming? Participate in the NUEL & NSE leagues, community draft tournaments & more with UoY Esports.",
    buttonText: "Find out more",
    buttonLink: "/uoy-esports",
    backgroundImage: "/bannerImages/DesktopsBanner.jpg",
    buttonColor: "bg-yellow-600 hover:bg-yellow-700"
  }
];

export default function AutoPlayingBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [currentSlide]); // Reset interval when currentSlide changes

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative bg-black text-white py-32 overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-80' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${slide.backgroundImage}')`,
            }}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 text-center min-h-[400px] flex flex-col justify-center">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`transition-all duration-500 ${
              index === currentSlide 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8 absolute inset-0 pointer-events-none'
            }`}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
              {slide.title}
            </h1>
            <p className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              {slide.subtitle}
            </p>
            <div className="mt-8">
              <Link
                href={slide.buttonLink}
                target={slide.buttonLink.startsWith('http') ? '_blank' : undefined}
                rel={slide.buttonLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`inline-block text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-2xl transform hover:scale-105 ${slide.buttonColor}`}
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
      <button
        onClick={goToPrevious}
        className="hidden md:block absolute bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-colors duration-300 shadow-lg backdrop-blur-sm z-20"
        style={{ 
          position: 'absolute',
          top: '50%',
          left: '8px',
          transform: 'translateY(-50%)',
          willChange: 'auto'
        }}
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        className="hidden md:block absolute bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-colors duration-300 shadow-lg backdrop-blur-sm z-20"
        style={{ 
          position: 'absolute',
          top: '50%',
          right: '8px',
          transform: 'translateY(-50%)',
          willChange: 'auto'
        }}
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Slide Indicators - Bigger on mobile for better touch targets */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
