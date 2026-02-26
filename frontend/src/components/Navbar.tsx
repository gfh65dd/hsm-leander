/*
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../images/logo.png';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Menu', to: '/menu' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'About', to: '/about' },
    {name:"Catering", to: '/catering'},
    { name: 'Contact Us', to: '/contact' },
    { name : 'Specials', to : '/specials'},
  ];

  const activeLinkStyle = {
    color: '#d4af37',
  };

  const orderOnlineUrl ="https://order.toasttab.com/online/hyderabadi-spicy-matka-austin-13920-ronald-reagan-boulevard?diningOption=takeout&rwg_token=ACgRB3fzbgWj3AOY84RWOd5sf-8R3Z7EX_2ckvqtpWB8Mvd_LCCJr9BmT89NiZreWNM1EAAuawhsMCTZSglmyTTBQcr0JB787g%3D%3D";
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628] border-b border-[#b8860b]/20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {// CHANGE: Increased navbar height slightly (from h-20 → h-24) }
        <div className="flex justify-between items-center h-24">
          
          {// Logo + Name }
          <div className="flex items-center space-x-3 flex-shrink-0">
            <img
              src={logo}
              alt="Hyderabadi Spicy Matka Logo"
              className="h-20 w-20 rounded-full object-cover"
            />

            {// CHANGE: Added subtitle ("Leander") under main title }
            <Link to="/" className="flex flex-col leading-tight">
              <span className="text-xl sm:text-2xl font-bold text-[#d4af37] tracking-wide">
                Hyderabadi Spicy Matka
              </span>
              <span className="text-lg text-[#d4af37]/80 font-bold tracking-wide -mt-1">
                Leander
              </span>
            </Link>
          </div>

          {// Desktop Navigation }
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                className="nav-link text-[#f5f5dc] font-sans text-lg transition-all duration-300 hover:text-[#d4af37] relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
            <a
              href={orderOnlineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#d4af37] text-[#0a1628] font-sans font-bold rounded-md hover:bg-[#e6c158] transition-all duration-300 shadow-lg hover:shadow-[#d4af37]/50"
            >
              Order Online
            </a>
          </div>

          {// Mobile Menu Button }
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#d4af37] hover:text-[#e6c158] transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {// Mobile Menu }
      {isOpen && (
        <div className="md:hidden bg-[#0a1628] border-t border-[#b8860b]/20">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                className="block text-[#f5f5dc] font-sans text-lg py-2 hover:text-[#d4af37] transition-colors"
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href={orderOnlineUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-2 bg-[#d4af37] text-[#0a1628] font-sans font-bold rounded-md hover:bg-[#e6c158] transition-all duration-300"
            >
              Order Online
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
*/

// size reduce code

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Menu', to: '/menu' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'About', to: '/about' },
    { name: "Catering", to: '/catering'},
    { name: 'Contact Us', to: '/contact' },
    { name : 'Specials', to : '/specials'},
  ];

  const activeLinkStyle = {
    color: '#d4af37',
  };

  const orderOnlineUrl ="https://order.toasttab.com/online/hyderabadi-spicy-matka-austin-13920-ronald-reagan-boulevard?diningOption=takeout&rwg_token=ACgRB3fzbgWj3AOY84RWOd5sf-8R3Z7EX_2ckvqtpWB8Mvd_LCCJr9BmT89NiZreWNM1EAAuawhsMCTZSglmyTTBQcr0JB787g%3D%3D";
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628] border-b border-[#b8860b]/20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center h-24">
          
          {/* Logo + Name */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <img
              src={logo}
              alt="Hyderabadi Spicy Matka Logo"
              className="h-20 w-20 rounded-full object-cover"
            />

            <Link to="/" className="flex flex-col leading-tight">
              <span className="text-xl sm:text-2xl font-bold text-[#d4af37] tracking-wide">
                Hyderabadi Spicy Matka
              </span>
              <span className="text-lg text-[#d4af37]/80 font-bold tracking-wide -mt-1">
                Leander
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                /* CHANGED: text-lg to text-base (makes it smaller) */
                className="nav-link text-[#f5f5dc] font-sans text-base transition-all duration-300 hover:text-[#d4af37] relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
            <a
              href={orderOnlineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#d4af37] text-[#0a1628] font-sans font-bold rounded-md hover:bg-[#e6c158] transition-all duration-300 shadow-lg hover:shadow-[#d4af37]/50"
            >
              Order Online
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#d4af37] hover:text-[#e6c158] transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a1628] border-t border-[#b8860b]/20">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                /* CHANGED: text-lg to text-base (makes it smaller) */
                className="block text-[#f5f5dc] font-sans text-base py-2 hover:text-[#d4af37] transition-colors"
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href={orderOnlineUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-2 bg-[#d4af37] text-[#0a1628] font-sans font-bold rounded-md hover:bg-[#e6c158] transition-all duration-300"
            >
              Order Online
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
