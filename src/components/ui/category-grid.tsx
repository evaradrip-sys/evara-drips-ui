import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import mensImage from '@/assets/mens-category.jpg';
import womensImage from '@/assets/womens-category.jpg';
import accessoriesImage from '@/assets/accessories-category.jpg';

const categories = [
  {
    id: 1,
    name: "Men's Collection",
    description: "Premium T-shirts, pants & casual wear",
    image: mensImage,
    href: "/mens",
    featured: true,
  },
  {
    id: 2,
    name: "Women's Collection",
    description: "Stylish tops, bottoms & trendy essentials",
    image: womensImage,
    href: "/womens",
    featured: true,
  },
  {
    id: 3,
    name: "Accessories",
    description: "Complete your look with premium accessories",
    image: accessoriesImage,
    href: "/accessories",
    featured: false,
  },
  {
    id: 4,
    name: "New Arrivals",
    description: "Latest fashion trends for every season",
    image: mensImage, // Using placeholder for now
    href: "/new-arrivals",
    featured: false,
  },
];

export function CategoryGrid() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collections designed for modern lifestyle and comfort
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Categories - Larger Cards */}
          {categories.filter(cat => cat.featured).map((category, index) => (
            <Link
              key={category.id}
              to={category.href}
              className={`category-card group overflow-hidden ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-white/90 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-accent font-medium group-hover:translate-x-2 transition-transform">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Secondary Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {categories.filter(cat => !cat.featured).map((category) => (
            <Link
              key={category.id}
              to={category.href}
              className="category-card group overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-white/90 mb-3 text-sm">
                    {category.description}
                  </p>
                  <div className="flex items-center text-accent font-medium text-sm group-hover:translate-x-2 transition-transform">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}