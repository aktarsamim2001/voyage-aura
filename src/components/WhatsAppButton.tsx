import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/1234567890?text=Hi!%20I'm%20interested%20in%20your%20tour%20packages."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-[hsl(0,0%,100%)]" />
      <span className="absolute right-full mr-3 bg-card text-foreground text-sm px-3 py-1.5 rounded-lg shadow-card opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
