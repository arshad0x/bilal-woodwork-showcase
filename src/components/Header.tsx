import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const handleCallNow = () => {
    window.location.href = 'tel:8368194298';
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center shadow-gold">
              <span className="text-primary-foreground font-serif font-bold text-xl">B</span>
            </div>
            <div>
              <h1 className="font-serif text-xl font-bold text-foreground">Bilal Woodwork</h1>
              <p className="text-xs text-muted-foreground">Luxury Craftsmanship</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Call Now Button */}
          <Button variant="callNow" size="default" onClick={handleCallNow} className="hidden sm:flex">
            <Phone className="w-4 h-4" />
            Call Now
          </Button>

          {/* Mobile Call Button */}
          <Button variant="gold" size="icon" onClick={handleCallNow} className="sm:hidden">
            <Phone className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
