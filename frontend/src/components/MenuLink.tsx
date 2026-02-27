export default function MenuLink() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#0f1d33]">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full mandala-large opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#d4af37] mb-12">
          Our Menu
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#menu"
            className="px-10 py-5 bg-[#d4af37] text-[#f5f5dc] font-serif text-xl rounded-md hover:bg-[#e6c158] transition-all duration-300 shadow-2xl hover:shadow-[#d4af37]/50 hover:scale-105 min-w-[220px]"
          >
            View Our Menu
          </a>
          <a
            href="#contact"
            className="px-10 py-5 bg-[#d4af37] text-[#f5f5dc] font-serif text-xl rounded-md hover:bg-[#e6c158] transition-all duration-300 shadow-2xl hover:shadow-[#d4af37]/50 hover:scale-105 min-w-[220px] border-2 border-[#d4af37]"
          >
            Book A Table
          </a>
        </div>
      </div>
    </section>
  );
}
