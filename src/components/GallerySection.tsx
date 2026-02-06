import { useState } from 'react';
import { X } from 'lucide-react';
import heroImage from '@/assets/hero-kitchen.jpg';
import kitchenImage from '@/assets/service-kitchen.jpg';
import wardrobeImage from '@/assets/service-wardrobe.jpg';
import bedImage from '@/assets/service-bed.jpg';
import tvUnitImage from '@/assets/service-tv-unit.jpg';
import diningImage from '@/assets/gallery-dining.jpg';
import studyImage from '@/assets/gallery-study.jpg';
import sofaImage from '@/assets/gallery-sofa.jpg';
import partitionImage from '@/assets/gallery-partition.jpg';

const galleryItems = [
  { image: heroImage, title: 'Premium Modular Kitchen', category: 'Kitchen' },
  { image: wardrobeImage, title: 'Designer Wardrobe', category: 'Bedroom' },
  { image: bedImage, title: 'Luxury Double Bed', category: 'Bedroom' },
  { image: tvUnitImage, title: 'Modern TV Unit', category: 'Living Room' },
  { image: diningImage, title: 'Wooden Dining Set', category: 'Dining' },
  { image: studyImage, title: 'Study Table with Shelves', category: 'Study' },
  { image: sofaImage, title: 'Premium Wooden Sofa', category: 'Living Room' },
  { image: partitionImage, title: 'Decorative Wall Paneling', category: 'Decor' },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-primary font-medium uppercase tracking-widest text-sm">Our Work</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Craftsmanship Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of handcrafted furniture and custom woodwork that has transformed homes across Bareilly.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div 
              key={item.title}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-card hover:shadow-elegant transition-all duration-500"
              onClick={() => setSelectedImage(item.image)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-white font-serif font-semibold mt-1">{item.title}</h3>
                </div>
              </div>
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-primary border-l-[40px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
