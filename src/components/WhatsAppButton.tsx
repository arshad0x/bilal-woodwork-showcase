import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '918368194298'; // India country code + number
  const message = encodeURIComponent('Hi! I am interested in your woodwork services. Please share more details.');
  
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5C] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat on WhatsApp
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </button>
  );
};

export default WhatsAppButton;
