import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Mohd Arif',
    initial: 'MA',
    rating: 5,
    text: 'Bahut accha kaam kiya hai Bilal bhai ne. Kitchen modular design ekdum first class hai. Highly recommended!',
    time: '2 months ago',
  },
  {
    name: 'Rahul Sharma',
    initial: 'RS',
    rating: 5,
    text: 'Best woodwork in Bareilly. Got my wardrobe and TV unit made. Quality material and perfect finishing. Very satisfied!',
    time: '1 month ago',
  },
  {
    name: 'Salman Khan',
    initial: 'SK',
    rating: 5,
    text: 'Excellent craftsmanship! The double bed they made for us is absolutely stunning. Fair pricing and timely delivery.',
    time: '3 weeks ago',
  },
  {
    name: 'Priya Verma',
    initial: 'PV',
    rating: 5,
    text: 'Got complete home interior done from Bilal Woodwork. Kitchen, wardrobes, TV unit - everything is premium quality. 100% recommend!',
    time: '1 week ago',
  },
];

const TestimonialsSection = () => {
  const averageRating = 5.0;
  const totalReviews = reviews.length;

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <span className="text-primary font-medium uppercase tracking-widest text-sm">Customer Reviews</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            What Our Clients <span className="text-gradient-gold">Say</span>
          </h2>
        </div>

        {/* Rating Badge */}
        <div className="flex flex-col items-center mb-12 animate-scale-in">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-elegant text-center max-w-sm w-full">
            <div className="flex items-center justify-center gap-1 mb-2">
              <span className="text-5xl font-bold text-foreground font-serif">{averageRating}</span>
            </div>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              Based on {totalReviews} Google Reviews
            </p>
            <a
              href="https://www.google.com/search?q=Bilal+Woodwork+Bareilly"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-primary font-medium text-sm hover:underline"
            >
              See all reviews on Google →
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-elegant transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground text-sm leading-relaxed mb-4 line-clamp-4">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold text-sm">{review.initial}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{review.name}</p>
                  <p className="text-muted-foreground text-xs">{review.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
