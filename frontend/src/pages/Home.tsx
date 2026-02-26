import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Speciality from '../components/Speciality';
import SignatureDishes from '../components/SignatureDishes';
import Ambiance from '../components/Ambiance';
import Testimonials from '../components/Testimonials';
import Rating from '../components/Rating';
import DeliveryPartners from '../components/DeliveryPartners';
import BreakfastBuffetSection from "../components/BreakfastBuffetSection";
/**
 * The Home page component.
 * It assembles all the sections that should appear on the main landing page.
 */
export default function Home() {
  return (
    <>
      <SEO
        title="Hyderabadi Spicy Matka | Authentic Indian Restaurant Leander"
        description="Experience the rich, authentic flavors of Hyderabad right here in Leander, TX. From fragrant dum biryanis to rich curries and tandoori specials."
      />
      <Hero />
      {/* <VideoText /> */}

      <Speciality />
      <SignatureDishes />
      <Ambiance />
      <BreakfastBuffetSection />
      <Testimonials />
      <Rating />
      <DeliveryPartners />
    </>
  );
}
