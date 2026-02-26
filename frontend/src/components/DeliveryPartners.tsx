"use client";

import { Clock, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import grubhub from "../images/delivery/grubhub.png";
import ubereats from "../images/delivery/ubereats.png";
import doordash from "../images/delivery/doordash.png";

interface DeliveryPlatform {
  name: string;
  logo: string; // If using Next.js Image imports, this type might need to be StaticImageData
  estimatedTime: string;
  url: string;
}

const deliveryPlatforms: DeliveryPlatform[] = [
  {
    name: "Grub Hub",
    logo: grubhub,
    estimatedTime: "20–35 min",
    url: "https://www.grubhub.com/restaurant/hyderabadi-spicy-matka-leander-13920-ronald-reagan-blvd-leander/11002760?utm_source=grubhub_iosapp&utm_medium=content_owned&utm_campaign=menushare&utm_content=share-link",
  },
  {
    name: "DoorDash",
    logo: doordash,
    estimatedTime: "25–40 min",
    url: "https://www.doordash.com/store/33841151?utm_source=mx_share&aw=bn35qfnuMbX2uzfw",
  },
  {
    name: "Uber Eats",
    logo: ubereats,
    estimatedTime: "20–30 min",
    url: "https://www.ubereats.com/store-browse-uuid/c9d028b3-4f64-4da2-b4c0-b99e1d5c8314?diningMode=DELIVERY",
  },
];

export default function DeliveryPartners() {
  return (
    <section 
      className="py-20 relative overflow-hidden"
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
        `
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5DC] mb-4 font-serif">
            Get It <span className="text-[#FFC72C]">Delivered</span>
          </h2>
          <p className="text-xl text-[#F5F5DC]/80 max-w-2xl mx-auto font-sans">
            Your favorite dishes delivered right to your doorstep by our trusted partners.
          </p>
        </motion.div>

        {/* Cards */}
<motion.div
  className="grid md:grid-cols-3 gap-6"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
>
  {deliveryPlatforms.map((platform) => (
    <motion.a
      key={platform.name}
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group" // 'group' allows us to animate children on hover
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className="p-6 rounded-2xl transition-all duration-300 bg-[#ffffff0a] border border-[#ffffff1a] hover:border-[#FFC72C]/50 cursor-pointer h-full"
        style={{
          backgroundColor: "#a376792e", // Your original color
        }}
      >
        <div className="text-center">
          {/* Logo */}
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-white shadow-lg flex items-center justify-center">
            <img
              src={platform.logo.src || platform.logo}
              alt={`${platform.name} logo`}
              className="w-full h-full object-contain p-2" // Changed to object-contain to keep logos from being cut off
            />
          </div>

          {/* Platform Name */}
          <h3
            className="text-xl font-bold mb-3"
            style={{ color: "#FFC72C" }}
          >
            {platform.name}
          </h3>

          {/* Estimated Time */}
          <div className="space-y-2 text-sm text-[#f5f5dc] mb-4">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="h-4 w-4 text-[#F5F5DC]" />
              <span>{platform.estimatedTime}</span>
            </div>
          </div>

          {/* CTA - Now with a hover effect */}
          <div
            className="flex items-center justify-center space-x-2 text-sm font-medium transition-colors group-hover:text-[#FFC72C]"
            style={{ color: "#F5F5DC" }}
          >
            <span>Order Now</span>
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>
      </div>
    </motion.a>
  ))}
</motion.div>

      </div>
    </section>
  );
}