import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ctaBg from "@/assets/cta-background.jpg";

const FinalCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={ctaBg}
          alt="Aerial view of tropical islands"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-hero mb-4">
            Ready for Your Next Journey?
          </h2>
          <p className="text-hero-muted text-lg mb-8 leading-relaxed">
            Let us craft the perfect itinerary for your dream destination. 
            Over 500 satisfied travelers can't be wrong.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/tours">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent-warm font-heading font-semibold text-base px-8 h-12 shadow-lg gap-2"
              >
                Book Your Trip
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-hero hover:bg-primary-foreground/10 font-heading font-semibold text-base px-8 h-12"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
