import { Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-secondary-foreground">Bilal Woodwork</h3>
                <p className="text-xs text-secondary-foreground/70">Luxury Craftsmanship</p>
              </div>
            </div>
            <p className="text-secondary-foreground/70 text-sm">
              Transforming homes with premium wooden furniture and modular solutions since 2014.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-secondary-foreground mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>Modular Kitchen</li>
              <li>Designer Wardrobes</li>
              <li>Luxury Double Beds</li>
              <li>TV Units & Entertainment Centers</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-secondary-foreground mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm text-secondary-foreground/70">
              <a 
                href="tel:8368194298" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                8368194298
              </a>
              <p>Pilibhit Road, Khajuriya Ghat, Bareilly</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            © {currentYear} Bilal Woodwork. All rights reserved. | Crafted with ❤️ in Bareilly
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
