import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const handleCallNow = () => {
    window.location.href = 'tel:8368194298';
  };

  const handleWhatsApp = () => {
    const phoneNumber = '918368194298';
    const message = encodeURIComponent('Hi! I am interested in your woodwork services. Please share more details.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="animate-slide-up">
            <span className="text-primary font-medium uppercase tracking-widest text-sm">Get In Touch</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Let's Create Something <span className="text-gradient-gold">Beautiful</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Ready to transform your home with premium woodwork? Contact us today for a free consultation and quote.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              {/* Phone */}
              <div className="flex items-start gap-4 p-4 bg-background rounded-xl shadow-card">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a 
                    href="tel:8368194298" 
                    className="text-primary text-lg font-medium hover:underline"
                  >
                    8368194298
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 p-4 bg-background rounded-xl shadow-card">
                <div className="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                  <button 
                    onClick={handleWhatsApp}
                    className="text-[#25D366] text-lg font-medium hover:underline"
                  >
                    Message Us Directly
                  </button>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 bg-background rounded-xl shadow-card">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    Pilibhit Road, Khajuriya Ghat,<br />
                    Bareilly, Uttar Pradesh
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-4 bg-background rounded-xl shadow-card">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Working Hours</h3>
                  <p className="text-muted-foreground">
                    Mon - Sat: 9:00 AM - 7:00 PM<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="callNow" size="lg" onClick={handleCallNow} className="w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
              <Button 
                size="lg" 
                onClick={handleWhatsApp} 
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BA5C] text-white font-bold"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>

          {/* Right - Map/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-8 h-full min-h-[400px] flex flex-col justify-center items-center text-center shadow-elegant">
              {/* Decorative frame */}
              <div className="absolute inset-4 border-2 border-primary/30 rounded-xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-secondary-foreground mb-4">
                  Visit Our Workshop
                </h3>
                <p className="text-secondary-foreground/80 mb-6 max-w-sm">
                  Experience our craftsmanship firsthand. Visit our workshop in Bareilly to see our work and discuss your project.
                </p>
                <div className="inline-flex items-center gap-2 text-primary font-medium">
                  <span>Pilibhit Road, Khajuriya Ghat</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-16 h-16 border-2 border-primary/20 rounded-full" />
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-primary/10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
