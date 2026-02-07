import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Star, MapPin, Clock, Check, X, ChevronRight, Phone, MessageCircle,
  Calendar, Users, Mail, User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { tours } from "@/data/tours";
import { useState } from "react";

const TourDetail = () => {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!tour) {
    return (
      <Layout>
        <SEO title="Tour Not Found" description="The tour you're looking for doesn't exist." noIndex />
        <div className="pt-28 pb-20 text-center container mx-auto px-4">
          <h1 className="font-heading font-bold text-3xl text-foreground mb-4">Tour Not Found</h1>
          <p className="text-muted-foreground mb-6">The tour you're looking for doesn't exist.</p>
          <Link to="/tours">
            <Button className="bg-primary text-primary-foreground">Browse Tours</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={`${tour.title} - ${tour.location}`}
        description={`${tour.duration} tour in ${tour.location} from $${tour.price}/person. ${tour.description.slice(0, 120)}...`}
        ogImage={tour.image}
        ogType="product"
      />
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 text-hero-muted text-sm mb-2">
              <Link to="/" className="hover:text-hero transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link to="/tours" className="hover:text-hero transition-colors">Tours</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-hero">{tour.title}</span>
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-5xl text-hero mb-3">
              {tour.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-hero-muted">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {tour.location}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {tour.duration}
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-accent text-accent" />
                {tour.rating} ({tour.reviewCount} reviews)
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Tour Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{tour.description}</p>
            </motion.section>

            {/* Highlights */}
            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tour.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-3 bg-primary-light rounded-lg px-4 py-3">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground text-sm font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Day-wise Itinerary</h2>
              <Accordion type="single" collapsible defaultValue="day-1" className="space-y-3">
                {tour.itinerary.map((day) => (
                  <AccordionItem
                    key={day.day}
                    value={`day-${day.day}`}
                    className="border border-border rounded-lg px-5 data-[state=open]:shadow-card"
                  >
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-3 text-left">
                        <span className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-heading font-semibold text-sm shrink-0">
                          D{day.day}
                        </span>
                        <span className="font-heading font-semibold text-foreground">
                          {day.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-[52px] pb-4 text-muted-foreground leading-relaxed">
                      {day.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Inclusions / Exclusions */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" /> Inclusions
                </h3>
                <ul className="space-y-2.5">
                  {tour.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-destructive" /> Exclusions
                </h3>
                <ul className="space-y-2.5">
                  {tour.exclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <X className="w-3.5 h-3.5 text-destructive mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Gallery */}
            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">Photo Gallery</h2>
              <div className="space-y-3">
                <div className="rounded-xl overflow-hidden aspect-video">
                  <img
                    src={tour.gallery[selectedImage]}
                    alt={`${tour.title} gallery`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {tour.gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`rounded-lg overflow-hidden aspect-video border-2 transition-all ${
                        i === selectedImage ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">FAQs</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {tour.faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="border border-border rounded-lg px-5"
                  >
                    <AccordionTrigger className="hover:no-underline text-left font-medium text-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Pricing Card */}
              <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                <div className="mb-4">
                  {tour.originalPrice && (
                    <span className="text-muted-foreground line-through text-lg mr-2">
                      ${tour.originalPrice}
                    </span>
                  )}
                  <span className="font-heading font-bold text-3xl text-primary">
                    ${tour.price}
                  </span>
                  <span className="text-muted-foreground"> / person</span>
                </div>
                {tour.originalPrice && (
                  <div className="bg-accent/10 text-accent rounded-lg px-3 py-2 text-sm font-medium text-center mb-4">
                    🔥 Save ${tour.originalPrice - tour.price} per person!
                  </div>
                )}
                <a
                  href={`https://wa.me/1234567890?text=Hi!%20I'm%20interested%20in%20${encodeURIComponent(tour.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent-warm font-heading font-semibold h-12 gap-2 mb-3">
                    <MessageCircle className="w-4 h-4" /> Book via WhatsApp
                  </Button>
                </a>
                <a href="tel:+1234567890">
                  <Button variant="outline" className="w-full font-heading font-semibold h-12 gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Phone className="w-4 h-4" /> Call Us
                  </Button>
                </a>
              </div>

              {/* Inquiry Form */}
              <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                  Quick Inquiry
                </h3>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Your Name" className="pl-10" />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Phone Number" className="pl-10" />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Email Address" className="pl-10" />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input type="date" className="pl-10" />
                  </div>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Number of People" type="number" min="1" className="pl-10" />
                  </div>
                  <Textarea placeholder="Any special requests..." rows={3} />
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary-deep font-heading font-semibold h-11">
                    Send Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TourDetail;
