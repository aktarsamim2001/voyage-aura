import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "@/data/tours";

const TourCategories = () => {
  return (
    <section className="py-20 bg-surface-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-heading font-medium text-sm uppercase tracking-wider">
            Choose Your Journey
          </span>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-foreground mt-2">
            Tour Categories
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            From adrenaline-pumping adventures to serene spiritual retreats, find the perfect tour
            that matches your travel style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/tours?category=${cat.id}`}
                className="group relative block rounded-xl overflow-hidden aspect-[4/5] shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-3xl mb-2 block">{cat.icon}</span>
                  <h3 className="font-heading font-medium text-lg text-primary-foreground">
                    {cat.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm mt-1">
                    {cat.tourCount} packages
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourCategories;
