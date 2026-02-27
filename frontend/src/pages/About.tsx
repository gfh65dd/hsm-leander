import SEO from '../components/SEO';
import About from '../components/About';
import Values from '../components/Values';

/**
 * The About Us page component.
 * It combines the "About" and "Our Values" sections.
 */
export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us | Hyderabadi Spicy Matka"
        description="Learn about the origins of Hyderabadi Spicy Matka. Discover the secret behind our clay pot cooking and authentic flavors."
      />
      <About />
      <Values />
    </>
  );
}
