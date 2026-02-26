import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import p4 from '../images/4.jpg';
import p5 from '../images/5.jpg';

// // A high-quality, vibrant image of Indian spices. Free to use from Pexels.
// const ingredientsImageUrl = "https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";


// Safe background style for esbuild
const sectionBgStyle: React.CSSProperties = {
  background: `
    linear-gradient(to right, rgba(11, 19, 43, 0.6) 5%, transparent 30%, transparent 70%, rgba(11, 19, 43, 0.6) 95%),
    url("data:image/svg+xml,%3Csvg width='80' height='88' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='%23efbf04' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E"),
    #0B132B
  `,
};


export default function Speciality() {
  return (
    <section 
      className="relative py-24 sm:py-32 overflow-hidden" 
      style={sectionBgStyle}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* ====== Left Column: Image ====== */}
          <div className="group relative animate-fade-in-right">
            <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-[#d4af37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
            <img 
              src={p5} 
              alt="Aromatic spices and fresh ingredients" 
              className="relative w-full h-full object-cover rounded-xl shadow-2xl shadow-black/40"
            />
          </div>

          {/* ====== Right Column: Text Content ====== */}
          <div className="animate-fade-in-left">
            <div className="flex items-center gap-4 mb-4">
              <Sparkles className="text-[#d4af37]" size={32} />
              <div className="h-px flex-grow bg-gradient-to-r from-[#d4af37]/50 to-transparent"></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#d4af37] mb-4 leading-tight">
              Our Speciality
            </h2>
            
            <p className="text-xl sm:text-2xl font-serif text-[#f5f5dc] mb-6">
              Our culinary philosophy is simple: perfection begins with fresh and quality ingredients.
            </p>
            <p className="text-lg text-[#f5f5dc]/70 mb-8">
              We meticulously source the freshest produce and most aromatic spices, honoring ancient traditions while crafting a modern dining experience. Each dish is a testament to our commitment to quality, from the farm to your plate.
            </p>

            <Link
              to="/menu"
              className="inline-block px-8 py-3 bg-transparent border-2 border-[#d4af37] text-[#d4af37] font-sans text-lg font-bold rounded-md hover:bg-[#d4af37] hover:text-[#0a1628] transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore The Menu
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
