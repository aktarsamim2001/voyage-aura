import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Tours", path: "/tours" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Dream Travels Logo" className="w-10 h-10 rounded-lg object-contain" />
            <div className="flex flex-col leading-tight">
              <span
                className={`font-heading font-bold text-lg transition-colors ${
                  isScrolled ? "text-foreground" : "text-hero"
                }`}
              >
                Dream Travels
              </span>
              <span
                className={`text-[10px] font-medium transition-colors ${
                  isScrolled ? "text-muted-foreground" : "text-hero-muted"
                }`}
              >
                Live Your Dream
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? isScrolled
                      ? "text-primary bg-primary-light"
                      : "text-hero bg-primary/20"
                    : isScrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                    : "text-hero-muted hover:text-hero hover:bg-primary/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+1234567890"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                isScrolled ? "text-muted-foreground" : "text-hero-muted"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>+1 234 567 890</span>
            </a>
            <Link to="/tours">
              <Button className="bg-accent text-accent-foreground hover:bg-accent-warm font-heading font-semibold shadow-lg hover:shadow-xl transition-all">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? (
              <X className={isScrolled ? "text-foreground" : "text-hero"} />
            ) : (
              <Menu className={isScrolled ? "text-foreground" : "text-hero"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-primary bg-primary-light"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-border flex flex-col gap-2">
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground"
                >
                  <Phone className="w-4 h-4" />
                  +1 234 567 890
                </a>
                <Link to="/tours">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent-warm font-heading font-semibold">
                    Book Now
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
