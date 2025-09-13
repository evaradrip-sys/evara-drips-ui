import React from 'react';
import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/ui/hero-section';
import { CategoryGrid } from '@/components/ui/category-grid';
import { ProductGrid } from '@/components/ui/product-grid';
import { Footer } from '@/components/ui/footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <CategoryGrid />
        <ProductGrid />
        <div className="bg-luxury py-16">
          <ProductGrid 
            title="Trending Now"
            subtitle="Most popular items this season"
            maxProducts={4}
            showViewAll={true}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
