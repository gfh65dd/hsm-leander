import { Mail, Phone, MapPin, ChefHat } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const googleMapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194.3474532618727!2d-97.79164686274096!3d30.5443642471198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b2d624e0ddd25%3A0xf542405fa38e011e!2sHYDERABADI%20SPICY%20MATKA%20-%20LEANDER%20-%20INDIAN%20CUISINE!5e0!3m2!1sen!2sin!4v1760984697170!5m2!1sen!2sin";

const googleMapsDirectUrl =
  "https://www.google.com/maps/place/HYDERABADI+SPICY+MATKA+-+LEANDER+-+INDIAN+CUISINE/@30.5443906,-97.791667,19z/data=!4m6!3m5!1s0x865b2d624e0ddd25:0xf542405fa38e011e!8m2!3d30.5443906!4d-97.791667!16s%2Fg%2F11v0w_z9px?entry=ttu";

// Safe background style for esbuild
const sectionBgStyle: React.CSSProperties = {
  background: `
    linear-gradient(to right, rgba(11, 19, 43, 0.6) 5%, transparent 30%, transparent 70%, rgba(11, 19, 43, 0.6) 95%),
    url("data:image/svg+xml,%3Csvg width='80' height='88' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='%23efbf04' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E"),
    #0B132B
  `,
};

export default function ContactPage() {
  return (
    <section id="contact" className="relative py-24 sm:py-16 overflow-hidden" style={sectionBgStyle}>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#d4af37] mb-6">
            Contact Us
          </h2>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Mail */}
          <div className="text-center bg-[#0f1d33]/50 border border-[#d4af37]/30 rounded-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Mail className="text-[#d4af37]" size={40} />
            </div>
            <h3 className="text-xl font-serif text-[#f5f5dc] mb-2">Mail us at</h3>
            <a
              href="mailto:Hsmaustin.Leander@gmail.com"
              className="text-[#d4af37] hover:text-[#e6c158] transition-colors text-lg"
            >
              hsmaustin.leander@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="text-center bg-[#0f1d33]/50 border border-[#d4af37]/30 rounded-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Phone className="text-[#d4af37]" size={40} />
            </div>
            <h3 className="text-xl font-serif text-[#f5f5dc] mb-2">Call us at</h3>
            <a
              href="tel:+15124560273"
              className="text-[#d4af37] hover:text-[#e6c158] transition-colors text-lg"
            >
              +1 512-456-0273
            </a>
          </div>

          {/* WhatsApp */}
          <div className="text-center bg-[#0f1d33]/50 border border-[#d4af37]/30 rounded-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <FaWhatsapp className="text-[#d4af37]" size={40} />
            </div>
            <h3 className="text-xl font-serif text-[#f5f5dc] mb-2">Chat with us</h3>
            <a
              href="https://wa.me/17373406589"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4af37] hover:text-[#e6c158] transition-colors text-lg"
            >
              +1 737-340-6589
            </a>
          </div>
        </div>

        {/* Google Maps */}
        <div className="my-24">
          <h3 className="text-4xl font-serif text-center font-bold text-[#d4af37] mb-8">
            Find Us Here
          </h3>
          <a
            href={googleMapsDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block group rounded-xl overflow-hidden border-2 border-[#d4af37]/40 hover:border-[#d4af37] transition-all duration-300 shadow-2xl hover:shadow-[#d4af37]/20 transform hover:scale-105"
            aria-label="Open location in Google Maps"
          >
            <iframe
              src={googleMapsEmbedUrl}
              className="w-full h-80 md:h-96 pointer-events-none"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            ></iframe>
          </a>
        </div>

        {/* Catering Section 
        <div className="max-w-4xl mx-auto bg-[#0f1d33]/70 border border-[#d4af37]/40 rounded-lg p-10 text-center">
          <div className="flex justify-center mb-6">
            <ChefHat className="text-[#d4af37]" size={56} />
          </div>
          <h3 className="text-4xl font-serif font-bold text-[#d4af37] mb-4">
            Exquisite Catering Services
          </h3>
          <p className="text-xl text-[#f5f5dc] mb-6 leading-relaxed">
            Elevate your events with the unforgettable flavors of Hyderabad. From intimate gatherings to grand celebrations, our expert catering team brings authentic taste and impeccable service to your special occasions.
          </p>
          <p className="text-lg text-[#f5f5dc] mb-4">Contact us for Live Catering:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+17373406589"
              className="text-[#d4af37] hover:text-[#e6c158] transition-colors text-xl font-semibold"
            >
              +1 737-340-6589
            </a>
            <span className="hidden sm:inline text-[#d4af37]">|</span>
            <a
              href="mailto:Hsmaustin.Leander@gmail.com"
              className="text-[#d4af37] hover:text-[#e6c158] transition-colors text-xl font-semibold"
            >
              hsmaustin.leander@gmail.com
            </a>
          </div>
        </div>*/}
      </div>
    </section>
  );
}
