import { Instagram, Facebook, MessageCircle, CreditCard, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {

    const footerLinks = [
      { name: 'Home', to: '/' },
      { name: 'Menu', to: '/menu' },
      { name: 'Gallery', to: '/gallery' },
      { name: 'About', to: '/about' },
      { name: 'Contact Us', to: '/contact' },
    ];
    
    const orderOnlineUrl = "https://order.toasttab.com/online/hyderabadi-spicy-matka-austin-13920-ronald-reagan-boulevard?diningOption=takeout&rwg_token=ACgRB3fzbgWj3AOY84RWOd5sf-8R3Z7EX_2ckvqtpWB8Mvd_LCCJr9BmT89NiZreWNM1EAAuawhsMCTZSglmyTTBQcr0JB787g%3D%3D";
    const instagramUrl = "https://www.instagram.com/hyderabadispicymatka_leander?igsh=YXRyOWZvbjdldmNu";
    const facebookUrl = "https://www.facebook.com/p/Hyderabadispicymatkaleander-61573797226148/";
    const whatsappUrl = "https://wa.me/17373406589";


  return (
    <footer className="relative bg-[#050b14] border-t border-[#d4af37]/20 overflow-hidden pt-16">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 mandala-large"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-[#d4af37] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-[#f5f5dc] hover:text-[#d4af37] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a href={orderOnlineUrl} target="_blank" rel="noopener noreferrer" className="text-[#f5f5dc] hover:text-[#d4af37] transition-colors">
                  Order Online
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-[#d4af37] mb-4">Contact Us</h3>
            <ul className="space-y-3 text-[#f5f5dc]">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#d4af37] mt-1 shrink-0"/>
                <a href="mailto:hsmaustin.leander@gmail.com" className="hover:text-[#e6c158] transition-colors">
                  hsmaustin.leander@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#d4af37] mt-1 shrink-0"/>
                <a href="tel:+17373406589" className="hover:text-[#e6c158] transition-colors">
                  +1 512-456-0273
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#d4af37] mt-1 shrink-0" />
                <span>13920 Ronald Reagan Blvd, Suite 100, Leander, TX 78641</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-[#d4af37] mb-4">Hours of Operation</h3>
            <ul className="space-y-2 text-[#f5f5dc]">
              <li className="flex justify-between"><span>MON - THUR:</span> <span className="text-[#d4af37]">11:00 AM - 11:00 PM</span></li>
              <li className="flex justify-between"><span>FRIDAY :</span> <span className="text-[#d4af37]">11:00 AM - 12:00 AM</span></li>
              <li className="flex justify-between"><span>SATURDAY :</span> <span className="text-[#d4af37]">08:00 AM - 12:00 AM</span></li>
              <li className="flex justify-between"><span>SUNDAY:</span> <span className="text-[#d4af37]">08:00 AM - 10:00 PM</span></li>
            </ul>
          </div>

          {/* Follow Us & We Accept */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-[#d4af37] mb-4">Follow Us</h3>
            <div className="flex gap-4 mb-6">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[#f5f5dc] hover:text-[#d4af37] transition-colors"><Instagram size={28} /></a>
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-[#f5f5dc] hover:text-[#d4af37] transition-colors"><Facebook size={28} /></a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#f5f5dc] hover:text-[#d4af37] transition-colors"><MessageCircle size={28} /></a>
            </div>
            <div>
              <h4 className="text-lg font-serif text-[#f5f5dc] mb-2">We Accept</h4>
              <div className="flex gap-2 flex-wrap items-center">
                 <p className="text-[#d4af37]">VISA, AMEX, MASTERCARD, DISCOVER</p>
              </div>
            </div>
          </div>
        </div>


      </div>

{/* --- Sub-footer with black background and white text --- */}
<div className="bg-black text-white py-6">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm">
    <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
      <p className="opacity-60 mb-4 md:mb-0">
        © 2025 Hyderabadi Spicy Matka. All rights reserved.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-x-6 gap-y-2 opacity-60">
<p className="text-sm">
  <span className="block md:inline">
    Designed and Developed by
  </span>{' '}
  <a
    href="https://www.claratechitsolutions.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="block md:inline hover:text-[#D4C37F] transition-colors duration-200 font-medium"
  >
    CLARATECH IT SOLUTIONS PVT LTD
  </a>
</p>
        <span className="hidden md:inline">|</span>
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
      </div>
    </div>
  </div>
</div>

    </footer>
  );
}
