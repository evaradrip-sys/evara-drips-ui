import React from 'react';
import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/ui/hero-section';
import { CategoryGrid } from '@/components/ui/category-grid';
import { ProductGrid } from '@/components/ui/product-grid';
import { Footer } from '@/components/ui/footer';

const WomensWear = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* <HeroSection /> */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Women's Collection
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Elegant and stylish women's fashion featuring trendy tops, bottoms, and contemporary essentials
              </p>
            </div>
          </div>
        </section>
        {/* <CategoryGrid />
        <ProductGrid 
          title="Women's Featured Products"
          subtitle="Curated collection of premium women's fashion"
          maxProducts={8}
          showViewAll={true}
        />
        <div className="bg-luxury py-16">
          <ProductGrid 
            title="Trending Styles"
            subtitle="Most popular women's items this season"
            maxProducts={4}
            showViewAll={true}
          />
        </div> */}
      </main>
      <Footer />
    </div>
  );
};

export default WomensWear;
