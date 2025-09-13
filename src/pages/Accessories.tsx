import React from 'react';
import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/ui/hero-section';
import { CategoryGrid } from '@/components/ui/category-grid';
import { ProductGrid } from '@/components/ui/product-grid';
import { Footer } from '@/components/ui/footer';

const Accessories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* <HeroSection /> */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Accessories Collection
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete your look with our premium accessories collection featuring bags, watches, and lifestyle essentials
              </p>
            </div>
          </div>
        </section>
        <CategoryGrid />
        <ProductGrid 
          title="Featured Accessories"
          subtitle="Premium accessories to complement your style"
          maxProducts={8}
          showViewAll={true}
        />
        <div className="bg-luxury py-16">
          <ProductGrid 
            title="Must-Have Items"
            subtitle="Essential accessories for every wardrobe"
            maxProducts={4}
            showViewAll={true}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Accessories;
