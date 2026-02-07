import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { tours } from "@/data/tours";

const PopularTours = () => {
  const popularTours = tours.slice(0, 6);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-heading font-medium text-sm uppercase tracking-wider">
            Top Destinations
          </span>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-foreground mt-2">
            Popular Tour Packages
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Handpicked tours loved by thousands of travelers worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularTours.map((tour, i) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/tours/${tour.id}`}
                className="group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {tour.originalPrice && (
                    <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-heading font-semibold px-2.5 py-1 rounded-full">
                      {Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm font-medium text-foreground">{tour.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({tour.reviewCount} reviews)
                    </span>
                  </div>

                  <h3 className="font-heading font-medium text-lg text-foreground group-hover:text-primary transition-colors">
                    {tour.title}
                  </h3>

                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {tour.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {tour.duration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <div>
                      {tour.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through mr-2">
                          ${tour.originalPrice}
                        </span>
                      )}
                      <span className="font-heading font-bold text-xl text-primary">
                        ${tour.price}
                      </span>
                      <span className="text-sm text-muted-foreground"> / person</span>
                    </div>
                    <span className="text-accent flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                      Details <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/tours">
            <Button
              variant="outline"
              size="lg"
              className="font-heading font-semibold gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View All Tours
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularTours;
