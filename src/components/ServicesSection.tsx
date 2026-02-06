import { ArrowRight } from 'lucide-react';
import kitchenImage from '@/assets/service-kitchen.jpg';
import wardrobeImage from '@/assets/service-wardrobe.jpg';
import bedImage from '@/assets/service-bed.jpg';
import tvUnitImage from '@/assets/service-tv-unit.jpg';

const services = [
  {
    title: 'Modular Kitchen',
    description: 'Contemporary designs with smart storage solutions, premium hardware, and elegant finishes tailored to your lifestyle.',
    image: kitchenImage,
  },
  {
    title: 'Designer Wardrobes',
    description: 'Spacious, stylish wardrobes with customized compartments, soft-close mechanisms, and luxurious wood finishes.',
    image: wardrobeImage,
  },
  {
    title: 'Luxury Double Beds',
    description: 'Handcrafted beds with intricate headboard designs, premium wood selection, and timeless elegance.',
    image: bedImage,
  },
  {
    title: 'TV Units',
    description: 'Modern entertainment centers with integrated cable management, ambient lighting, and stunning wood-gold aesthetics.',
    image: tvUnitImage,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-primary font-medium uppercase tracking-widest text-sm">What We Offer</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Our Premium Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to completion, we craft bespoke wooden furniture that transforms your space into a luxurious haven.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group relative overflow-hidden rounded-2xl shadow-card bg-card hover:shadow-elegant transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Gold accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
