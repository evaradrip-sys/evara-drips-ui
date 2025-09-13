import React from 'react';
import { ProductCard } from './product-card';
import { Button } from './button';
import { ArrowRight } from 'lucide-react';
import mensImage from '@/assets/mens-category.jpg';
import womensImage from '@/assets/womens-category.jpg';

// Mock product data
const featuredProducts = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    price: 29.99,
    originalPrice: 39.99,
    image: mensImage,
    category: "Men's Wear",
    isNew: true,
    isOnSale: true,
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Casual Slim Fit Pants',
    price: 49.99,
    image: mensImage,
    category: "Men's Wear",
    isNew: false,
    isOnSale: false,
    rating: 4.2,
  },
  {
    id: '3',
    name: 'Women\'s Stylish Top',
    price: 34.99,
    originalPrice: 44.99,
    image: womensImage,
    category: "Women's Wear",
    isNew: true,
    isOnSale: true,
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Comfortable Hoodie',
    price: 59.99,
    image: mensImage,
    category: "Men's Wear",
    isNew: false,
    isOnSale: false,
    rating: 4.3,
  },
  {
    id: '5',
    name: 'Designer Jeans',
    price: 79.99,
    originalPrice: 99.99,
    image: womensImage,
    category: "Women's Wear",
    isNew: false,
    isOnSale: true,
    rating: 4.6,
  },
  {
    id: '6',
    name: 'Polo Classic Shirt',
    price: 39.99,
    image: mensImage,
    category: "Men's Wear",
    isNew: true,
    isOnSale: false,
    rating: 4.4,
  },
  {
    id: '7',
    name: 'Summer Dress',
    price: 54.99,
    image: womensImage,
    category: "Women's Wear",
    isNew: true,
    isOnSale: false,
    rating: 4.8,
  },
  {
    id: '8',
    name: 'Casual Shorts',
    price: 24.99,
    originalPrice: 34.99,
    image: mensImage,
    category: "Men's Wear",
    isNew: false,
    isOnSale: true,
    rating: 4.1,
  },
];

interface ProductGridProps {
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
  maxProducts?: number;
}

export function ProductGrid({ 
  title = "Featured Products",
  subtitle = "Discover our handpicked selection of premium fashion items",
  showViewAll = true,
  maxProducts = 8 
}: ProductGridProps) {
  const displayProducts = featuredProducts.slice(0, maxProducts);

  const handleQuickView = (id: string) => {
    console.log('Quick view product:', id);
    // TODO: Implement quick view modal
  };

  const handleAddToWishlist = (id: string) => {
    console.log('Add to wishlist:', id);
    // TODO: Implement wishlist functionality
  };

  const handleAddToCart = (id: string) => {
    console.log('Add to cart:', id);
    // TODO: Implement cart functionality
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {displayProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard
                {...product}
                onQuickView={handleQuickView}
                onAddToWishlist={handleAddToWishlist}
                onAddToCart={handleAddToCart}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        {showViewAll && (
          <div className="text-center">
            <Button variant="outline" size="lg" className="group">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}