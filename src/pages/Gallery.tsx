import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/Layout";

import tourBali from "@/assets/tour-bali.jpg";
import tourSwitzerland from "@/assets/tour-switzerland.jpg";
import tourSantorini from "@/assets/tour-santorini.jpg";
import tourKashmir from "@/assets/tour-kashmir.jpg";
import tourDubai from "@/assets/tour-dubai.jpg";
import tourThailand from "@/assets/tour-thailand.jpg";
import heroBanner from "@/assets/hero-banner.jpg";
import ctaBg from "@/assets/cta-background.jpg";
import categoryAdventure from "@/assets/category-adventure.jpg";
import categoryFamily from "@/assets/category-family.jpg";
import categoryHoneymoon from "@/assets/category-honeymoon.jpg";
import categoryInternational from "@/assets/category-international.jpg";

const galleryImages = [
  { src: heroBanner, alt: "Tropical paradise beach", category: "Beaches" },
  { src: tourBali, alt: "Bali rice terraces", category: "Nature" },
  { src: tourSwitzerland, alt: "Swiss Alps landscape", category: "Mountains" },
  { src: tourSantorini, alt: "Santorini blue domes", category: "Cities" },
  { src: tourKashmir, alt: "Kashmir valley", category: "Nature" },
  { src: tourDubai, alt: "Dubai skyline", category: "Cities" },
  { src: tourThailand, alt: "Thailand islands", category: "Beaches" },
  { src: ctaBg, alt: "Tropical islands aerial", category: "Beaches" },
  { src: categoryAdventure, alt: "Mountain hiking", category: "Adventure" },
  { src: categoryFamily, alt: "Family beach vacation", category: "Beaches" },
  { src: categoryHoneymoon, alt: "Romantic sunset", category: "Romance" },
  { src: categoryInternational, alt: "Paris Eiffel Tower", category: "Cities" },
];

const filterCategories = ["All", "Beaches", "Mountains", "Nature", "Cities", "Adventure", "Romance"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter);

  return (
    <Layout>
      <section className="pt-28 pb-12 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading font-bold text-3xl md:text-5xl text-primary-foreground mb-3">
              Our Gallery
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-lg mx-auto">
              A glimpse into the extraordinary experiences that await you.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-heading font-medium transition-all ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary-light hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <motion.div
              key={`${img.src}-${i}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="break-inside-avoid"
            >
              <button
                onClick={() => setLightboxIndex(i)}
                className="block w-full rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/20 flex items-center justify-center hover:bg-card/40 transition-colors"
              onClick={() => setLightboxIndex(null)}
            >
              <X className="w-5 h-5 text-primary-foreground" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={filtered[lightboxIndex]?.src}
              alt={filtered[lightboxIndex]?.alt}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
