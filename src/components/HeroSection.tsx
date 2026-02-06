import { Button } from '@/components/ui/button';
import { Phone, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-kitchen.jpg';

const HeroSection = () => {
  const handleCallNow = () => {
    window.location.href = 'tel:8368194298';
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury Modular Kitchen by Bilal Woodwork" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary-foreground text-sm font-medium">Bareilly's Premier Woodwork Experts</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Home with{' '}
            <span className="text-gradient-gold">Luxury Woodwork</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Exquisite modular kitchens, designer wardrobes, and premium wooden furniture crafted with 10+ years of expertise and passion.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" onClick={handleCallNow} className="w-full sm:w-auto">
              <Phone className="w-5 h-5" />
              Call Now: 8368194298
            </Button>
            <Button 
              variant="goldOutline" 
              size="xl" 
              onClick={scrollToServices}
              className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Explore Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-serif font-bold text-gradient-gold">10+</p>
              <p className="text-white/70 text-sm">Years Experience</p>
            </div>
            <div className="text-center border-x border-white/20">
              <p className="text-3xl sm:text-4xl font-serif font-bold text-gradient-gold">500+</p>
              <p className="text-white/70 text-sm">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-serif font-bold text-gradient-gold">100%</p>
              <p className="text-white/70 text-sm">Quality Work</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-primary transition-colors animate-bounce"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
