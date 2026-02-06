import { CheckCircle2 } from 'lucide-react';

const features = [
  '10+ Years of Expert Craftsmanship',
  'Premium Quality Materials',
  'Custom Designs to Match Your Vision',
  'On-Time Project Delivery',
  'Affordable Luxury Pricing',
  'After-Sales Support & Warranty',
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <span className="text-primary font-medium uppercase tracking-widest text-sm">About Us</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Bareilly's Most Trusted <span className="text-gradient-gold">Master Carpenter</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              With over a decade of experience, Bilal Woodwork has been transforming homes across Bareilly with premium wooden furniture and modular solutions. Our commitment to quality craftsmanship and attention to detail has made us the go-to choice for luxury woodwork.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Every piece we create is a testament to our passion for wood and our dedication to exceeding customer expectations. From traditional designs to contemporary styles, we bring your vision to life with precision and artistry.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Decorative Card */}
          <div className="relative">
            <div className="bg-gradient-wood rounded-2xl p-8 sm:p-12 text-center shadow-elegant">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
                <span className="font-serif text-4xl font-bold text-primary-foreground">10+</span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-secondary-foreground mb-4">
                Years of Excellence
              </h3>
              <p className="text-secondary-foreground/80 mb-8">
                Building trust and delivering quality since 2014
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
                <div>
                  <p className="font-serif text-3xl font-bold text-gradient-gold">500+</p>
                  <p className="text-secondary-foreground/70 text-sm">Projects Completed</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-gradient-gold">100%</p>
                  <p className="text-secondary-foreground/70 text-sm">Customer Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
