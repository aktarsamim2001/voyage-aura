import { motion } from "framer-motion";
import { Shield, DollarSign, HeadphonesIcon, Package } from "lucide-react";

const features = [
  {
    icon: HeadphonesIcon,
    title: "Expert Guides",
    description: "Professional, multilingual guides with deep local knowledge at every destination.",
  },
  {
    icon: DollarSign,
    title: "Best Price Guarantee",
    description: "We match any competitor's price. Get the best value for your dream vacation.",
  },
  {
    icon: Shield,
    title: "24/7 Support",
    description: "Round-the-clock assistance wherever you are. We're always just a call away.",
  },
  {
    icon: Package,
    title: "Custom Packages",
    description: "Tailor-made itineraries designed around your preferences, budget, and schedule.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-surface-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-heading font-medium text-sm uppercase tracking-wider">
            Why Dream Travels
          </span>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-foreground mt-2">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            We go above and beyond to make every trip extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 text-center group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-light mx-auto flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-medium text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
