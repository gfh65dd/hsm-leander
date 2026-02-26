
import { useState, useMemo } from 'react';

// ===== Food Images (1–35) =====
import food1 from '../images/food/1.jpg';
import food2 from '../images/food/2.jpg';
import food3 from '../images/food/3.jpg';
import food4 from '../images/food/4.jpg';
import food5 from '../images/food/5.jpg';
import food6 from '../images/food/6.jpg';
import food7 from '../images/food/7.jpg';
import food8 from '../images/food/8.jpg';
import food9 from '../images/food/9.jpg';
import food10 from '../images/food/10.jpg';
import food11 from '../images/food/11.jpg';
import food12 from '../images/food/12.jpg';
import food13 from '../images/food/13.jpg';
import food14 from '../images/food/14.jpg';
import food15 from '../images/food/15.jpg';
import food16 from '../images/food/16.jpg';
import food17 from '../images/food/17.jpg';
import food18 from '../images/food/18.jpg';
import food19 from '../images/food/19.jpg';
import food20 from '../images/food/20.jpg';
import food21 from '../images/food/21.jpg';
import food22 from '../images/food/22.jpg';
import food23 from '../images/food/23.jpg';
import food24 from '../images/food/24.jpg';
import food25 from '../images/food/25.jpg';
import food26 from '../images/food/26.jpg';
import food27 from '../images/food/27.jpg';
import food28 from '../images/food/28.jpg';
import food29 from '../images/food/29.jpg';
import food30 from '../images/food/30.jpg';
import food31 from '../images/food/31.jpg';
import food32 from '../images/food/32.jpg';
import food33 from '../images/food/33.jpg';
import food34 from '../images/food/34.jpg';
import food35 from '../images/food/35.jpg';

// ===== Ambiance =====
import ambiance1 from '../images/ambiance/Ambiance-1.jpg';
import ambiance2 from '../images/ambiance/Ambiance-2.jpeg';
import ambiance3 from '../images/ambiance/Ambiance-3.jpeg';
import ambiance4 from '../images/ambiance/Ambiance-4.jpeg';
import ambiance5 from '../images/ambiance/Ambiance-5.jpeg';

// ===== Exterior =====
import exterior1 from '../images/exterior/exterior-1.jpg';
import exterior2 from '../images/exterior/exterior-2.jpg';
import exterior3 from '../images/exterior/exterior-3.jpg';
import exterior4 from '../images/exterior/exterior-4.jpg';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All',  'Our Ambiance', 'Our Cuisine', 'Our Exterior'];

  // ===== All Images =====
  const images = [
    // Food
    { category: 'Our Cuisine', url: food1, alt: 'Delicious Hyderabadi dish 1' },
    { category: 'Our Cuisine', url: food2, alt: 'Delicious Hyderabadi dish 2' },
    { category: 'Our Cuisine', url: food3, alt: 'Delicious Hyderabadi dish 3' },
    { category: 'Our Cuisine', url: food4, alt: 'Delicious Hyderabadi dish 4' },
    { category: 'Our Cuisine', url: food5, alt: 'Delicious Hyderabadi dish 5' },
    { category: 'Our Cuisine', url: food6, alt: 'Delicious Hyderabadi dish 6' },
    { category: 'Our Cuisine', url: food7, alt: 'Delicious Hyderabadi dish 7' },
    { category: 'Our Cuisine', url: food8, alt: 'Delicious Hyderabadi dish 8' },
    { category: 'Our Cuisine', url: food9, alt: 'Delicious Hyderabadi dish 9' },
    { category: 'Our Cuisine', url: food10, alt: 'Delicious Hyderabadi dish 10' },
    { category: 'Our Cuisine', url: food11, alt: 'Delicious Hyderabadi dish 11' },
    { category: 'Our Cuisine', url: food12, alt: 'Delicious Hyderabadi dish 12' },
    { category: 'Our Cuisine', url: food13, alt: 'Delicious Hyderabadi dish 13' },
    { category: 'Our Cuisine', url: food14, alt: 'Delicious Hyderabadi dish 14' },
    { category: 'Our Cuisine', url: food15, alt: 'Delicious Hyderabadi dish 15' },
    { category: 'Our Cuisine', url: food16, alt: 'Delicious Hyderabadi dish 16' },
    { category: 'Our Cuisine', url: food17, alt: 'Delicious Hyderabadi dish 17' },
    { category: 'Our Cuisine', url: food18, alt: 'Delicious Hyderabadi dish 18' },
    { category: 'Our Cuisine', url: food19, alt: 'Delicious Hyderabadi dish 19' },
    { category: 'Our Cuisine', url: food20, alt: 'Delicious Hyderabadi dish 20' },
    { category: 'Our Cuisine', url: food21, alt: 'Delicious Hyderabadi dish 21' },
    { category: 'Our Cuisine', url: food22, alt: 'Delicious Hyderabadi dish 22' },
    { category: 'Our Cuisine', url: food23, alt: 'Delicious Hyderabadi dish 23' },
    { category: 'Our Cuisine', url: food24, alt: 'Delicious Hyderabadi dish 24' },
    { category: 'Our Cuisine', url: food25, alt: 'Delicious Hyderabadi dish 25' },
    { category: 'Our Cuisine', url: food26, alt: 'Delicious Hyderabadi dish 26' },
    { category: 'Our Cuisine', url: food27, alt: 'Delicious Hyderabadi dish 27' },
    { category: 'Our Cuisine', url: food28, alt: 'Delicious Hyderabadi dish 28' },
    { category: 'Our Cuisine', url: food29, alt: 'Delicious Hyderabadi dish 29' },
    { category: 'Our Cuisine', url: food30, alt: 'Delicious Hyderabadi dish 30' },
    { category: 'Our Cuisine', url: food31, alt: 'Delicious Hyderabadi dish 31' },
    { category: 'Our Cuisine', url: food32, alt: 'Delicious Hyderabadi dish 32' },
    { category: 'Our Cuisine', url: food33, alt: 'Delicious Hyderabadi dish 33' },
    { category: 'Our Cuisine', url: food34, alt: 'Delicious Hyderabadi dish 34' },
    { category: 'Our Cuisine', url: food35, alt: 'Delicious Hyderabadi dish 35' },

    // Ambiance
    { category: 'Our Ambiance', url: ambiance1, alt: 'Restaurant interior ambiance 1' },
    { category: 'Our Ambiance', url: ambiance2, alt: 'Restaurant interior ambiance 2' },
    { category: 'Our Ambiance', url: ambiance3, alt: 'Restaurant interior ambiance 3' },
    { category: 'Our Ambiance', url: ambiance4, alt: 'Restaurant interior ambiance 4' },
    { category: 'Our Ambiance', url: ambiance5, alt: 'Restaurant interior ambiance 5' },

    // Exterior
    { category: 'Our Exterior', url: exterior1, alt: 'Restaurant exterior front view 1' },
    { category: 'Our Exterior', url: exterior2, alt: 'Restaurant exterior front view 2' },
    { category: 'Our Exterior', url: exterior3, alt: 'Restaurant exterior front view 3' },
    { category: 'Our Exterior', url: exterior4, alt: 'Restaurant exterior front view 4' },
  ];

  // ===== Shuffle all images ONCE =====
  const shuffledImages = useMemo(() => {
    return [...images].sort(() => Math.random() - 0.5);
  }, []);

  const filteredImages =
    activeCategory === 'All'
      ? shuffledImages
      : shuffledImages.filter((img) => img.category === activeCategory);

  return (
    <section
      id="gallery"
      className="relative py-20 bg-[#0a1628] overflow-hidden"
       style={{
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
        `,
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#d4af37] mb-6">
            Our Gallery
          </h2>
          <p className="text-xl text-[#f5f5dc]">
            A visual journey through our culinary world.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 font-serif text-lg transition-all duration-300 ${
                activeCategory === category
                  ? 'text-[#d4af37] border-b-2 border-[#d4af37]'
                  : 'text-[#f5f5dc] hover:text-[#d4af37]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group cursor-pointer aspect-square"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d4af37] transition-all duration-300 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-[#0f1d33]/50 border border-[#d4af37]/30 rounded-lg p-12">
          <h3 className="text-3xl font-serif font-bold text-[#d4af37] mb-4">
            Experience It Yourself
          </h3>
          <p className="text-xl text-[#f5f5dc] mb-8">
            Pictures can't capture the full experience - come taste our story.
          </p>
          <a
            href="https://order.toasttab.com/online/hyderabadi-spicy-matka-austin-13920-ronald-reagan-boulevard?diningOption=takeout"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-10 py-4 bg-[#d4af37] text-[#0a1628] font-serif text-lg rounded-md hover:bg-[#e6c158] transition-all duration-300 shadow-2xl hover:shadow-[#d4af37]/50 hover:scale-105"
          >
            Order Online
          </a>
        </div>
      </div>
    </section>
  );
}
