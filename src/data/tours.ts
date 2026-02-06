import tourBali from "@/assets/tour-bali.jpg";
import tourSwitzerland from "@/assets/tour-switzerland.jpg";
import tourSantorini from "@/assets/tour-santorini.jpg";
import tourKashmir from "@/assets/tour-kashmir.jpg";
import tourDubai from "@/assets/tour-dubai.jpg";
import tourThailand from "@/assets/tour-thailand.jpg";
import categoryAdventure from "@/assets/category-adventure.jpg";
import categoryFamily from "@/assets/category-family.jpg";
import categoryHoneymoon from "@/assets/category-honeymoon.jpg";
import categoryInternational from "@/assets/category-international.jpg";
import categoryReligious from "@/assets/category-religious.jpg";

export interface Tour {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  highlights: string[];
  description: string;
  itinerary: { day: number; title: string; description: string }[];
  inclusions: string[];
  exclusions: string[];
  faqs: { question: string; answer: string }[];
  gallery: string[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  tourCount: number;
}

export const categories: Category[] = [
  {
    id: "adventure",
    title: "Adventure Tours",
    description: "Thrilling expeditions for the bold explorer",
    image: categoryAdventure,
    icon: "⛰️",
    tourCount: 24,
  },
  {
    id: "family",
    title: "Family Tours",
    description: "Create unforgettable memories together",
    image: categoryFamily,
    icon: "👨‍👩‍👧‍👦",
    tourCount: 18,
  },
  {
    id: "honeymoon",
    title: "Honeymoon Tours",
    description: "Romantic getaways for newlyweds",
    image: categoryHoneymoon,
    icon: "💑",
    tourCount: 15,
  },
  {
    id: "international",
    title: "International Tours",
    description: "Explore the world's iconic destinations",
    image: categoryInternational,
    icon: "✈️",
    tourCount: 32,
  },
  {
    id: "religious",
    title: "Religious Tours",
    description: "Spiritual journeys to sacred places",
    image: categoryReligious,
    icon: "🕌",
    tourCount: 12,
  },
];

export const tours: Tour[] = [
  {
    id: "bali-paradise",
    title: "Bali Paradise Escape",
    location: "Bali, Indonesia",
    duration: "6 Days / 5 Nights",
    price: 899,
    originalPrice: 1199,
    rating: 4.9,
    reviewCount: 234,
    image: tourBali,
    category: "international",
    highlights: [
      "Ubud Rice Terraces",
      "Tanah Lot Temple",
      "Kuta Beach",
      "Traditional Spa",
      "Monkey Forest",
    ],
    description:
      "Experience the magic of Bali with this carefully curated tour package. From ancient temples to pristine beaches, discover why Bali is called the Island of the Gods.",
    itinerary: [
      { day: 1, title: "Arrival & Welcome", description: "Airport pickup, hotel check-in, welcome dinner with traditional Balinese dance performance." },
      { day: 2, title: "Ubud Exploration", description: "Visit the Sacred Monkey Forest, Tegallalang Rice Terraces, and local artisan workshops." },
      { day: 3, title: "Temple Trail", description: "Explore Tanah Lot Temple at sunset, Uluwatu Temple, and enjoy a traditional Kecak Fire Dance." },
      { day: 4, title: "Beach & Water Sports", description: "Morning at Nusa Dua Beach, afternoon snorkeling, and sunset at Kuta Beach." },
      { day: 5, title: "Spa & Culture", description: "Traditional Balinese spa treatment, cooking class, and visit to Tirta Empul Water Temple." },
      { day: 6, title: "Departure", description: "Leisure morning, souvenir shopping, and airport transfer." },
    ],
    inclusions: ["5-star hotel accommodation", "Daily breakfast & dinner", "Airport transfers", "All entrance fees", "Professional guide", "Spa session"],
    exclusions: ["International flights", "Travel insurance", "Personal expenses", "Lunch", "Tips & gratuities"],
    faqs: [
      { question: "What is the best time to visit Bali?", answer: "April to October offers the best weather with minimal rainfall." },
      { question: "Do I need a visa for Bali?", answer: "Many nationalities get visa-free entry for 30 days." },
      { question: "Is this tour suitable for families?", answer: "Yes, we can customize the itinerary for families with children." },
    ],
    gallery: [tourBali, tourThailand, tourSantorini],
  },
  {
    id: "swiss-alpine",
    title: "Swiss Alpine Adventure",
    location: "Switzerland",
    duration: "8 Days / 7 Nights",
    price: 2499,
    originalPrice: 2999,
    rating: 4.8,
    reviewCount: 156,
    image: tourSwitzerland,
    category: "adventure",
    highlights: [
      "Jungfraujoch",
      "Lake Lucerne",
      "Interlaken",
      "Swiss Chocolate Tour",
      "Glacier Express",
    ],
    description:
      "Discover the breathtaking beauty of Switzerland. From snow-capped Alps to crystal-clear lakes, this premium tour covers the best of Swiss landscapes and culture.",
    itinerary: [
      { day: 1, title: "Zurich Arrival", description: "Arrive in Zurich, city tour, evening at Lake Zurich." },
      { day: 2, title: "Lucerne Day", description: "Chapel Bridge, Lion Monument, Lake Lucerne cruise." },
      { day: 3, title: "Interlaken", description: "Travel to Interlaken, paragliding option, Harder Kulm viewpoint." },
      { day: 4, title: "Jungfraujoch", description: "Top of Europe excursion, Ice Palace, Sphinx Observatory." },
      { day: 5, title: "Grindelwald", description: "First Cliff Walk, alpine meadows, traditional Swiss dinner." },
      { day: 6, title: "Glacier Express", description: "Scenic train journey through the Alps to Zermatt." },
      { day: 7, title: "Matterhorn", description: "Gornergrat Railway, views of Matterhorn, chocolate workshop." },
      { day: 8, title: "Departure", description: "Transfer to Geneva airport." },
    ],
    inclusions: ["4-star hotel stays", "Glacier Express ticket", "Jungfraujoch pass", "Daily breakfast", "All transfers", "English-speaking guide"],
    exclusions: ["International flights", "Travel insurance", "Lunches & dinners", "Optional activities", "Tips"],
    faqs: [
      { question: "What is the best season?", answer: "June to September for summer activities, December to March for skiing." },
      { question: "Is the tour physically demanding?", answer: "Moderate fitness level recommended for mountain excursions." },
    ],
    gallery: [tourSwitzerland, tourKashmir, tourDubai],
  },
  {
    id: "santorini-romance",
    title: "Santorini Romantic Getaway",
    location: "Santorini, Greece",
    duration: "5 Days / 4 Nights",
    price: 1599,
    originalPrice: 1899,
    rating: 4.9,
    reviewCount: 312,
    image: tourSantorini,
    category: "honeymoon",
    highlights: [
      "Oia Sunset",
      "Caldera Cruise",
      "Wine Tasting",
      "Private Beach",
      "Greek Cuisine",
    ],
    description:
      "The ultimate romantic escape to the stunning island of Santorini. White-washed buildings, breathtaking sunsets, and Mediterranean charm await.",
    itinerary: [
      { day: 1, title: "Island Welcome", description: "Airport transfer to luxury cave hotel, welcome champagne, sunset at Oia." },
      { day: 2, title: "Caldera Cruise", description: "Full-day catamaran cruise around the caldera with BBQ lunch on board." },
      { day: 3, title: "Wine & Culture", description: "Visit Santo Wines, Akrotiri archaeological site, and Red Beach." },
      { day: 4, title: "Leisure & Spa", description: "Couples spa treatment, private cooking class, candlelit dinner." },
      { day: 5, title: "Departure", description: "Breakfast with caldera view, airport transfer." },
    ],
    inclusions: ["Luxury cave hotel", "Caldera cruise", "Couples spa", "Daily breakfast & 2 dinners", "Airport transfers", "Wine tasting"],
    exclusions: ["Flights", "Travel insurance", "Personal expenses", "Lunch (except cruise day)"],
    faqs: [
      { question: "When is the best time to visit Santorini?", answer: "May to October, with September being ideal for fewer crowds." },
      { question: "Is this only for couples?", answer: "While designed for couples, it can be enjoyed by anyone." },
    ],
    gallery: [tourSantorini, tourBali, tourThailand],
  },
  {
    id: "kashmir-heaven",
    title: "Kashmir - Heaven on Earth",
    location: "Kashmir, India",
    duration: "7 Days / 6 Nights",
    price: 649,
    originalPrice: 849,
    rating: 4.7,
    reviewCount: 189,
    image: tourKashmir,
    category: "family",
    highlights: [
      "Dal Lake Houseboat",
      "Gulmarg Gondola",
      "Pahalgam Valley",
      "Mughal Gardens",
      "Shikara Ride",
    ],
    description:
      "Discover the paradise of Kashmir with its stunning valleys, serene lakes, and snow-capped mountains. A perfect blend of adventure and relaxation.",
    itinerary: [
      { day: 1, title: "Srinagar Arrival", description: "Airport pickup, check-in to houseboat on Dal Lake, Shikara ride." },
      { day: 2, title: "Mughal Gardens", description: "Visit Nishat Bagh, Shalimar Bagh, and Chashme Shahi gardens." },
      { day: 3, title: "Gulmarg Excursion", description: "Drive to Gulmarg, Gondola ride to Apharwat Peak, snow activities." },
      { day: 4, title: "Pahalgam", description: "Travel to Pahalgam, Betaab Valley, Aru Valley exploration." },
      { day: 5, title: "Pahalgam Activities", description: "Horse riding to Baisaran, river rafting on Lidder River." },
      { day: 6, title: "Sonmarg Day Trip", description: "Visit Thajiwas Glacier, Zoji La views, return to Srinagar." },
      { day: 7, title: "Departure", description: "Morning floating market visit, airport transfer." },
    ],
    inclusions: ["Houseboat stay (2 nights)", "Hotel accommodation (4 nights)", "All meals", "Gondola tickets", "Shikara ride", "All transfers"],
    exclusions: ["Flights", "Travel insurance", "Horse riding charges", "Personal expenses"],
    faqs: [
      { question: "Is Kashmir safe for tourists?", answer: "Yes, tourist areas are well-maintained and safe for visitors." },
      { question: "What should I pack?", answer: "Warm layers even in summer, comfortable walking shoes, and rain gear." },
    ],
    gallery: [tourKashmir, tourSwitzerland, tourBali],
  },
  {
    id: "dubai-luxury",
    title: "Dubai Luxury Experience",
    location: "Dubai, UAE",
    duration: "5 Days / 4 Nights",
    price: 1299,
    originalPrice: 1599,
    rating: 4.8,
    reviewCount: 267,
    image: tourDubai,
    category: "international",
    highlights: [
      "Burj Khalifa",
      "Desert Safari",
      "Dubai Mall",
      "Palm Jumeirah",
      "Dhow Cruise",
    ],
    description:
      "Experience the opulence of Dubai with this luxury tour package. From towering skyscrapers to golden deserts, Dubai offers a world of contrasts.",
    itinerary: [
      { day: 1, title: "Grand Arrival", description: "Luxury airport transfer, Burj Khalifa At the Top, Dubai Fountain show." },
      { day: 2, title: "City Wonders", description: "Dubai Frame, Gold Souk, Spice Souk, Dhow Cruise dinner." },
      { day: 3, title: "Desert Adventure", description: "Morning at Dubai Mall & Aquarium, evening desert safari with BBQ dinner." },
      { day: 4, title: "Beach & Leisure", description: "Palm Jumeirah, Atlantis Aquaventure, Madinat Jumeirah." },
      { day: 5, title: "Departure", description: "Duty-free shopping, airport transfer." },
    ],
    inclusions: ["5-star hotel", "Desert safari", "Burj Khalifa tickets", "Dhow cruise", "Daily breakfast", "All transfers"],
    exclusions: ["Flights", "Travel insurance", "Lunch & dinner (except specified)", "Shopping"],
    faqs: [
      { question: "What is the best time to visit Dubai?", answer: "November to March for pleasant weather." },
      { question: "Do I need a visa?", answer: "Many nationalities get visa on arrival. Check with your embassy." },
    ],
    gallery: [tourDubai, tourSantorini, tourBali],
  },
  {
    id: "thailand-tropical",
    title: "Thailand Tropical Bliss",
    location: "Thailand",
    duration: "7 Days / 6 Nights",
    price: 799,
    originalPrice: 999,
    rating: 4.6,
    reviewCount: 198,
    image: tourThailand,
    category: "adventure",
    highlights: [
      "Phi Phi Islands",
      "Bangkok Temples",
      "Floating Market",
      "Thai Cooking Class",
      "Maya Bay",
    ],
    description:
      "From bustling Bangkok to pristine islands, experience the best of Thailand. A perfect mix of culture, adventure, and relaxation.",
    itinerary: [
      { day: 1, title: "Bangkok Arrival", description: "Airport transfer, Khao San Road evening walk." },
      { day: 2, title: "Bangkok Temples", description: "Grand Palace, Wat Pho, Wat Arun, evening tuk-tuk tour." },
      { day: 3, title: "Floating Market", description: "Damnoen Saduak Floating Market, Maeklong Railway Market." },
      { day: 4, title: "Fly to Phuket", description: "Flight to Phuket, Patong Beach, evening Thai massage." },
      { day: 5, title: "Phi Phi Islands", description: "Full-day island hopping, Maya Bay, snorkeling, beach BBQ." },
      { day: 6, title: "Adventure Day", description: "Elephant sanctuary visit, Thai cooking class, farewell dinner." },
      { day: 7, title: "Departure", description: "Beach morning, airport transfer." },
    ],
    inclusions: ["Hotel accommodation", "Domestic flight", "Island tour", "Daily breakfast", "Cooking class", "All transfers"],
    exclusions: ["International flights", "Travel insurance", "Lunch & dinner (except specified)", "Optional activities"],
    faqs: [
      { question: "Is Thailand budget-friendly?", answer: "Yes, Thailand offers excellent value for money at all budget levels." },
      { question: "Do I need vaccinations?", answer: "Consult your doctor for recommended travel vaccinations." },
    ],
    gallery: [tourThailand, tourBali, tourDubai],
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Sarah Mitchell",
    avatar: "SM",
    location: "New York, USA",
    rating: 5,
    review: "Our Bali trip was absolutely magical! Every detail was perfectly arranged. The guides were knowledgeable and the accommodations exceeded our expectations.",
    tour: "Bali Paradise Escape",
  },
  {
    id: "2",
    name: "Rahul Sharma",
    avatar: "RS",
    location: "Mumbai, India",
    rating: 5,
    review: "The Kashmir tour was the best family vacation we've ever had. The houseboat experience on Dal Lake was unforgettable. Highly recommend!",
    tour: "Kashmir - Heaven on Earth",
  },
  {
    id: "3",
    name: "Emma Thompson",
    avatar: "ET",
    location: "London, UK",
    rating: 5,
    review: "Santorini was a dream come true for our honeymoon. The cave hotel with caldera views was spectacular. Thank you Wanderlux for making it perfect!",
    tour: "Santorini Romantic Getaway",
  },
  {
    id: "4",
    name: "James Rodriguez",
    avatar: "JR",
    location: "Madrid, Spain",
    rating: 4,
    review: "The Swiss Alpine Adventure was breathtaking. The Glacier Express journey through the Alps is something everyone should experience at least once.",
    tour: "Swiss Alpine Adventure",
  },
];
