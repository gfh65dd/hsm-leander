

interface EventProps {
  title: string;
  description: string;
  imageLink?: string;
  imageUrl?: string;
}

export default function EventCard({ title, description, imageLink, imageUrl }: EventProps) {
  const finalImage = imageUrl || imageLink;


  return (
    <div className="bg-[#0a1628] border border-[#d4af37]/30 rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl flex flex-col h-full">
      {/* Event Image */}
      <div className="h-80 overflow-hidden relative">
        <img
          src={finalImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent opacity-60"></div>
      </div>

      {/* Event Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-serif font-bold text-[#d4af37] mb-3">{title}</h3>

        <p className="text-[#f5f5dc]/80 mb-6 line-clamp-3 leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
}