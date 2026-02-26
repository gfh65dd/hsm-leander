"use client";

import { motion } from "framer-motion";
import pic1 from "../images/2.jpg"; // update paths to your images
import pic2 from "../images/3.jpg";


export default function SignatureDishes() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background: `
          linear-gradient(
            to right,
            rgba(11, 19, 43, 0.6) 5%,
            transparent 30%,
            transparent 70%,
            rgba(11, 19, 43, 0.6) 95%
          ),
          url("data:image/svg+xml,%3Csvg width='80' height='88' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='%23efbf04' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E"),
          #0B132B
        `,
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#d4af37] mb-6">
            Our Signature <span className="text-[#efbf04]">Dishes</span>
          </h2>
          <p className="text-xl text-[#f5f5dc] max-w-3xl mx-auto">
            Every dish tells a story of authentic Hyderabadi tradition.
          </p>
        </motion.div>

        {/* Dishes Grid (Restored from Old Layout) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Dish 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-500">
              <img
                src={pic1}
                alt="Spiced dishes"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6 text-[#f5f5dc]">
                <h3 className="text-2xl font-serif font-bold text-[#d4af37] mb-2">
                  Spiced to Perfection
                </h3>
                <p className="text-[#f5f5dc]/80 font-sans">
                  Traditional spices blended with modern techniques
                </p>
              </div>
            </div>
          </motion.div>

          {/* Dish 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-500">
              <img
                src={pic2}
                alt="Sweet desserts"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6 text-[#f5f5dc]">
                <h3 className="text-2xl font-serif font-bold text-[#d4af37] mb-2">
                  A Sweet Finale
                </h3>
                <p className="text-[#f5f5dc]/80 font-sans">
                  Indulgent desserts that complete your journey
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
