import { Leaf, Home } from 'lucide-react';

export default function Values() {
  return (
    <section className="relative py-20 bg-[#0a1628] overflow-hidden" style={{
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
      <div className="absolute inset-0 geometric-pattern opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#d4af37] mb-6">
            Our Values
          </h2>
          <p className="text-xl text-[#f5f5dc] max-w-4xl mx-auto">
            At Leander, our core values are the guiding principles that define who we are and how we serve you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-[#0f1d33]/50 border border-[#d4af37]/30 rounded-lg p-8 hover:border-[#d4af37] transition-all duration-300">
            <div className="flex justify-center mb-6">
              <Leaf className="text-[#d4af37]" size={56} />
            </div>
            <h3 className="text-3xl font-serif font-bold text-[#d4af37] mb-4 text-center">
              Quality Ingredients
            </h3>
            <p className="text-[#f5f5dc] leading-relaxed text-lg">
              We source the finest, freshest ingredients to ensure every dish meets our exacting standards. From hand-selected spices to premium meats and vegetables, quality is never compromised. Our commitment to excellence means you taste the difference in every bite.
            </p>
          </div>

          <div className="bg-[#0f1d33]/50 border border-[#d4af37]/30 rounded-lg p-8 hover:border-[#d4af37] transition-all duration-300">
            <div className="flex justify-center mb-6">
              <Home className="text-[#d4af37]" size={56} />
            </div>
            <h3 className="text-3xl font-serif font-bold text-[#d4af37] mb-4 text-center">
              Authentic Tradition
            </h3>
            <p className="text-[#f5f5dc] leading-relaxed text-lg">
              We honor the centuries-old culinary traditions of Hyderabad, preserving authentic recipes and cooking methods passed down through generations. Our kitchen is a bridge between heritage and modernity, where time-honored techniques meet contemporary dining experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
