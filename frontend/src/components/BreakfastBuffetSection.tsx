import { Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import breakfast from "../images/Breakfast.png"
import breakfastMenu from "../images/breakfast_menu.pdf";

// Safe background style for esbuild
const sectionBgStyle: React.CSSProperties = {
  background: `
    linear-gradient(to right, rgba(11, 19, 43, 0.6) 5%, transparent 30%, transparent 70%, rgba(11, 19, 43, 0.6) 95%),
    url("data:image/svg+xml,%3Csvg width='80' height='88' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='%23efbf04' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E"),
    #0B132B
  `,
};



export default function BreakfastBuffetSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0B132B]" style={sectionBgStyle} >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div>
            <Coffee className="text-[#d4af37] mb-4" size={56} />

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#d4af37] mb-6">
              Breakfast Buffet and Combos
            </h2>

            <p className="text-xl text-[#f5f5dc] leading-relaxed mb-6">
              Begin your morning with our authentic South Indian breakfast buffet and combos,
              freshly prepared with traditional flavors inspired by Hyderabad.
              Enjoy soft idlis, crispy dosas, flavorful curries, and house-made
              chutneys served hot and fresh.
            </p>

            <p className="text-lg text-[#f5f5dc] mb-8">
              Breakfast buffet and Combos is available on select days. Please contact us for
              current availability and timings.
            </p>

           <a
  href={breakfastMenu}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-[#d4af37] text-[#0B132B] font-semibold px-8 py-4 rounded-lg hover:bg-[#e6c158] transition-all duration-300"
>
  Explore Breakfast combos Menu
</a>
          </div>

          {/* Image */}
          <div className="relative rounded-xl overflow-hidden border-2 border-[#d4af37]/40 shadow-2xl">
            <img
              src= {breakfast}

              alt="South Indian Breakfast Buffet"
              className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
