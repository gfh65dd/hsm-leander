import SEO from '../components/SEO';
import Gallery from '../components/Gallery';

/**
 * The Gallery page component.
 * It displays the image gallery.
 */
export default function GalleryPage() {
  return (
    <>
      <SEO
        title="Gallery | Hyderabadi Spicy Matka"
        description="View photos of our delicious authentic Indian cuisine, restaurant ambiance, and our signature matka dishes."
      />
      <Gallery />
    </>
  );
}
