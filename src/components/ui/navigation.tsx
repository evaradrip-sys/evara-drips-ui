import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import { Input } from './input';
import logo from '@/assets/logo.png';


export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigationLinks = [
    { name: "Men's Wear", href: "/mens" },
    { name: "Women's Wear", href: "/womens" },
    { name: "Accessories", href: "/accessories" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Sale", href: "/sale" },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="w-48 mt-2" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="nav-link text-foreground hover:text-accent font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center max-w-md flex-1 mx-8">
            <div className="relative w-full">
              <div className="search-bar flex items-center">
                <Search className="h-4 w-4 text-muted-foreground mr-3" />
                <Input
                  type="text"
                  placeholder="Search for T-shirts, Hoodies, styles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-none focus:ring-0 bg-transparent placeholder:text-muted-foreground"
                />
              </div>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden pb-4">
          <div className="search-bar flex items-center">
            <Search className="h-4 w-4 text-muted-foreground mr-3" />
            <Input
              type="text"
              placeholder="Search for T-shirts, pants, styles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-none focus:ring-0 bg-transparent placeholder:text-muted-foreground"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-2 text-foreground hover:text-accent hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-border pt-2 mt-2">
              <Link
                to="/account"
                className="block px-3 py-2 text-foreground hover:text-accent hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                My Account
              </Link>
              <Link
                to="/wishlist"
                className="block px-3 py-2 text-foreground hover:text-accent hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Wishlist
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}