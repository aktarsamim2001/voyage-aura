import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, MapPin, Clock, ArrowRight, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { tours, categories } from "@/data/tours";

const Tours = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [budget, setBudget] = useState("all");
  const [duration, setDuration] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      if (search && !tour.title.toLowerCase().includes(search.toLowerCase()) && !tour.location.toLowerCase().includes(search.toLowerCase())) return false;
      if (category !== "all" && tour.category !== category) return false;
      if (budget === "under500" && tour.price >= 500) return false;
      if (budget === "500-1000" && (tour.price < 500 || tour.price > 1000)) return false;
      if (budget === "1000-2000" && (tour.price < 1000 || tour.price > 2000)) return false;
      if (budget === "over2000" && tour.price <= 2000) return false;
      return true;
    });
  }, [search, category, budget, duration]);

  return (
    <Layout>
      <SEO
        title="Tour Packages"
        description="Browse handcrafted domestic & international tour packages. Filter by budget, category & duration. Adventure, family, honeymoon & religious tours available."
      />
      {/* Header */}
      <section className="pt-28 pb-12 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-heading font-bold text-3xl md:text-5xl text-primary-foreground mb-3">
              Explore Our Tours
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-lg mx-auto">
              Browse through our handcrafted tour packages and find your perfect adventure.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        {/* Search & Filters */}
        <div className="bg-card rounded-xl p-5 shadow-card mb-8 -mt-16 relative z-10">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search destinations, tours..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              className="md:hidden gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <div className={`flex flex-col md:flex-row gap-3 ${showFilters ? "flex" : "hidden md:flex"}`}>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full md:w-44">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>{cat.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={budget} onValueChange={setBudget}>
                <SelectTrigger className="w-full md:w-44">
                  <SelectValue placeholder="Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Budget</SelectItem>
                  <SelectItem value="under500">Under $500</SelectItem>
                  <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                  <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                  <SelectItem value="over2000">Over $2,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-muted-foreground text-sm mb-6">
          Showing <span className="text-foreground font-medium">{filteredTours.length}</span> tour packages
        </p>

        {/* Tour Grid */}
        {filteredTours.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No tours match your filters. Try adjusting your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour, i) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/tours/${tour.id}`}
                  className="group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
                >
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
                    <span className="absolute top-3 left-3 bg-card/90 backdrop-blur-sm text-foreground text-xs font-medium px-2.5 py-1 rounded-full capitalize">
                      {tour.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{tour.rating}</span>
                      <span className="text-sm text-muted-foreground">({tour.reviewCount})</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
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
                          <span className="text-sm text-muted-foreground line-through mr-2">${tour.originalPrice}</span>
                        )}
                        <span className="font-heading font-bold text-xl text-primary">${tour.price}</span>
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
        )}
      </div>
    </Layout>
  );
};

export default Tours;
