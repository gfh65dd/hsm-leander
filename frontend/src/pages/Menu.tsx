import SEO from '../components/SEO';
import Menu from '../components/Menu';
import ProTips from '../components/ProTips';

/**
 * The Menu page component.
 * It displays the full restaurant menu.
 */
export default function MenuPage() {
  return (
    <>
      <SEO
        title="Our Menu | Hyderabadi Spicy Matka"
        description="Explore our authentic Indian menu featuring a variety of curries, spicy tandoori grills, dum biryani, and extensive vegetarian options."
      />
      <Menu />
      <ProTips />
    </>
  );
}
