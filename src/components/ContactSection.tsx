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

          {/* Right - Google Map */}
          <div className="relative rounded-2xl overflow-hidden shadow-elegant min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.5!2d79.42!3d28.36!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zBilal+Woodwork!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin&q=Bilal+Woodwork+Pilibhit+Road+Khajuriya+Ghat+Bareilly"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bilal Woodwork Location"
              className="absolute inset-0 w-full h-full"
            />
            {/* Map overlay label */}
            <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-card">
              <p className="font-semibold text-foreground text-sm">📍 Bilal Woodwork</p>
              <p className="text-muted-foreground text-xs">Pilibhit Road, Khajuriya Ghat, Bareilly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
