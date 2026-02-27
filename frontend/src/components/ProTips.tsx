import { Star } from 'lucide-react';

export default function ProTips() {
  const tips = [
    {
      title: 'The Spice Cipher',
      text: "Unsure about the heat? Our chefs wield the spice wand! Mention your preference – from a gentle monsoon shower to a desert inferno – and we'll craft your perfect kick. We don't hold back by default, so speak your fiery truth!",
    },
    {
      title: "The Early Bird's Bounty",
      text: 'For the swift and strategic, call in your pickup order 30 minutes ahead. Bypass the wait, conquer your hunger faster, and claim your culinary prize!',
    },
    {
      title: 'The Daily Decree',
      text: "Always inquire about our Chef's Daily Decree and Grand Combo Deals. These are treasures for the discerning palate and the wise wallet, often featuring seasonal delights or exclusive pairings. A royal secret, just for you!",
    },
    {
      title: 'The Matka Magic',
      text: "Remember, many of our dishes are slow-cooked in traditional clay 'matka' pots – this isn't just a tradition, it's a flavor enchantment! Expect deeper aromas and tender textures, a true taste of heritage.",
    },
    {
      title: 'Dessert Delights',
      text: "While your savory quest is epic, your journey isn't complete without a 'Sweet Finale.' Our indulgent desserts are the crowning jewels of your Hyderabadi experience. Don't skip the royal treats!",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#8b0000]/20 to-[#0a1628] overflow-hidden" style={{
  background: `
    /* Layer 1 (Top): Soft vignette */
    linear-gradient(
      to right,
      rgba(11, 19, 43, 0.6) 5%,
      transparent 30%,
      transparent 70%,
      rgba(11, 19, 43, 0.6) 95%
    ),

    /* Layer 2 (Middle): Transparent SVG pattern */
    url("data:image/svg+xml,%3Csvg width='80' height='88' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='%23efbf04' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E"),

    /* Layer 3 (Bottom): Solid background color */
    #0B132B
  `
}}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 mandala-pattern"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#d4af37] mb-4">
            Sultan's Secrets for a Legendary Meal!
          </h2>
          <p className="text-lg text-[#f5f5dc]">
            The Maharaja's Manual: Elevate Your Feast
          </p>
        </div>

        <div className="space-y-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-[#0f1d33]/70 border border-[#d4af37]/40 rounded-lg p-6 hover:border-[#d4af37] transition-all duration-300 hover:shadow-xl hover:shadow-[#d4af37]/20"
            >
              <div className="flex items-start gap-4">
                <Star className="text-[#d4af37] flex-shrink-0 mt-1" size={24} fill="#d4af37" />
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#d4af37] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-[#f5f5dc] leading-relaxed">{tip.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
