import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import TourCategories from "@/components/home/TourCategories";
import PopularTours from "@/components/home/PopularTours";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <Layout>
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
