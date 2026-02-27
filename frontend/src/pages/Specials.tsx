import SEO from '../components/SEO';
import { useEffect, useState } from 'react';
import { specialsApi } from '../api/api';
import { ChefHat } from 'lucide-react';
import EventCard from '../components/EventCard';

export default function Specials() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    specialsApi.getAll()
      .then(setEvents)
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <SEO
        title="Upcoming Specials | Hyderabadi Spicy Matka"
        description="Don't miss our exciting upcoming specials, seasonal menus, and unique recipes at Hyderabadi Spicy Matka in Leander!"
      />
      <section className="min-h-screen py-20 overflow-hidden relative" style={{
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
        <div className="absolute inset-0 pattern-overlay opacity-5 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-[#f5f5dc]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#d4af37] mb-4">Upcoming Specials</h2>
            <div className="h-1 w-24 bg-[#d4af37] mx-auto rounded-full"></div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#d4af37]"></div>
            </div>
          ) : events.length === 0 ? (
            <div className="flex flex-col items-center py-20 bg-[#0a1628]/50 rounded-2xl border border-[#d4af37]/20">
              <ChefHat size={80} className="text-[#d4af37] opacity-80" />
              <h3 className="text-4xl font-serif font-bold mt-4">COMING SOON</h3>
              <p className="text-[#d4af37] mt-2">New flavors are simmering in our kitchen!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  description={event.description}
                  imageUrl={event.imageLink} 
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}