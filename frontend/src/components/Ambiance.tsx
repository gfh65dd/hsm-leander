import ambiance from '../images/Ambiance/Ambiance-1.jpg';

export default function Ambiance() {
  return (
    <section className="relative py-32 overflow-hidden" style={{
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
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0a1628]/60 to-[#0a1628]"></div>
        <img
          // src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920"
          src = {ambiance}
          alt="Restaurant Ambiance"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute top-0 right-0 w-1/2 h-full mandala-pattern opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-sans font-bold text-[#d4af37] mb-6">
          The Perfect Ambiance for Every Occasion
        </h2>
        <p className="text-xl text-[#f5f5dc]">
          From casual dinners to festive celebrations, we create memorable experiences.
        </p>
      </div>
    </section>
  );
}
