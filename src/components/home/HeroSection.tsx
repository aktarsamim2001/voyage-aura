import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Stunning tropical paradise with turquoise ocean and lush green mountains"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm text-accent-foreground/90 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-accent/30">
              ✨ Premium Travel Experiences
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-hero leading-tight mb-6"
          >
            Explore the World
            <br />
            <span className="text-gradient">With Us</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-hero-muted text-lg md:text-xl max-w-xl mb-8 leading-relaxed"
          >
            Discover extraordinary destinations with curated tour packages designed
            for unforgettable journeys. Your dream vacation starts here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/tours">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent-warm font-heading font-semibold text-base px-8 h-12 shadow-lg hover:shadow-xl transition-all gap-2"
              >
                Explore Tours
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-hero hover:bg-primary-foreground/10 font-heading font-semibold text-base px-8 h-12 gap-2"
              >
                <Play className="w-4 h-4" />
                WhatsApp Us
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-primary-foreground/10"
          >
            {[
              { value: "500+", label: "Happy Travelers" },
              { value: "120+", label: "Tour Packages" },
              { value: "50+", label: "Destinations" },
              { value: "15+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-hero font-heading font-bold text-2xl md:text-3xl">
                  {stat.value}
                </p>
                <p className="text-hero-muted text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
