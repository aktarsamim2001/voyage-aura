import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/home/HeroSection";
import TourCategories from "@/components/home/TourCategories";
import PopularTours from "@/components/home/PopularTours";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Dream Travels - Live Your Dream"
        description="Premium tour packages for domestic & international destinations. Adventure, family, honeymoon & religious tours. Book your dream journey today!"
      />
      <HeroSection />
      <TourCategories />
      <PopularTours />
      <WhyChooseUs />
      <TestimonialsSlider />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
