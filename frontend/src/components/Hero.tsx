import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
// A beautiful, high-quality image of an authentic Indian dish.
// This is a free-to-use image from Pels.
const heroImageUrl = "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const orderOnlineUrl = "https://order.toasttab.com/online/hyderabadi-spicy-matka-austin-13920-ronald-reagan-boulevard?diningOption=takeout&rwg_token=ACgRB3fzbgWj3AOY84RWOd5sf-8R3Z7EX_2ckvqtpWB8Mvd_LCCJr9BmT89NiZreWNM1EAAuawhsMCTZSglmyTTBQcr0JB787g%3D%3D";

import halal from '../images/halal.png';
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden" style={{
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
      {/* --- NEW: Halal Logo positioned top-right --- */}
        <motion.div 
            className="absolute top-4 right-4 z-20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <img src={halal} alt="Halal Certified" className="w-20 h-20 md:w-24 md:h-20" />
        </motion.div>

      {/* Background decorative elements for depth and luxury */}
      <div className="absolute inset-0 opacity-5 mandala-pattern z-0"></div>
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-[#d4af37]/10 to-transparent blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tl from-[#d4af37]/5 to-transparent blur-3xl animate-pulse-slow animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen pt-28 pb-16 md:pt-20">
          
          {/* ====== Left Column: Text Content ====== */}
          <div className="text-center md:text-left animate-fade-in-right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-[#d4af37] tracking-tight leading-tight">
              Best <span className="text-[#f5f5dc]">INDIAN CUISINE</span> in LEANDER
            </h1>
             {/* Typing Effect */}
            <div className="text-2xl sm:text-3xl text-[#f5f5dc] font-semibold pt-10">
              <ReactTyped
                strings={[
                  "Authentic Hyderabadi Flavors",
                  "Modern Dining Experience",
                  "Crafted with Fresh Spices",
                  "Taste the Soul of Hyderabad",
                  "Made fresh with every order",
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1500}
                loop
              />
            </div>
            <p className="mt-6 text-lg text-[#f5f5dc]/70 max-w-xl mx-auto md:mx-0">
              Crafted with the finest spices and freshest ingredients, our kitchen brings the soul of Hyderabad to your plate.
            </p>
            
            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/menu"
                className="group inline-flex items-center justify-center px-8 py-3 bg-[#d4af37] text-[#0a1628] font-sans text-lg font-bold rounded-md hover:bg-[#e6c158] transition-all duration-300 shadow-2xl hover:shadow-[#d4af37]/40 transform hover:-translate-y-1"
              >
                View Our Menu
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={orderOnlineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-[#d4af37] text-[#d4af37] font-sans text-lg font-bold rounded-md hover:bg-[#d4af37] hover:text-[#0a1628] transition-all duration-300 transform hover:-translate-y-1"
              >
                Order Online
              </a>
            </div>
          </div>

          {/* ====== Right Column: Image ====== */}
          <div className="relative flex items-center justify-center w-full max-w-md mx-auto md:max-w-none animate-fade-in-left">
             {/* Decorative outer ring */}
             <div className="absolute inset-0 border-2 border-[#d4af37]/20 rounded-full"></div>
             
             {/* The image container */}
             <div className="relative w-full aspect-square p-4">
                <img
                    src={heroImageUrl}
                    alt="Authentic Hyderabadi Dish"
                    className="w-full h-full object-cover rounded-full shadow-2xl shadow-[#d4af37]/20 animate-spin-slow"



                />
                {/* Subtle inner glow effect */}
                <div className="absolute inset-0 rounded-full ring-4 ring-inset ring-[#d4af37]/30"></div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";
// import { ReactTyped } from "react-typed"; // 👈 new import
// import halal from "../images/halal.png";

// const heroImageUrl =
//   "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

// const orderOnlineUrl =
//   "https://order.toasttab.com/online/hyderabadi-spicy-matka-austin-13920-ronald-reagan-boulevard?diningOption=takeout&rwg_token=ACgRB3fzbgWj3AOY84RWOd5sf-8R3Z7EX_2ckvqtpWB8Mvd_LCCJr9BmT89NiZreWNM1EAAuawhsMCTZSglmyTTBQcr0JB787g%3D%3D";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden font-sans" // 👈 more casual font
//       style={{
//         background: `
//           linear-gradient(
//             to right,
//             rgba(11, 19, 43, 0.6) 5%,
//             transparent 30%,
//             transparent 70%,
//             rgba(11, 19, 43, 0.6) 95%
//           ),
//           url("data:image/svg+xml,%3Csvg width='80' height='88' ... %3E"),
//           #0B132B
//         `,
//       }}
//     >
//       {/* --- Halal Logo with subtle animation --- */}
//       <motion.div
//         className="absolute top-4 right-4 z-20"
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, delay: 1 }}
//       >
//         <img
//           src={halal}
//           alt="Halal Certified"
//           className="w-20 h-20 md:w-24 md:h-20"
//         />
//       </motion.div>

//       {/* Background decorations */}
//       <div className="absolute inset-0 opacity-5 mandala-pattern z-0"></div>

//       <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-[#d4af37]/10 to-transparent blur-3xl animate-pulse-slow"></div>
//       <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tl from-[#d4af37]/5 to-transparent blur-3xl animate-pulse-slow animation-delay-2000"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen pt-28 pb-16 md:pt-20">
          
//           {/* ====== Left Column ====== */}
//           <div className="text-center md:text-left space-y-6"> {/* 👈 adds spacing between lines */}
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#d4af37] tracking-tight leading-snug">
//               Best <span className="text-[#f5f5dc]">INDIAN CUISINE</span> in LEANDER
//             </h1>

//             {/* Typing Effect */}
//             <div className="text-2xl sm:text-3xl text-[#f5f5dc] font-semibold">
//               <ReactTyped
//                 strings={[
//                   "Authentic Hyderabadi Flavors",
//                   "Modern Dining Experience",
//                   "Crafted with Fresh Spices",
//                   "Taste the Soul of Hyderabad",
//                 ]}
//                 typeSpeed={50}
//                 backSpeed={30}
//                 backDelay={1500}
//                 loop
//               />
//             </div>

//             <p className="mt-6 text-lg text-[#f5f5dc]/80 max-w-xl mx-auto md:mx-0 leading-relaxed">
//               Every dish is a story — slow-cooked, rich with tradition, and served with warmth.
//             </p>

//             {/* Action Buttons */}
//             <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//               <Link
//                 to="/menu"
//                 className="group inline-flex items-center justify-center px-8 py-3 bg-[#d4af37] text-[#0a1628] text-lg font-bold rounded-md hover:bg-[#e6c158] transition-all duration-300 shadow-2xl hover:shadow-[#d4af37]/40 transform hover:-translate-y-1"
//               >
//                 View Our Menu
//                 <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
//               </Link>
//               <a
//                 href={orderOnlineUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#d4af37] text-[#d4af37] text-lg font-bold rounded-md hover:bg-[#d4af37] hover:text-[#0a1628] transition-all duration-300 transform hover:-translate-y-1"
//               >
//                 Order Online
//               </a>
//             </div>
//           </div>

//           {/* ====== Right Column (Image) ====== */}
//           <div className="relative flex items-center justify-center w-full max-w-md mx-auto md:max-w-none">
//             <motion.div
//               className="relative w-full aspect-square p-4"
//               animate={{ rotate: 360 }}
//               transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
//             >
//               <img
//                 src={heroImageUrl}
//                 alt="Authentic Hyderabadi Dish"
//                 className="w-full h-full object-cover rounded-full shadow-2xl shadow-[#d4af37]/20"
//               />
//               <div className="absolute inset-0 rounded-full ring-4 ring-inset ring-[#d4af37]/30"></div>
//             </motion.div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
