import SEO from '../components/SEO';
import { Phone, Mail, ChefHat, MessageCircle } from "lucide-react";
import catering1 from "../images/live catering setup.jpg"
import catering2 from "../images/indian catering food.jpg"
import catering3 from "../images/event catering.jpg"



// Safe background style for esbuild
const sectionBgStyle: React.CSSProperties = {
  background: `
    linear-gradient(to right, rgba(11, 19, 43, 0.6) 5%, transparent 30%, transparent 70%, rgba(11, 19, 43, 0.6) 95%),
    url("data:image/svg+xml,%3Csvg width='80' height='88' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='%23efbf04' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E"),
    #0B132B
  `,
};

const cateringFormUrl =
  "https://forms.gle/4mCcMmwJ9KW4p5qx5";

export default function CateringPage() {
  return (
    <>
      <SEO
        title="Live Catering Services | Hyderabadi Spicy Matka"
        description="Bring authentic Hyderabadi flavors to your special events! Our live catering service delivers freshly prepared Indian dishes and an unforgettable culinary experience."
      />
      <section className="relative py-24 sm:py-12 bg-[#0B132B]" style={sectionBgStyle}>
        <div className="max-w-7xl mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-16">
            <ChefHat className="mx-auto text-[#d4af37] mb-4" size={60} />
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#d4af37] mb-6">
              Live Catering Services
            </h1>
            <p className="text-xl text-[#f5f5dc] max-w-3xl mx-auto leading-relaxed">
              Bring the authentic flavors of Hyderabad to your special events.
              Our live catering service delivers freshly prepared dishes,
              professional service, and an unforgettable culinary experience
              for every occasion.
            </p>
          </div>

          {/* Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
            <img src={catering1} alt="Live Catering Setup" className="rounded-lg object-cover h-64 w-full" />
            <img src={catering2} alt="Indian Catering Food" className="rounded-lg object-cover h-64 w-full" />
            <img src={catering3} alt="Event Catering" className="rounded-lg object-cover h-64 w-full" />
          </div>

          {/* Contact Info */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#d4af37] mb-6">
              Contact Us for Catering
            </h2>

            <div className="flex flex-col sm:flex-row justify-center gap-6 text-xl">
              <a
                href="tel:+17373406589"
                className="flex items-center gap-2 text-[#d4af37] hover:text-[#e6c158]"
              >
                <Phone /> +1 512-456-0273
              </a>
              {/* WhatsApp Link */}
              <a
                href="https://wa.me/17373406589"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#d4af37] hover:text-[#e6c158] transition-colors"
              >
                {/* If using Lucide icons, you can use MessageSquare or MessageCircle */}
                <MessageCircle /> +1 737-340-6589
              </a>
              <a
                href="mailto:Hsmaustin.Leander@gmail.com"
                className="flex items-center gap-2 text-[#d4af37] hover:text-[#e6c158]"
              >
                <Mail /> hsmaustin.leander@gmail.com
              </a>
            </div>
          </div>




          {/* Google Form CTA */}
          <div className="max-w-3xl mx-auto text-center bg-[#0f1d33]/70 border border-[#d4af37]/40 rounded-lg p-10">
            <h3 className="text-3xl font-serif font-bold text-[#d4af37] mb-4">
              Request a Catering Quote
            </h3>
            <p className="text-lg text-[#f5f5dc] mb-8">
              Fill out our catering request form and our team will get back to you
              promptly with availability and pricing.
            </p>

            <a
              href={cateringFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#d4af37] text-[#0B132B] font-semibold px-8 py-4 rounded-lg hover:bg-[#e6c158] transition-all"
            >
              Open Catering Request Form
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
