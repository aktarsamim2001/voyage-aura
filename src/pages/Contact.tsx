import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="pt-28 pb-12 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading font-bold text-3xl md:text-5xl text-primary-foreground mb-3">
              Contact Us
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-lg mx-auto">
              Have questions? We'd love to hear from you. Get in touch with our team.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 -mt-12">
          {/* Contact Info Cards */}
          {[
            {
              icon: Phone,
              title: "Call Us",
              lines: ["+1 234 567 890", "+1 234 567 891"],
              action: { label: "Call Now", href: "tel:+1234567890" },
            },
            {
              icon: Mail,
              title: "Email Us",
              lines: ["hello@wanderlux.com", "bookings@wanderlux.com"],
              action: { label: "Send Email", href: "mailto:hello@wanderlux.com" },
            },
            {
              icon: MapPin,
              title: "Visit Us",
              lines: ["123 Travel Street", "Tourism Hub, City 10001"],
              action: { label: "Get Directions", href: "#map" },
            },
          ].map((info, i) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-7 shadow-card text-center relative z-10"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-light mx-auto flex items-center justify-center mb-4">
                <info.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{info.title}</h3>
              {info.lines.map((line) => (
                <p key={line} className="text-muted-foreground text-sm">{line}</p>
              ))}
              <a href={info.action.href}>
                <Button variant="outline" size="sm" className="mt-4 text-primary border-primary hover:bg-primary hover:text-primary-foreground font-heading">
                  {info.action.label}
                </Button>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Form + WhatsApp */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-8 shadow-card border border-border"
          >
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Send a Message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Full Name" className="pl-10" />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Email" type="email" className="pl-10" />
                </div>
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Phone Number" className="pl-10" />
              </div>
              <Input placeholder="Subject" />
              <Textarea placeholder="Your message..." rows={5} />
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary-deep font-heading font-semibold h-12 gap-2">
                <Send className="w-4 h-4" /> Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* WhatsApp CTA */}
            <div className="bg-card rounded-xl p-8 shadow-card border border-border">
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                Prefer WhatsApp?
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Get instant responses from our travel experts. We're available 24/7 to help you plan your perfect trip.
              </p>
              <a
                href="https://wa.me/1234567890?text=Hi!%20I%20want%20to%20know%20more%20about%20your%20tours."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-primary-foreground font-heading font-semibold h-12 gap-2">
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </Button>
              </a>
            </div>

            {/* Business Hours */}
            <div className="bg-card rounded-xl p-8 shadow-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-heading font-semibold text-xl text-foreground">Business Hours</h3>
              </div>
              <ul className="space-y-3 text-sm">
                {[
                  { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
                  { day: "Saturday", time: "10:00 AM - 5:00 PM" },
                  { day: "Sunday", time: "Closed (WhatsApp available)" },
                ].map((item) => (
                  <li key={item.day} className="flex justify-between">
                    <span className="text-muted-foreground">{item.day}</span>
                    <span className="font-medium text-foreground">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map placeholder */}
            <div id="map" className="rounded-xl overflow-hidden border border-border h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
