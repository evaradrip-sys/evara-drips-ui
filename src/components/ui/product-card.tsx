import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import { Badge } from './badge';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isOnSale?: boolean;
  rating?: number;
  onQuickView?: (id: string) => void;
  onAddToWishlist?: (id: string) => void;
  onAddToCart?: (id: string) => void;
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  isNew = false,
  isOnSale = false,
  rating = 0,
  onQuickView,
  onAddToWishlist,
  onAddToCart,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleWishlistClick = () => {
    setIsWishlisted(!isWishlisted);
    onAddToWishlist?.(id);
  };

  const handleQuickView = () => {
    onQuickView?.(id);
  };

  const handleAddToCart = () => {
    onAddToCart?.(id);
  };

  const discountPercentage = originalPrice 
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="product-card bg-card rounded-xl overflow-hidden group">
      {/* Image Container */}
      <Link to={`/product/${id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <Badge className="bg-accent text-accent-foreground">New</Badge>
            )}
            {isOnSale && discountPercentage > 0 && (
              <Badge className="bg-destructive text-destructive-foreground">
                -{discountPercentage}%
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 p-0 rounded-full bg-white/90 hover:bg-white"
              onClick={(e) => {
                e.preventDefault();
                handleWishlistClick();
              }}
            >
              <Heart 
                className={`h-4 w-4 ${
                  isWishlisted ? 'fill-destructive text-destructive' : 'text-foreground'
                }`}
              />
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 p-0 rounded-full bg-white/90 hover:bg-white"
              onClick={(e) => {
                e.preventDefault();
                handleQuickView();
              }}
            >
              <Eye className="h-4 w-4 text-foreground" />
            </Button>
          </div>

          {/* Quick Add to Cart - Shows on Hover */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <Button 
              className="w-full bg-primary text-primary-foreground hover:bg-primary-hover"
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart();
              }}
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            {category}
          </p>
        </div>
        
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors cursor-pointer">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        {rating > 0 && (
          <div className="flex items-center mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${
                    i < Math.floor(rating) ? 'text-accent' : 'text-muted-foreground'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-1">
              ({rating})
            </span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg text-foreground">
            ${price}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}