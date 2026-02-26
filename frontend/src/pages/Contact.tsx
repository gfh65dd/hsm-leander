import SEO from '../components/SEO';
import Contact from '../components/Contact';

/**
 * The Contact page component.
 * It displays the contact information and form.
 */
export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us | Hyderabadi Spicy Matka"
        description="Get in touch with Hyderabadi Spicy Matka located in Leander. Find our address, phone number, and hours of operation, or send us a message."
      />
      <Contact />
    </>
  );
}
