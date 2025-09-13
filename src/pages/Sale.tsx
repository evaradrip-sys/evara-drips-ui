import React from 'react';
import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/ui/hero-section';
import { CategoryGrid } from '@/components/ui/category-grid';
import { ProductGrid } from '@/components/ui/product-grid';
import { Footer } from '@/components/ui/footer';

const Sale = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* <HeroSection /> */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Sale Collection
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Incredible deals on premium fashion items. Limited time offers with up to 50% off selected products
              </p>
            </div>
          </div>
        </section>
        <CategoryGrid />
        <ProductGrid 
          title="Sale Items"
          subtitle="Amazing discounts on premium fashion"
          maxProducts={8}
          showViewAll={true}
        />
        <div className="bg-luxury py-16">
          <ProductGrid 
            title="Flash Sale"
            subtitle="Limited time deals - grab them while they last"
            maxProducts={4}
            showViewAll={true}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sale;
