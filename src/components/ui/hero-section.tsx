import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './button';
import heroImage from '@/assets/WhatsApp image 2025-09-14 at 13.06.07 copy.jpeg';

const heroSlides = [
  {
    id: 1,
    image: heroImage,
    title: "New Collection",
    subtitle: "Discover Premium Fashion",
    description: "Explore our latest collection of trendy T-shirts, pants, and lifestyle essentials",
    primaryCTA: "Shop Collection",
    secondaryCTA: "View Lookbook",
  },
  {
    id: 2,
    image: heroImage,
    title: "Summer Essentials",
    subtitle: "Stay Cool & Stylish",
    description: "Lightweight fabrics and contemporary designs for the modern wardrobe",
    primaryCTA: "Explore Summer",
    secondaryCTA: "See Trends",
  },
  {
    id: 3,
    image: heroImage,
    title: "Sale Season",
    subtitle: "Up to 50% Off",
    description: "Limited time offers on selected premium fashion items",
    primaryCTA: "Shop Sale",
    secondaryCTA: "View All Deals",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden bg-gradient-luxury">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={currentSlideData.image}
          alt={currentSlideData.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl animate-fade-in">
            <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              {currentSlideData.subtitle}
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {currentSlideData.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              {currentSlideData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero text-lg px-8 py-4">
                {currentSlideData.primaryCTA}
              </Button>
              <Button variant="outline" className="btn-outline-hero text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary">
                {currentSlideData.secondaryCTA}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="lg"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="lg"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-accent'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
