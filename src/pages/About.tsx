import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import FinalCTA from "@/components/home/FinalCTA";
import heroBanner from "@/assets/hero-banner.jpg";

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="Learn about Dream Travels — crafting extraordinary travel experiences since 2010. 500+ happy travelers, 50+ destinations, and counting."
      />
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading font-bold text-3xl md:text-5xl text-primary-foreground mb-3">
              About Wanderlux
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-lg mx-auto">
              Crafting extraordinary travel experiences since 2010.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">
                Our Story
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-2 mb-6">
                Turning Dreams Into Journeys
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2010, Wanderlux began with a simple vision: to make world-class travel
                  accessible to everyone. What started as a small team of passionate travelers has
                  grown into one of the most trusted names in the tour industry.
                </p>
                <p>
                  Over 15 years, we've helped more than 500 travelers explore 50+ destinations
                  across the globe. From the snow-capped Alps to tropical paradise islands, we
                  curate experiences that create lifelong memories.
                </p>
                <p>
                  Our team of expert guides, travel planners, and concierge staff work tirelessly
                  to ensure every journey exceeds expectations. We believe travel isn't just about
                  destinations—it's about the stories you bring home.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-card-hover"
            >
              <img
                src={heroBanner}
                alt="Wanderlux team exploring beautiful destinations"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-surface-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To create seamless, enriching travel experiences that connect people with the world's most incredible destinations while supporting local communities and sustainable tourism.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                text: "To be the world's most trusted and innovative travel company, inspiring millions to explore, discover, and embrace the beauty of our planet.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-8 shadow-card"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              Trusted by Thousands
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, label: "Certified Travel Agency", value: "ISO 9001" },
              { icon: Users, label: "Happy Travelers", value: "500+" },
              { icon: Target, label: "Tour Destinations", value: "50+" },
              { icon: Award, label: "Industry Awards", value: "12" },
            ].map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-xl bg-card shadow-card"
              >
                <badge.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-heading font-bold text-2xl text-foreground">{badge.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{badge.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </Layout>
  );
};

export default About;
